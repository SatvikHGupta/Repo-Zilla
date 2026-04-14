# VyControl (DEPRECATED)

**⚠️ This project is no longer maintained and has been archived.**

VyControl was a web frontend to manage one or multiple [VyOS](https://www.vyos.io/) servers using the VyOS HTTP API.  
Development has ceased due to major architectural changes in VyOS and its upcoming new API.

---

## Project Status

VyControl is deprecated and not actively developed.  
This repository is now archived and kept online for reference purposes only.  
No issues or pull requests will be reviewed.

---

## About

VyControl was built with Python and Django, offering:

- Web GUI for one or multiple VyOS servers
- Multi-user and multi-tenant access
- Management of interfaces, firewall rules, static routes, and more
- Docker and manual installation support
- Integration with external SMTP for password recovery

---

## Docker (legacy usage)

```bash
docker pull robertoberto/vycontrol
docker run -p 8000:8000 -t robertoberto/vycontrol
