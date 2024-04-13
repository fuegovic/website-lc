import React, { useState } from "react";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";
import { useRouter } from "next/router";
import Image from "next/image";
import { Video } from "../Video";
import { Button } from "@/components/ui/button";

type AuthorPage = Page & {
  frontMatter: {
    name: string;
    ogImage: string;
    authorid: string;
    date: string;
    tags: string[];
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
        <div className="items-center justify-between mb-2">
          {page.frontMatter?.tags?.map((tag) => (
            <span key={tag} className="text-xs py-1 px-2 ring-1 ring-gray-300 rounded-md ml-1 mr-1">
              {tag}
            </span>
          ))}
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

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allPages = getPagesUnderRoute("/blog") as Array<Page & { frontMatter: any }>;
  const allTags = Array.from(new Set(allPages.flatMap(page => page.frontMatter.tags || []))).sort();
  const sortedPages = allPages.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()).slice(0, maxItems);

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTag = event.target.value === "all" ? null : event.target.value;
    setSelectedTag(selectedTag);
  };

  const filteredPages = selectedTag ? sortedPages.filter(page => page.frontMatter.tags && page.frontMatter.tags.includes(selectedTag)) : sortedPages;

  return (
    <div>
      <select className="tags-menu" onChange={handleTagChange} value={selectedTag || 'all'} style={{ width: "200px", height: "35px", borderRadius: "5px", marginBottom: "20px" }}>
        <option value="all">All Tags</option>
        {allTags.map(tag => (
    <option key={tag} value={tag} style={{ marginBottom: "20px" }}>{tag}</option>
        ))}
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {filteredPages.map((page) => (
          <BlogCard key={page.route} page={page} />
        ))}
      </div>
    </div>
  );
};
