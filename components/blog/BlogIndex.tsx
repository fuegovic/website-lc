import React, { useState } from "react";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";
import Image from "next/image";
import BlogCard from "./BlogCard";

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

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const allPages = getPagesUnderRoute("/blog") as Array<Page & { frontMatter: any }>;
  const allTags = Array.from(new Set(allPages.flatMap((page) => page.frontMatter.tags || []))).sort();
  const allAuthors = Array.from(new Set(allPages.map((page) => page.frontMatter.authorid))).sort();
  const sortedPages = allPages.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ).slice(0, maxItems);

  const handleTagClick = (tag: string) => {
    setSelectedTag((prevTag) => (prevTag === tag || tag === 'all' ? null : tag));
  };
  
  const handleAuthorClick = (author: string) => {
    setSelectedAuthor(author === 'all' ? null : author);
  };

  const filteredPages = selectedTag
    ? sortedPages.filter((page) => page.frontMatter.tags && page.frontMatter.tags.includes(selectedTag))
    : sortedPages;

  const finalFilteredPages = selectedAuthor
    ? filteredPages.filter((page) => page.frontMatter.authorid === selectedAuthor)
    : filteredPages;

  return (
    <div>
      <select
        className="tags-menu rounded-xl"
        onChange={(e) => handleTagClick(e.target.value)}
        value={selectedTag || 'all'}
        style={{ width: "200px", height: "35px", marginBottom: "20px", marginRight: "10px" }}
      >
        <option value="all">All Tags</option>
        {allTags.map(tag => (
          <option key={tag} value={tag} style={{ marginBottom: "20px" }}>{tag}</option>
        ))}
      </select>
      <select
        className="authors-menu rounded-xl"
        onChange={(e) => handleAuthorClick(e.target.value)}
        value={selectedAuthor || 'all'}
        style={{ width: "200px", height: "35px", marginBottom: "20px" }}
      >
        <option value="all">All Authors</option>
        {allAuthors.map(author => (
          <option key={author} value={author} style={{ marginBottom: "20px" }}>{author}</option>
        ))}
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {finalFilteredPages.map((page) => (
          <BlogCard
            key={page.route}
            page={page}
            handleTagClick={handleTagClick}
            selectedTag={selectedTag}
          />
        ))}
      </div>
    </div>
  );
};
