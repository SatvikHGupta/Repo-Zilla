# deeploy

## Modern Deployment. Terminal First. Open Source.

### The self-hosted alternative to Heroku, Vercel, and Netlify.

![deeploy TUI](internal/shared/assets/img/hero.png)

## Quick Start

**Server (VPS)**

```bash
curl -fsSL https://deeploy.sh/server.sh | sudo bash
```

**TUI (your machine)**

```bash
curl -fsSL https://deeploy.sh/tui.sh | bash
```

One TUI can manage multiple VPS servers via profiles. Create or switch profiles in-app.

## Documentation

[deeploy.sh/docs](https://deeploy.sh/docs)

`content/docs` is the source of truth for setup, operations, domains, and pod configuration.

## Development

```bash
task dev:server             # Server
task dev:tui                # TUI client
task dev:docs               # Docs website
```

`docker-compose.override.yml` applies local Traefik dev settings and is auto-loaded by Docker Compose in local runs.

## License

[Apache 2.0](LICENSE)
