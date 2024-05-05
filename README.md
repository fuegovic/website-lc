# LibreChat Docs

Based on [Nextra](https://nextra.site/)

## Local Development

Pre-requisites: Node.js 18+, pnpm 9+

1. Optional: Create env based on [.env.template](./.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333
4. Run `pnpm build` to build...
5. Run `pnpm start` to start the production server on localhost:3333

⚠️ **Note: try building prod before making a PR**

## Bundle analysis

Run `pnpm run analyze` to analyze the bundle size of the production build using `@next/bundle-analyzer`.

## Notes / TODOs

### Author profiles

- Profiles located in `pages\authors`
  - create a mdx file named with your authorid
  - look at the other profiles for examples
- Authors Profile pics in: `public\images\people`
- Supported socials for authors (react-social-icons):
  ![Socials](https://camo.githubusercontent.com/bb10ce76806a2db855ae9411682342b31f2857ce8ab62b8c0a46d3c3cdb77fdf/68747470733a2f2f7374617469632e72656163742d736f6369616c2d69636f6e732e636f6d2f726561646d652d696d6167652e706e67)

### Changelogs/Blog Headers example

⚠️ Title, Screenshot and author is automatically populated in the changelog/blog

```markdown
---
date: 2024-04-01
title: LibreChat v0.7.0
description: The v0.7.0 release of LibreChat
authorid: danny
ogImage: /images/changelog/2024-04-01-v0.7.0.png
---

import { ChangelogHeader } from "@/components/changelog/ChangelogHeader";

<ChangelogHeader />
```