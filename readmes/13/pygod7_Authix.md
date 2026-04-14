# Authix v3

**Authix v3** by **Rubin B (pygod7)** is a **fast, async Discord bot** built with **FastAPI**, designed for **member backup and restoration using stored tokens (auths)**. This streamlined version focuses on speed and simplicity. Older versions (v1, v2) can be found in my [rubinexe](https://github.com/rubinexe) repository.

---

## Features

* 💾 **Member Backup**: Save Discord members' tokens safely.
* 🔄 **Member Restoration**: Re-add backed-up members to any server.
* ⚡ **Fully Async**: FastAPI-powered for fast operations.
* 🛠 **Lightweight**: Minimal and focused on handling auths.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/pygod139/Authix.git
cd Authix

# Install dependencies
pip install -r requirements.txt
```

---

## Configuration

* Simply fill out `config.json` with your bot details. No additional setup is needed.

---

## Usage

```bash
# Run the bot
python app.py
```

### Bot Commands

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `!help`          | Show help message                |
| `!pull <amount>` | Pull specified number of members |
| `!refresh`       | Refresh tokens                   |
| `!count`         | Show token count                 |

---

## Contributing

1. Fork the repository.
2. Create a branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push branch (`git push origin feature-name`).
5. Open a Pull Request.

---

## Disclaimer

**Authix v3** is intended solely for **controlled member backup and restoration**. Misuse for spamming or unauthorized member adding may violate Discord's Terms of Service.
