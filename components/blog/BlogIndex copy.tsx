import React, { useState } from "react";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";
import { useRouter } from "next/router";
import Image from "next/image";
import { Video } from "../Video";

type AuthorPage = Page & {
  frontMatter: {
    name: string;
    ogImage: string;
    authorid: string;
    date: string;
    tags: string[];
  };
};

type BlogCardProps = {
  page: AuthorPage;
  handleTagClick: (tag: string) => void;
  handleAuthorClick: (author: string) => void;
  selectedTag: string | null;
  selectedAuthor: string | null;
};

const BlogCard = ({
  page,
  handleTagClick,
  handleAuthorClick,
  selectedTag,
  selectedAuthor
}: BlogCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(page.route);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div
        className="relative h-52 md:h-64 mb-1 overflow-hidden transform scale-100 transition-transform hover:scale-105 cursor-pointer"
        onClick={handleCardClick}
        style={{ transformOrigin: "bottom center" }}
      >
        {/* Image or Video component */}
      </div>
      <div className="p-4 pt-2 h-56 overflow-hidden relative">
        {/* Tags, Title, Description, Author */}
      </div>
    </div>
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
    setSelectedTag(tag === 'all' ? null : tag);
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
        className="tags-menu"
        onChange={(e) => handleTagClick(e.target.value)}
        value={selectedTag || 'all'}
        style={{ width: "200px", height: "35px", borderRadius: "5px", marginBottom: "20px", marginRight: "10px" }}
      >
        <option value="all">All Tags</option>
        {allTags.map(tag => (
          <option key={tag} value={tag} style={{ marginBottom: "20px" }}>{tag}</option>
        ))}
      </select>
      <select
        className="authors-menu"
        onChange={(e) => handleAuthorClick(e.target.value)}
        value={selectedAuthor || 'all'}
        style={{ width: "200px", height: "35px", borderRadius: "5px", marginBottom: "20px" }}
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
            handleAuthorClick={handleAuthorClick}
            selectedTag={selectedTag}
            selectedAuthor={selectedAuthor}
          />
        ))}
      </div>
    </div>
  );
};
