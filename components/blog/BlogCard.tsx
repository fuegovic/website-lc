import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Video } from '../Video';
import { Author } from '../Authors'; // Assumes Author component is in the same directory

const BlogCard = ({
  page,
  handleTagClick,
  selectedTag
}) => {
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
      <div
        className="relative h-52 md:h-64 mb-1 overflow-hidden transform scale-100 transition-transform hover:scale-105 cursor-pointer"
        onClick={handleCardClick}
        style={{ transformOrigin: 'bottom center' }}
      >
        {page.frontMatter?.ogVideo ? (
          <Video
            src={page.frontMatter.ogVideo}
            gifStyle
            className="object-cover w-full h-full mt-0"
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
            <span
              key={tag}
              className={`cursor-pointer text-xs py-1 px-2 ring-1 ring-gray-300 rounded-md ml-1 mr-1 ${
                tag === selectedTag ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => handleTagClick(tag)}
            >
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

export default BlogCard;