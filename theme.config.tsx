import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig, ThemeSwitch } from 'nextra-theme-docs'
import Footer from '@components/footer'
import { LogoTitle } from '@components/logoImage'

const config: DocsThemeConfig = {
  logo: () => {
    const { route } = useRouter()
    const locate = route.includes('/en') ? '/en' : 'zh'
    return (
      <a className='_flex _items-center hover:_opacity-75 ltr:_mr-auto rtl:_ml-auto' href={locate}>
        <span className='logo'><LogoTitle /> LibreChat</span>
      </a>
    )
  },
  logoLink: false,
  project: {
    link: 'https://github.com/danny-avila/LibreChat',
  },
  chat: {
    link: 'https:discord.librechat.ai'
  },
  docsRepositoryBase: 'https://github.com/danny-avila/LibreChat/tree/docs',
  head: () => {
    const config = useConfig()
    const { route } = useRouter()

    const description =
      config.frontMatter.description ||
      'LibreChat: Every AI in One Place, Built for Everyone'
    const title = config.title + (route === '/' || route === '/en' || route === '/zh' ? '' : ' - LibreChat docs')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/img/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/img/favicon.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="apple-mobile-web-app-title" content="LibreChat docs" />
      </>
    )
  },
  footer: {
    content: () => {
      const { route } = useRouter()
      const locate = route.includes('/en') ? '/en' : '/zh'
      return (
        <>
          {Footer(locate)}
        </>
      )
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
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
  toc: {
    backToTop: true
  },
  // i18n: [
  //   { locale: 'en', name: 'English' },
  //   { locale: 'zh', name: '简体中文' }
  // ],
  banner: {
    content: (
      <a>
        Welcome to the new LibreChat docs! 👋 
      </a>
    )
  }
}

export default config
