import { BlogIndex } from "../blog/BlogIndex";
import { HomeSection } from "./components/HomeSection";
import { Header } from "../Header";

export const FromTheBlog = () => (
  <HomeSection>
    <Header
      title="Blog"
      description="The latest articles from LibreChat"
    />
    <BlogIndex maxItems={3} />
  </HomeSection>
);
