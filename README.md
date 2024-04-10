# Langfuse Docs

Repo for [langfuse.com](https://langfuse.com), based on [Nextra](https://nextra.site/)

## Local Development

Pre-requisites: Node.js 18+, pnpm

1. Optional: Create env based on [.env.template](./.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333

## Python cookbooks

All Jupyter notebooks are in the `cookbook/` directory.

To render them within the documentation site, we convert them to markdown using `jupyter nbconvert`, move them to right path in the pages/ directory where they are rendered by Nextra (remark).

Steps after updating notebooks:

1. Load python shell/env which has jupyter installed, e.g. `poetry install && poetry shell`
2. Run `bash scripts/update_cookbook_docs.sh`
3. Commit the changed markdown files

## API Reference (Swagger)

API reference is automatically generated based on the OpenAPI spec of the current production deployment of Langfuse Cloud.

## Stack

- [Nextra](https://nextra.site/)
- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/)

Interested in stack of Q&A docs chatbot? Checkout the [blog post](https://langfuse.com/blog/qa-chatbot-for-langfuse-docs) for implementation details (all open source)

## Bundle analysis

Run `pnpm run analyze` to analyze the bundle size of the production build using `@next/bundle-analyzer`.

## Notes

Signup -> `components\productUpdateSignup.tsx`


Authors Info in : `components\Authors.tsx`


### Author profiles ✔️ 
Authors Profile pics in: `public\images\people`
supported socials for authors (react-social-icons):
![Socials](https://camo.githubusercontent.com/bb10ce76806a2db855ae9411682342b31f2857ce8ab62b8c0a46d3c3cdb77fdf/68747470733a2f2f7374617469632e72656163742d736f6369616c2d69636f6e732e636f6d2f726561646d652d696d6167652e706e67)



### Changelogs/Blog Headers example

⚠️ Title, Screenshot and authot is automatically populated in the doc

```markdown
---
date: 2024-04-01
title: LibreChat v0.7.0
description: The v0.7.0 release of LibreChat
author: Danny
ogImage: /images/changelog/2024-04-01-v0.7.0.png
---

import { ChangelogHeader } from "@/components/changelog/ChangelogHeader";

<ChangelogHeader />
```


Test Authors Profile pages:
- pages/authors/name.mdx

make sure you can build locally without error before submiting

### Main Content wrapper

`components\MainContentWrapper.tsx`

disabled in `theme.config.tsx`, could be useful but pretty intrusive as-is

### Email
- UI: `pages\api\productUpdateSignup.ts`
- sends a POST request to `pages\api\productUpdateSignup.ts` with the email and source data, and handles the response accordingly.
    - emails are sends to: `process.env.SLACK_WEBHOOK_URL`

### Feedbacks
- see: `pages\api\feedback.ts` 
    - sends to: `process.env.SLACK_WEBHOOK_URL`

### Q&A Chatbot
- see: `pages\api\qa-chatbot.ts`

### Pricing template page
- see: `pages\pricing.mdx`
- see also: `pages\pricing.mdx`
    - (AI generated content)


## //TODO: 
// logo svg + docs logo png
✔️ Import authors for changelogs
✔️ clean up `/public`
✔️ double check mobile view (*authors)
✔️ global import useful components
✔️ tweak 404
✔️ fix social cards in `about`
// Get Started link
// Footer update
// Import authors for blogs
// tweak fallback icon for author's socials
// Light Mode
// subscribe to newsletter (unsubscribe)
// update github URLs
// remove .bak files
// Self-hosting
// `ProductUpdateSignup`
WIP: // Blog update
✔️ fix "blog header" (make it look basically like the changelog header)
- blog index
- multiple tag support
- search by tag / author
- round preview corned
- add author
- remove subscribe...