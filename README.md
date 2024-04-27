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

## Q&A docs chatbot

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

### Email

- ❌ UI: `pages\api\productUpdateSignup.ts`
- ❌ sends a POST request to `pages\api\productUpdateSignup.ts` with the email and source data, and handles the response accordingly.
  - ❌ emails are sends to: `process.env.SLACK_WEBHOOK_URL`

✅ Replaced with: `utils\dbConnect.js`, `utils\Subscriber.js`, `pages/api/subscribe.js`, - component: `components\NewsletterForm.js`
  - Updated to ts by berry

```js
import NewsletterForm from '@/components/NewsletterForm'
;<NewsletterForm />
```

### Q&A Chatbot

- see: `pages\api\qa-chatbot.ts`

## //TODO:

//TODO:

### global

- ✔️ ~~fix tests 💀~~ (removed broken tests, lol)
- ✔️ ~~Import authors for changelogs~~
- ✔️ ~~clean up `/public`~~
- ✔️ ~~double check mobile view (\*authors)~~
- ✔️ ~~global import useful components~~
- ✔️ ~~tweak 404~~
- ✔️ ~~fix social cards in `about`~~
- ✔️ ~~Import authors for blogs~~
- ✔️ ~~remove .bak files~~
- ✔️ ~~callouts bg in light mode~~
- ✔️ ~~🖼️ add logo.svg + docs-logo.png~~
- ✔️ ~~🧑‍🦯 fix Light Mode (sub/unnsub forms)~~
- ✔️ ~~📱 Double check mobile view~~ (looks fine afaik)

### newsletter

- ✔️ ~~`ProductUpdateSignup` -subscribe to newsletter (unsubscribe)~~
- ✔️ ~~provide unsubscribe mechanism,~~
- ✔️ ~~make it pretty~~
- ✔️ ~~Prevent multiple entries~~

### Pricing template page

- ✔️ ~~template pricing page~~
- ❔add payment support 💰 (Stripe?)
  - ❓ might be best to keep admin+payment on a separate private website

### WIP: // Blog update

- ✔️ ~~fix "blog header" (make it look basically like the changelog header)~~
- ✔️ ~~blog index~~
- ✔️ ~~multiple tag support~~
- ✔️ ~~search by tag / author (menu)~~
- ✔️ ~~round preview corners~~
- ✔️ ~~add author in the blog cards~~
- ✔️ ~~remove subscribe...~~
- ✔️ ~~reverse the chronological order~~ 🙃
- ✔️ ~~💅 make it prettier~~
- ✔️ ~~🧑‍🦯 light mode (as always) 🕶️~~
- ✔️ ~~🥸 anon author profile~~

### Authors

- ✔️ ~~👀 show blog posts by under bio~~
- ❌ ~~🪁 tweak fallback icon for author's socials~~ Can't get any other icons to display properly 🤷‍♂️
- ✔️ ~~☀️ light mode~~
- // 🤷‍♂️ fix profile pic position when no bio

### changelogs

- ✔️ ~~use transform on images instead of whatever is in place, see blogindex for example~~

### random docs //TODO and Notes:

- // Contact Page?
- ✔️ ~~Footer update~~
- ✔️ ~~📝 instruction for blog posts~~ provided in the blog
- ✔️ ~~Hide "Pricing"~~
- ✔️ ~~broken header logo in light mode~~
- ⭕ WIP - add and organize docs
- // Add proper screenshots in `about`
- // update github URLs (when it's ready, before publishing)

- YAML checker
- Cred keys generator
