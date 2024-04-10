import Image from "next/image";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";

type AuthorPage = Page & {
  frontMatter: {
    name: string;
    image: string;
    authorid: string;
  };
};

export const Author = ({ authorid }: { authorid: string }) => {
  const authorPages = getPagesUnderRoute("/authors");
  const page = authorPages?.find(
    (page) => (page as AuthorPage).frontMatter.authorid === authorid
  ) as AuthorPage;

  if (!page) {
    // Handle the case when the author page is not found
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
      <div className="flex items-center gap-4" key={name}>
        <Image
          src={ogImage}
          width={40}
          height={40}
          className="rounded-full"
          alt={`Picture ${name}`}
        />
        <span className="text-primary/60 group-hover:text-primary whitespace-nowrap">
          {name}
        </span>
      </div>
    </a>
  );
};