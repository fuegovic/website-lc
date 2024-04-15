import React, { useEffect, useState } from "react";
import { getPagesUnderRoute } from "nextra/context";
import { Page } from "nextra";
import BlogCard from "./BlogCard";
import Select from 'react-select';
import { AuthorSmall } from '../Author/AuthorsSmall'; // Import the Author component

export const BlogIndex = ({ maxItems }: { maxItems?: number }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const allPages = getPagesUnderRoute("/blog") as Array<Page & { frontMatter: any }>;
  const allTags = Array.from(new Set(allPages.flatMap((page) => page.frontMatter.tags || []))).sort();
  const allAuthors = Array.from(new Set(allPages.map((page) => page.frontMatter.authorid))).sort();
  const sortedPages = allPages.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ).slice(0, maxItems);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((t) => t !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
  };
  
  const handleAuthorClick = (author: string) => {
    setSelectedAuthor(author === 'all' ? null : author);
  };

  const filteredPages = selectedTags.length
    ? sortedPages.filter((page) => page.frontMatter.tags && selectedTags.every(tag => page.frontMatter.tags.includes(tag)))
    : sortedPages;

  const finalFilteredPages = selectedAuthor
    ? filteredPages.filter((page) => page.frontMatter.authorid === selectedAuthor)
    : filteredPages;

  const [menuPortalTarget, setMenuPortalTarget] = useState(null);

  useEffect(() => {
    setMenuPortalTarget(document.body);
  }, []);

  return (
    <div>
      <Select
        className="tags-menu"
        options={allTags.map(tag => ({ value: tag, label: tag }))}
        onChange={(selectedOptions) => {
          setSelectedTags(selectedOptions ? selectedOptions.map(opt => opt.value) : []);
        }}
        value={selectedTags.map(tag => ({ value: tag, label: tag }))}
        placeholder="Select tags..."
        styles={{
          control: provided => ({
            ...provided,
            maxWidth: 250,
            minHeight: 35,
            marginBottom: 20,
            marginRight: 10,
          }),
        }}
        menuPortalTarget={menuPortalTarget}
        isClearable // Enables the clearable option
        hideSelectedOptions={false} // Show selected options in the dropdown
        isSearchable={false}
        isMulti // Enable multiple selection
      />
      <Select
        className="authors-menu"
        options={allAuthors.map(author => ({ value: author, label: <AuthorSmall authorid={author} /> }))}
        onChange={(selectedOption) => handleAuthorClick(selectedOption ? selectedOption.value : null)}
        value={selectedAuthor ? { value: selectedAuthor, label: <AuthorSmall authorid={selectedAuthor} /> } : null}
        placeholder="Select author..."
        isSearchable={false}
        isClearable
        menuPortalTarget={menuPortalTarget}
        styles={{
          control: provided => ({
            ...provided,
            width: 250,
            height: 35,
            marginBottom: 20,
          }),
        }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {finalFilteredPages.map((page) => (
          <BlogCard
            key={page.route}
            page={page}
            handleTagClick={handleTagClick}
            selectedTags={selectedTags}
          />
        ))}
      </div>
    </div>
  );
};
