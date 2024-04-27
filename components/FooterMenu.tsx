import Link from 'next/link'

const menuItems: {
  heading: string
  items: { name: string; href: string }[]
}[] = [
  {
    heading: 'Documentation',
    items: [
      {
        name: 'Get Started',
        href: '/docs',
      },
      {
        name: 'Local Install',
        href: '/docs/local',
      },
      {
        name: 'Remote Install',
        href: '/docs/remote',
      },
    ],
  },
  {
    heading: 'Blog',
    items: [
      { name: 'Blog', href: '/blog' },
      { name: 'Authors', href: '/authors/librechat' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      {
        name: 'Changelog',
        href: '/changelog',
      },
      {
        name: 'Roadmap',
        href: '/docs/roadmap',
      },
      {
        name: 'Demo',
        href: 'https://demo.librechat.cfd/',
      },
      {
        name: 'Status',
        href: 'https://status.librechat.ai/',
      },
    ],
  },
  {
    heading: 'About',
    items: [
      {
        name: 'About',
        href: '/about',
      },
      { name: 'Contact', href: 'mailto:contact@librechat.ai' },
    ],
  },
  {
    heading: 'Newsletter',
    items: [
      {
        name: 'Subscribe',
        href: '/subscribe',
      },
      {
        name: 'Unsubscribe',
        href: '/unsubscribe',
      },
    ],
  },
  {
    heading: 'Legal',
    items: [
      {
        name: 'Terms of services',
        href: '/tos',
      },
      {
        name: 'Privacy policy',
        href: '/privacy',
      },
      {
        name: 'Cookie policy',
        href: '/cookie',
      },
    ],
  },
]

const FooterMenu = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-6 text-base gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-2 font-mono font-bold text-primary">{menu.heading}</p>
            <ul className="flex flex-col gap-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-tight hover:text-primary/80">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div />
      </div>
      <div className="my-8 font-mono text-sm">© {new Date().getFullYear()} LibreChat</div>
    </div>
  )
}

export default FooterMenu
