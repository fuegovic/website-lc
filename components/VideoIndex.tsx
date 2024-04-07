import { getPagesUnderRoute } from "nextra/context";
import { type Page } from "nextra";
import { Cards } from "nextra/components";
import { Video } from "lucide-react";

export const VideoIndex = () => (
  <Cards num={2}>
    {(
      getPagesUnderRoute("/guides/videos") as Array<Page & { frontMatter: any }>
    ).map((page, i) => (
      <Cards.Card
        href={page.route}
        key={page.route}
        title={page.meta?.title || page.frontMatter?.title || page.name}
        icon={<Video />}
        arrow
        image={true} // Add this line to provide the 'image' prop
      >
        {""}
      </Cards.Card>
    ))}
  </Cards>
);
