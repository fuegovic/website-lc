import Image from "next/image";
import { Video } from "../Video";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";
import { useRouter } from "next/router";

type AuthorPage = Page & {
  frontMatter: {
    name: string;
    ogImage: string;
    authorid: string;
    date: string;
  };
};

export const Author = ({ authorid }: { authorid: string }) => {
  const authorPages = getPagesUnderRoute("/authors");
  const page = authorPages?.find(
    (page) => (page as AuthorPage).frontMatter.authorid === authorid
  ) as AuthorPage;

  if (!page) {
    console.error("Author page not found for authorid:", authorid);
    return null;
  }

  const { name, ogImage } = page.frontMatter;

  return (
    <a
      href={`/authors/${authorid}`}
      className="group shrink-0"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-2" key={name}>
        <Image
          src={ogImage}
          width={40}
          height={40}
          className="rounded-full"
          alt={`Picture ${name}`}
        />
        <span className="text-sm text-primary/60 group-hover:text-primary whitespace-nowrap">
          {name}
        </span>
      </div>
    </a>
  );
};

const BlogCard = ({ page }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(page.route);
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="relative h-52 md:h-64 mb-1 overflow-hidden transform scale-100 transition-transform hover:scale-105 cursor-pointer" onClick={handleCardClick}>
      {page.frontMatter?.ogVideo ? (
          <Video
            src={page.frontMatter.ogVideo}
            gifStyle
            className="object-cover w-full h-full"
          />
        ) : page.frontMatter?.ogImage ? (
          <Image
            src={page.frontMatter.gif ?? page.frontMatter.ogImage}
            width={1200}
            height={675}
            className="object-cover absolute top-0 left-0 w-full h-full"
            alt={page.frontMatter?.title ?? "Changelog post image"}
            unoptimized={
              page.frontMatter.gif !== undefined ||
              page.frontMatter.ogImage?.endsWith(".gif")
            }
          />
        ) : null}
      </div>
      <div className="p-4 pt-2 h-56 overflow-hidden relative">
        <div className="flex items-center justify-between mb-2">
          {page.frontMatter?.tag && (
            <span className="text-xs py-1 px-2 ring-1 ring-gray-300 rounded-md ml-1 mr-1">
              {page.frontMatter.tag}
            </span>
          )}
        </div>
        <h2 className="font-mono text-xl mb-2 ml-1 mr-1 font-bold">
          {page.meta?.title || page.frontMatter?.title || page.name}
        </h2>
        <div className="mb-2 ml-1 mr-1">
          {truncateDescription(page.frontMatter?.description || "", 160)} 
        </div>
        <div className="flex items-center justify-between absolute bottom-4 left-4 right-4">
          <Author authorid={page.frontMatter.authorid} />
          <span className="text-sm opacity-60">{page.frontMatter.date}</span>
        </div>
      </div>
    </div>
  );
};

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
    {(getPagesUnderRoute("/blog") as Array<Page & { frontMatter: any }>)
      .slice(0, maxItems)
      .map((page) => (
        <BlogCard key={page.route} page={page} />
      ))}
  </div>
);
