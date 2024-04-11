# LibreChat Docs

Based on [Nextra](https://nextra.site/)

## Local Development

Pre-requisites: Node.js 18+, pnpm

1. Optional: Create env based on [.env.template](./.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333

## Bundle analysis

Run `pnpm run analyze` to analyze the bundle size of the production build using `@next/bundle-analyzer`.

Interested in stack of Q&A docs chatbot? Checkout the [blog post](https://langfuse.com/blog/qa-chatbot-for-langfuse-docs) for implementation details (all open source)

---

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
//TODO: instruction for blog posts, but basically the same as the changelogs

### Email
- ❌ UI: `pages\api\productUpdateSignup.ts`
- ❌ sends a POST request to `pages\api\productUpdateSignup.ts` with the email and source data, and handles the response accordingly.
  - ❌ emails are sends to: `process.env.SLACK_WEBHOOK_URL`

✅ Replaced with: `utils\dbConnect.js`, `utils\Subscriber.js`, `pages/api/subscribe.js`, 
        - component: `components\NewsletterForm.js`
```js
import NewsletterForm from '@/components/NewsletterForm'

<NewsletterForm />
```

//TODO:
- ✔️ `ProductUpdateSignup` -subscribe to newsletter (unsubscribe)  
- ✔️ provide unsubscribe mechanism, 
- ✔️ make it pretty
- ✔️ Prevent multiple entries
- // light mode / move styles to dedicated css

### Q&A Chatbot
- see: `pages\api\qa-chatbot.ts`

### Pricing template page
//TODO: Stripe payment support
- see: `pages\pricing.mdx`
- see also: `pages\pricing.mdx`
    - (AI generated content)

## //TODO:
- // fix tests 💀
- // logo svg + docs logo png
- ✔️ Import authors for changelogs
- ✔️ clean up `/public`
- ✔️ double check mobile view (*authors)
- ✔️ global import useful components
- ✔️ tweak 404
- ✔️ fix social cards in `about`
- // fix Get Started link
- // Footer update
- ✔️ Import authors for blogs
- // tweak fallback icon for author's socials
- // Light Mode
- // update github URLs (before publishing)
- ✔️ remove .bak files
- ✔️ callouts bg in light mode

### WIP: // Blog update
- ✔️ fix "blog header" (make it look basically like the changelog header)
- blog index
- multiple tag support
- search by tag / author (menu)
- round preview corners
- add author in the blog cards
- ✔️ remove subscribe...

### random docs note:
//TODO:
- // Contact Page?
- // add and organize docs (once the base properly is set)
- // Add proper screenshots in `about` 
- // Install -> Self-hosting
