import React from "react";
import {
  DocsThemeConfig,
  useConfig,
  ThemeSwitch,
} from "nextra-theme-docs";
import { 
  Steps,
  Tabs,
  Cards,
  FileTree,
} from 'nextra/components'
import { Logo } from "@/components/logo";
import { useRouter } from "next/router";
import { MainContentWrapper } from "./components/MainContentWrapper";
import { Frame } from "./components/Frame";
import { GithubMenuBadge } from "./components/GitHubBadge";
import { ToAppButton } from "./components/ToAppButton";
import { COOKBOOK_ROUTE_MAPPING } from "./lib/cookbook_route_mapping";
import { GeistSans } from "geist/font/sans";
import IconDiscord from "./components/icons/discord";
import FooterMenu from "./components/FooterMenu";
import Link from "next/link";
import { FileCode, LibraryBig } from "lucide-react";
// import { LogoTitle } from './components/logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  logoLink: false,
  project: {
    link: 'https://github.com/danny-avila/LibreChat',
  },
  chat: {
    link: 'https:discord.librechat.ai'
  },

  main: MainContentWrapper,
  search: {
    placeholder: "Search...",
  },
  navbar: {
    extraContent: () => {
      return (
        <>
          {ThemeSwitch({ lite: true, className: 'button-switch theme-switch' })}
          {/* {LocaleSwitch({ lite: true, className: 'button-switch' })} */}
        </>
      )
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  editLink: {
    content: "Edit this page on GitHub",
  },
  toc: {
    backToTop: true
  },
  docsRepositoryBase: "https://github.com/danny-avila/LibreChat-Docs/tree/main",
  footer: {
    content: <FooterMenu />,
  },

  
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter, title: pageTitle } = useConfig();
    const url =
      "https://librechat.ai" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    const description = frontMatter.description ?? "";

    const title = frontMatter.title ?? pageTitle;

    const section = asPath.startsWith("/docs")
      ? "Docs"
      : asPath.startsWith("/changelog/")
      ? "Changelog"
      : asPath.startsWith("/cookbook/")
      ? "Cookbook"
      : "";

    const image = frontMatter.ogImage
      ? "https://librechat.ai" + frontMatter.ogImage
      : `https://langfuse.com/api/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&section=${encodeURIComponent(section)}`;

    const video = frontMatter.ogVideo
      ? "https://librechat.ai" + frontMatter.ogVideo
      : null;

    return (
      <>
        <meta name="theme-color" content="#000" />
        <meta property="og:url" content={url} />
        <meta httpEquiv="Content-Language" content="en" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        {video && <meta property="og:video" content={video} />}

        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="librechat.ai" />
        <meta name="twitter:url" content="https://librechat.ai" />

        <style
          dangerouslySetInnerHTML={{
            __html: `html { --font-geist-sans: ${GeistSans.style.fontFamily}; }`,
          }}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    );
  },
  components: {
    Frame,
    Tabs,
    Steps,
    Cards,
  },
  banner: {
    key: "new-docs",
    dismissible: true,
    content: (
      <Link href="#">
        {/* mobile */}
        <span className="sm:hidden">Welcome to the new LibreChat docs! 👋</span>
        {/* desktop */}
        <span className="hidden sm:inline">
          Welcome to the new LibreChat docs! 👋
        </span>
      </Link>
    ),
  },
};

export default config;
