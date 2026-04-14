![kun-galgame-nuxt4](https://kungal.com/kungalgame.webp)

### **[English](/README.md)** | **[日本語](/docs/readme/jp.md)** | **[简体中文](/docs/readme/chs.md)** | **[繁體中文](/docs/readme/cht.md)**

**Contact us：[Telegram](https://t.me/kungalgame) | [Discord](https://discord.com/invite/5F4FS2cXhX)**

The image is sourced from the game [Ark Order](https://apps.qoo-app.com/en/app/9593), featuring the character 'KUN' (鲲).

> **Note on AI-assisted development:** Starting from version **5.1.0**, this project uses LLM-assisted tools including but not limited to Claude Code for Vibe Coding. All code up to and including version **5.0.70** was written entirely by hand. The last purely hand-written codebase can be found at: [v5.0.70 (commit b4ad59e)](https://github.com/KUN1007/kun-galgame-nuxt4/tree/b4ad59eb77d3eaf36d082aa528651039816e1dfa)

# KUN Visual Novel Forum

## Website Introduction

KUN Visual Novel is a collective of individuals passionate about the Galgame genre. It currently consists of the following sub-websites:

- [KUN Visual Novel Forum](https://kungal.com) (this project)
- [KUN Visual Novel Sticker Pack](https://sticker.kungal.com) (a website dedicated to collecting and creating Galgame sticker packs)
- [KUN Visual Novel Development Documentation](https://soft.moe/kun-visualnovel-docs/kun-forum.html) (this forum is entirely open source, and the development documentation will be publicly available here)
- [Kun Visual Novel Navigation Page](https://nav.kungal.org/) （A completely open-source navigation site! You can visit all Kun Visual Novel subsites!）
- [Kun Visual Novel Patch](https://www.moyu.moe) (The most advanced visual novel patch resource website in the world at the moment! Free forever!)
- [Kun Visual Novel Forum Downtime Page](https://down.kungal.com/) （In the event of unavoidable downtime, we will forcibly redirect the forum to this page.）

For more information, please visit the website's About Us page directly

https://www.kungal.com/kungalgame

## Features

- **Galgame Database** — Community-driven Galgame catalog with VNDB integration, multi-language metadata (EN / JA / ZH-CN / ZH-TW), ratings, tags, engine info, and developer profiles
- **Resource Sharing** — Upload and share game patches, translations, voice packs, and other resources with provider tracking and platform/language filters
- **Discussion Forum** — Full-featured topic system with rich Markdown editing (Milkdown + CodeMirror), replies, nested comments, polls, upvotes, and favorites
- **Collaborative Editing** — Git-style PR (Pull Request) workflow for Galgame information edits, with edit history tracking and contributor credits
- **Real-time Messaging** — Socket.IO powered chat system with private messaging and chat rooms
- **Moemoepoint System** — Community reputation points earned through contributions (posting, sharing resources, editing Galgame info)
- **Rich Content Editing** — Milkdown Markdown editor with KaTeX math formulas, code highlighting, and image upload via drag & drop
- **Dark / Light Theme** — System-aware color mode with customizable page transparency, fonts, and background images
- **SEO Optimized** — Server-side rendering, structured data (Schema.org), sitemap generation, and RSS feeds for Galgames and topics

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Nuxt 4](https://nuxt.com/) (Vue 3 Composition API + Nitro Server) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| State Management | [Pinia](https://pinia.vuejs.org/) with persisted state |
| Database | PostgreSQL + [Prisma 7](https://www.prisma.io/) ORM |
| Cache | Redis |
| Authentication | JWT (dual token — access + refresh) |
| Real-time | [Socket.IO](https://socket.io/) |
| File Storage | S3-compatible object storage (images + resources) |
| Validation | [Zod](https://zod.dev/) |
| Editor | [Milkdown](https://milkdown.dev/) + [CodeMirror](https://codemirror.net/) |
| Deployment | PM2 |
| Analytics | [Umami](https://umami.is/) |

## Project Structure

```
├── app/                 # Frontend (pages, components, composables, stores, validations)
├── server/              # Backend (API endpoints, plugins, WebSocket, scheduled tasks)
├── shared/              # Shared code (TypeScript types, utility functions)
├── prisma/schema/       # Database models (modular .prisma files)
├── lib/                 # Libraries (S3 client, icon config)
├── scripts/             # Build & migration scripts
├── public/              # Static assets
└── docs/                # Documentation
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy and configure environment variables
cp .env.example .env

# Generate Prisma Client
pnpm prisma:generate

# Push schema to database
pnpm prisma:push

# Start dev server (http://127.0.0.1:1007)
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Run Prettier |
| `pnpm typecheck` | TypeScript type checking |
| `pnpm prisma:generate` | Generate Prisma Client |
| `pnpm prisma:push` | Push schema changes to database |
| `pnpm prisma:studio` | Open Prisma Studio GUI |
| `pnpm start` / `pnpm stop` | PM2 production start / stop |

## Join / Contact Us

- [Telegram Group](https://t.me/kungalgame)
- [Twitter / X](https://twitter.com/kungalgame)
- [GitHub Repository](https://github.com/KUN1007/kun-galgame-nuxt4)
- [Discord Group](https://discord.com/invite/5F4FS2cXhX)
- [YouTube Channel](https://youtube.com/@kungalgame)
- [Bilibili](https://space.bilibili.com/1748455574)

## License

This project follows the `AGPL-3.0` open-source license.
