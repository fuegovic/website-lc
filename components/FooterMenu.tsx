import Link from "next/link";

const menuItems: {
  heading: string;
  items: { name: string; href: string }[];
}[] = [
  {
    heading: "Platform",
    items: [
      {
        name: "LLM Tracing",
        href: "/docs/tracing/overview",
      },
      {
        name: "Prompt Management",
        href: "/docs/prompts/get-started",
      },
      {
        name: "Evaluation",
        href: "/docs/scores/overview",
      },
      {
        name: "Datasets",
        href: "/docs/datasets/overview",
      },
      {
        name: "Metrics",
        href: "/docs/analytics",
      },
    ],
  },
  {
    heading: "Integrations",
    items: [
      {
        name: "Python SDK",
        href: "/docs/sdk/python",
      },
      {
        name: "JS/TS SDK",
        href: "/docs/sdk/typescript/guide",
      },
      {
        name: "OpenAI SDK",
        href: "/docs/integrations/openai/get-started",
      },
      {
        name: "Langchain",
        href: "/docs/integrations/langchain/tracing",
      },
      {
        name: "Llama-Index",
        href: "/docs/integrations/llama-index/get-started",
      },
      {
        name: "Litellm",
        href: "/docs/integrations/litellm",
      },
      {
        name: "Flowise",
        href: "/docs/integrations/flowise",
      },
      {
        name: "Langflow",
        href: "/docs/integrations/langflow",
      },
      {
        name: "API",
        href: "https://api.reference.langfuse.com/",
      },
    ],
  },
  {
    heading: "Resources",
    items: [
      { name: "Documentation", href: "/docs" },
      {
        name: "Demo",
        href: "https://demo.librechat.cfd/",
      },
      {
        name: "Changelog",
        href: "/changelog",
      },
      {
        name: "Roadmap",
        href: "/docs/roadmap",
      },
      {
        name: "Pricing",
        href: "/pricing",
      },
      {
        name: "Status",
        href: "https://status.librechat.ai/",
      },
      {
        name: "Self-hosting",
        href: "/docs/deployment/self-host",
      },
      {
        name: "Open Source",
        href: "/docs/open-source",
      },
    ],
  },
  {
    heading: "About",
    items: [
      { name: "Blog", 
      href: "/blog" 
      },
      {
        name: "About us",
        href: "/about",
      },
      {
        name: "Demo",
        href: "https://demo.librechat.cfd/",
      },
      { name: "Contact", 
      href: "mailto:contact@librechat.ai" 
      },
    ],
  },

  {
    heading: "Legal",
    items: [
      {
        name: "Terms of services",
        href: "/tos",
      },
      {
        name: "Privacy policy",
        href: "/privacy",
      },
    ],
  },
];

const FooterMenu = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 text-base gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-2 font-mono font-bold text-primary">
              {menu.heading}
            </p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-tight hover:text-primary/80"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div />
      </div>
      <div className="my-8 font-mono text-sm">
        © {new Date().getFullYear()} LibreChat
      </div>
    </div>
  );
};

export default FooterMenu;
