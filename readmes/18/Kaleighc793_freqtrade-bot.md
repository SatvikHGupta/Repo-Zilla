# freqtrade-bot
Freqtrade — Configuration and management tool for the Freqtrade open-source crypto trading bot with strategy backtesting, live/dry-run modes, 10+ exchange support (Binance, Kraken, OKX), hyperparameter optimization, FreqUI dashboard, and Rich terminal menu interface
<div align="center">

```
________                               __                               __
/        |                             /  |                             /  |
$$$$$$$$/______    ______    ______   _$$ |_     ______   ______    ____$$ |  ______
$$ |__  /      \  /      \  /      \ / $$   |   /      \ /      \  /    $$ | /      \
$$    |/$$$$$$  |/$$$$$$  |/$$$$$$  |$$$$$$/   /$$$$$$  |$$$$$$  |/$$$$$$$ |/$$$$$$  |
$$$$$/ $$ |  $$/ $$    $$ |$$ |  $$ |  $$ | __ $$ |  $$/ /    $$ |$$ |  $$ |$$    $$ |
$$ |   $$ |      $$$$$$$$/ $$ \__$$ |  $$ |/  |$$ |     /$$$$$$$ |$$ \__$$ |$$$$$$$$/
$$ |   $$ |      $$       |$$    $$ |  $$  $$/ $$ |     $$    $$ |$$    $$ |$$       |
$$/    $$/        $$$$$$$/  $$$$$$$ |   $$$$/  $$/       $$$$$$$/  $$$$$$$/  $$$$$$$/
                                 $$ |
                                 $$ |
                                 $$/
```

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Freqtrade](https://img.shields.io/badge/Freqtrade-Trading_Bot-00BFFF?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open_Source-Free-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)
![Exchanges](https://img.shields.io/badge/Exchanges-10+-FF6600?style=for-the-badge)
![License](https://img.shields.io/badge/License-GPL--3.0-blue?style=for-the-badge)

**CLI launcher and management console for the Freqtrade open-source crypto trading bot**

[Features](#-features) · [Getting Started](#-getting-started) · [Configuration](#-configuration) · [Usage](#-usage) · [FAQ](#-faq)

</div>

---

## Registration & Official Links

| # | Resource | Link |
|---|----------|------|
| 1 | Freqtrade Official Docs | [freqtrade.io](https://www.freqtrade.io/) |
| 2 | Freqtrade GitHub | [github.com/freqtrade/freqtrade](https://github.com/freqtrade/freqtrade) |
| 3 | FreqUI Web Interface | [github.com/freqtrade/frequi](https://github.com/freqtrade/frequi) |
| 4 | Freqtrade on PyPI | [pypi.org/project/freqtrade](https://pypi.org/project/freqtrade/) |
| 5 | Freqtrade on Docker Hub | [hub.docker.com/r/freqtradeorg/freqtrade](https://hub.docker.com/r/freqtradeorg/freqtrade) |
| 6 | Freqtrade Discord | [discord.gg/freqtrade](https://discord.gg/p7nuUNVfP7) |

---

## Features

<table>
<tr><td colspan="2"><strong>Trading & Strategy</strong></td></tr>
<tr><td width="50%">

- [x] Live trading (Spot & Futures)
- [x] Dry-run mode (paper trading)
- [x] Strategy backtesting
- [x] Hyperopt strategy optimization

</td><td width="50%">

- [x] FreqAI — machine learning models
- [x] Custom strategy creation
- [x] Download historical data
- [x] Plotting & performance analysis

</td></tr>
<tr><td colspan="2"><strong>Supported Exchanges</strong></td></tr>
<tr><td>

- [x] Binance (Spot + Futures)
- [x] Bybit (Spot + Futures)
- [x] OKX (Spot + Futures)
- [x] Gate.io (Spot + Futures)
- [x] Kraken (Spot)
- [x] KuCoin (Community-tested)

</td><td>

- [x] Bitget (Spot + Futures)
- [x] Bitmart (Spot)
- [x] HTX / Huobi (Spot)
- [x] Hyperliquid DEX (Spot + Futures)
- [x] BingX (Spot)
- [x] Bitvavo (Community-tested)

</td></tr>
<tr><td colspan="2"><strong>Launcher Interface</strong></td></tr>
<tr><td>

- [x] Rich terminal UI with styled panels
- [x] Questionary interactive menus
- [x] ASCII art header with cyan theme

</td><td>

- [x] Windows `run.cmd` with auto-venv
- [x] Telegram & WebUI management
- [x] Cross-platform (Windows / Linux / macOS)

</td></tr>
</table>

---

## Getting Started

### Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Python | 3.11+ | Runtime |
| pip | latest | Package manager |
| Freqtrade | latest | Core trading bot (`pip install freqtrade`) |
| Exchange account | — | API keys for live or dry-run trading |

### Installation

<details>
<summary><strong>Windows (One-Click)</strong></summary>

Double-click `run.cmd` — it creates a virtual environment, installs launcher dependencies, and starts the console:

```cmd
@echo off
chcp 65001 >nul
title Freqtrade Launcher
color 0A
cd /d "%~dp0"
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)
call venv\Scripts\activate.bat
pip install rich questionary --quiet 2>nul
python main.py
pause
```

</details>

<details>
<summary><strong>Manual Setup (All Platforms)</strong></summary>

```bash
git clone <repository-url>
cd freqtrade-launcher
python -m venv venv

# Windows
venv\Scripts\activate

# Linux / macOS
source venv/bin/activate

pip install -r requirements.txt
python main.py
```

</details>

<details>
<summary><strong>Install Freqtrade Itself</strong></summary>

The launcher wraps the Freqtrade CLI. Install the core bot via one of:

```bash
# Option 1: pip (recommended)
pip install freqtrade

# Option 2: Docker
docker pull freqtradeorg/freqtrade

# Option 3: From source
git clone https://github.com/freqtrade/freqtrade.git
cd freqtrade
./setup.sh --install
```

</details>

### Dependency Table

| Package | Version | Purpose |
|---------|---------|---------|
| `rich` | >=13.7.0 | Terminal UI — panels, tables, markdown rendering |
| `questionary` | >=2.0.0 | Interactive arrow-key menu selection |
| `freqtrade` | latest | Core trading bot (installed separately) |

---

## Configuration

### Freqtrade Config (`user_data/config.json`)

The launcher helps create and manage the Freqtrade configuration file:

```json
{
    "trading_mode": "spot",
    "exchange": {
        "name": "binance",
        "key": "your_api_key",
        "secret": "your_api_secret"
    },
    "stake_currency": "USDT",
    "stake_amount": "unlimited",
    "dry_run": true,
    "dry_run_wallet": 1000,
    "telegram": {
        "enabled": true,
        "token": "your_telegram_bot_token",
        "chat_id": "your_chat_id"
    },
    "api_server": {
        "enabled": true,
        "listen_ip_address": "127.0.0.1",
        "listen_port": 8080,
        "username": "freqtrader",
        "password": "SuperSecurePassword"
    }
}
```

| Field | Description |
|-------|-------------|
| `trading_mode` | `spot` or `futures` |
| `exchange.name` | Exchange identifier (binance, bybit, okx, etc.) |
| `exchange.key` / `secret` | Exchange API credentials |
| `stake_currency` | Base currency for trading (USDT, BTC, etc.) |
| `dry_run` | `true` for paper trading, `false` for live |
| `telegram` | Telegram bot for notifications and control |
| `api_server` | FreqUI web interface access |

---

## Usage

Run the launcher:

```bash
python main.py
```

### CLI Menu

```
╔══════════════════════════════════════════╗
║  Freqtrade — Main Menu                  ║
╠══════════════════════════════════════════╣
║  [ 1] Install Dependencies              ║
║  [ 2] Settings                          ║
║  [ 3] About                             ║
║  [ 4] Create User Directory             ║
║  [ 5] New Strategy                      ║
║  [ 6] Download Data                     ║
║  [ 7] Backtesting                       ║
║  [ 8] Trade                             ║
║  [ 9] Webserver (WebUI)                 ║
║  [10] List Strategies                   ║
║  [11] List Exchanges                    ║
║  [12] Exit                              ║
╚══════════════════════════════════════════╝
```

| Option | Freqtrade Command | Description |
|--------|-------------------|-------------|
| `1` | `pip install freqtrade` | Install via pip, Docker, or setup script |
| `2` | `freqtrade new-config` / `show-config` | Create, view, or edit configuration |
| `3` | — | About info, hashtags, supported exchanges |
| `4` | `freqtrade create-userdir` | Initialize `user_data/` directory structure |
| `5` | `freqtrade new-strategy` | Scaffold a new trading strategy file |
| `6` | `freqtrade download-data` | Fetch historical OHLCV data for backtesting |
| `7` | `freqtrade backtesting` | Run strategy backtest against historical data |
| `8` | `freqtrade trade` | Start live or dry-run trading |
| `9` | `freqtrade webserver` | Launch FreqUI web dashboard |
| `10` | `freqtrade list-strategies` | Show available strategies in `user_data/` |
| `11` | `freqtrade list-exchanges` | Show supported exchanges |
| `12` | — | Exit launcher |

### Typical Workflow

```
Install Dependencies → Create User Directory → Settings (new-config)
    → New Strategy → Download Data → Backtesting → Trade
```

---

## Project Structure

```
freqtrade-launcher/
├── main.py              # Entry point — Rich/Questionary CLI, Freqtrade command wrapper
├── run.cmd              # Windows one-click launcher (auto-venv, dependency install)
├── requirements.txt     # Launcher dependencies (rich, questionary)
└── about/
    └── hashtags.txt     # Tag collection for discovery
```

### Freqtrade Directory (created via launcher)

```
user_data/
├── config.json          # Bot configuration (exchange, strategy, telegram)
├── strategies/          # Custom strategy Python files
├── data/                # Downloaded historical OHLCV data
├── backtest_results/    # Backtesting output and reports
├── logs/                # Trading and error logs
└── notebooks/           # Jupyter analysis notebooks
```

---

## FAQ

<details>
<summary><strong>What is Freqtrade?</strong></summary>

Freqtrade is a free, open-source crypto trading bot written in Python with 38.6k+ GitHub stars. It supports backtesting, dry-run paper trading, and live trading across 10+ exchanges. Key features include FreqAI machine learning, Telegram/WebUI control, and hyperparameter optimization. Licensed under GPL-3.0.

</details>

<details>
<summary><strong>Is this the official Freqtrade?</strong></summary>

No. This is a **launcher/management console** that wraps the official Freqtrade CLI commands in an interactive terminal UI. You still need to install Freqtrade itself (`pip install freqtrade`) for the launcher to function fully.

</details>

<details>
<summary><strong>Which exchanges are supported?</strong></summary>

Officially supported for Spot: Binance, BingX, Bitget, Bitmart, Bybit, Gate.io, HTX, Hyperliquid, Kraken, OKX. For Futures: Binance, Bitget, Gate.io, Hyperliquid, OKX, Bybit. Community-tested: KuCoin, Bitvavo, and others via CCXT.

</details>

<details>
<summary><strong>Should I start with dry-run?</strong></summary>

Absolutely. Always start with `"dry_run": true` in your config to test your strategy with paper money before risking real funds. The launcher prompts a confirmation before starting live trading.

</details>

<details>
<summary><strong>How does FreqAI work?</strong></summary>

FreqAI is Freqtrade's machine learning module that trains models on historical data to predict market movements. It supports various ML frameworks and can be combined with traditional technical analysis strategies for hybrid approaches.

</details>

<details>
<summary><strong>Can I use Docker instead of pip?</strong></summary>

Yes. Select "Docker" from the Install Dependencies menu, then run `docker pull freqtradeorg/freqtrade` and `docker run -it freqtradeorg/freqtrade`. Docker images are maintained on Docker Hub with regular updates.

</details>

---

## Disclaimer

> This software is provided for **educational purposes only**. Cryptocurrency trading involves significant risk of financial loss. Past performance in backtesting does not guarantee future results. The developers are not financial advisors and assume no liability for trading losses. Always do your own research and never trade with funds you cannot afford to lose.

---

<div align="center">

**If this tool helped you, consider giving it a** ⭐

Powered by [Freqtrade](https://www.freqtrade.io/) — Free, Open Source Crypto Trading Bot

[Back to Top](#)

</div>
