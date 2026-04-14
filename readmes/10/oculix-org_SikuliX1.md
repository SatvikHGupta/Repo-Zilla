<div align="center">

<br>

[![SikuliX](https://raw.githubusercontent.com/oculix-org/SikuliX1/master/Support/sikulix-red.png)](https://sikulix.github.io)

<br>

<h3>Visual Automation Framework powered by Computer Vision</h3>

<p>
  <strong>If you can see it, you can automate it.</strong>
</p>

<p>
  <a href="https://github.com/oculix-org/SikuliX1/releases"><img src="https://img.shields.io/badge/version-2.0.5-blue?style=flat-square" alt="Version"></a>
  <a href="https://github.com/oculix-org/SikuliX1/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License"></a>
  <a href="https://github.com/oculix-org/SikuliX1/issues"><img src="https://img.shields.io/github/issues/oculix-org/SikuliX1?style=flat-square&color=orange" alt="Issues"></a>
  <a href="https://github.com/oculix-org/SikuliX1/stargazers"><img src="https://img.shields.io/github/stars/oculix-org/SikuliX1?style=flat-square&color=yellow" alt="Stars"></a>
</p>

<p>
  <code>OpenCV</code> &middot; <code>Image Recognition</code> &middot; <code>GUI Automation</code> &middot; <code>Cross-Platform</code> &middot; <code>Java / Python / Ruby</code>
</p>

</div>

---

<br>

## SikuliX is alive again

SikuliX is now actively maintained under [**oculix-org**](https://github.com/oculix-org), with the full agreement of its original creator [**RaiMan**](https://github.com/RaiMan).

> A huge thank you to RaiMan for building and maintaining SikuliX for years,
> and for laying the foundations of visual automation as we know it today.

The goal is simple: **stabilize, modernize and extend SikuliX** while preserving what made it powerful from the start.

<br>

## What is SikuliX

SikuliX uses **computer vision** (powered by [OpenCV](https://opencv.org/)) to identify and interact with anything visible on your screen — across **Windows**, **macOS** and **Linux**.

It locates GUI elements through **image recognition**, then drives them with simulated mouse and keyboard actions. No access to source code, DOM or internal APIs required.

<br>

<table>
  <tr>
    <td width="50%">
      <h4>When to use SikuliX</h4>
      <ul>
        <li>No access to the application's internals</li>
        <li>The UI is not DOM-based (desktop, legacy, embedded)</li>
        <li>Source code is unavailable or closed</li>
        <li>Visual regression testing is needed</li>
        <li>RPA on any visible interface</li>
      </ul>
    </td>
    <td width="50%">
      <h4>How it works</h4>
      <ol>
        <li><strong>Capture</strong> — screenshot a GUI element</li>
        <li><strong>Find</strong> — OpenCV locates it on screen</li>
        <li><strong>Act</strong> — click, type, drag, wait</li>
        <li><strong>Verify</strong> — assert visual state</li>
      </ol>
    </td>
  </tr>
</table>

<br>

## Project Status

| | Status |
|---|---|
| **Maintenance** | Actively maintained |
| **Issues & PRs** | Reviewed and triaged |
| **CI/CD** | Automated builds for Windows, macOS, Linux |
| **macOS Apple Silicon** | Supported (M1 / M2 / M4) |

<br>

## Current Version

**Latest stable: `2.0.5`**

| Platform | Support |
|---|---|
| Windows (x86_64) | Supported |
| macOS Intel | Supported |
| macOS Apple Silicon (M1+) | Supported |
| Linux (x86_64) | Supported |
| Java | 8+ (17 recommended) |

**Resources:**
- [Changes, issues and enhancements](https://github.com/oculix-org/SikuliX1/wiki/About-actual-release-version)
- [List of fixes](https://github.com/oculix-org/SikuliX1/wiki/ZZZ-Bug-Fixes)
- [Get SikuliX ready to use](https://github.com/oculix-org/SikuliX1/releases)
- [SikuliX Documentation](https://sikulix-2014.readthedocs.io/en/latest/index.html)

<br>

## OculiX 3.0.1 — Development Build

> The next evolution of SikuliX. 511 files changed, 123,728 insertions over SikuliX 2.0.5.

<table>
  <tr>
    <td><strong>Windows</strong></td>
    <td>Available</td>
    <td><a href="https://github.com/julienmerconsulting/Oculix/releases/tag/v3.0.1">Download</a></td>
  </tr>
  <tr>
    <td><strong>Linux</strong></td>
    <td>Available</td>
    <td><a href="https://github.com/julienmerconsulting/Oculix/releases/tag/v3.0.1">Download</a></td>
  </tr>
  <tr>
    <td><strong>macOS</strong></td>
    <td>Validation in progress</td>
    <td><a href="https://github.com/julienmerconsulting/Oculix/releases/tag/v3.0.1">Download (beta)</a></td>
  </tr>
</table>

**What's new in 3.0.1:**

| Category | Details |
|---|---|
| **macOS fix** | Fixed ASM class conflict (cglib/rococoa) that crashed Jython on macOS — the IDE now starts on Apple Silicon (M1/M2/M4) |
| **IDE fix** | `-v` (verbose) flag no longer blocks GUI display |
| **VNC stack** | Full VNC integration — `VNCScreen`, `VNCRobot`, `VNCClient`, `VNCFrameBuffer`, `VNCClipboard`, `XKeySym` (2200+ key mappings) |
| **SSH** | Native SSH tunnels via embedded `jcraft/jsch` — no external tools required |
| **Android ADB** | `ADBClient`, `ADBDevice`, `ADBRobot`, `ADBScreen` — control Android 12+ devices via WiFi or USB, no Appium needed |
| **PaddleOCR** | Neural OCR engine integration — `PaddleOCREngine`, `PaddleOCRClient` — text detection with confidence scoring on any screen |
| **OpenCV** | Upgraded to OpenCV 4.10.0 via [Apertix](https://github.com/julienmerconsulting/Apertix) |
| **Script runners** | Jython, JRuby, PowerShell, AppleScript, Robot Framework |
| **Java** | Java 17 recommended (Java 8+ still supported) |
| **CI/CD** | Automated builds for Windows, macOS, Linux via GitHub Actions |

<br>

## Quick Start

```bash
# Requires Java 8+ (Java 17 recommended)
java -version

# SikuliX 2.0.5 (legacy stable)
java -jar sikulixide.jar

# OculiX 3.0.1 (latest development build)
java -jar oculixide-3.0.1-windows.jar   # Windows
java -jar oculixide-3.0.1-macos.jar     # macOS
java -jar oculixide-3.0.1-linux.jar     # Linux
```

**Maven dependency (SikuliX 2.0.5):**

```xml
<dependency>
  <groupId>com.sikulix</groupId>
  <artifactId>sikulixapi</artifactId>
  <version>2.0.5</version>
</dependency>
```

<br>

## Scripting Languages

SikuliX scripts can be written in:

| Language | Extension | Engine |
|---|---|---|
| **Python** | `.py` | Jython 2.7 |
| **Ruby** | `.rb` | JRuby 9.2 |
| **Java** | `.java` | Native |
| **PowerShell** | `.ps1` | OculiX 3.0.1+ |
| **AppleScript** | `.scpt` | OculiX 3.0.1+ (macOS) |

<br>

## The Vision Pipeline

```
Screen Capture ──► OpenCV Match ──► Region Located ──► Mouse / Keyboard Action
                      │                                        │
                      ▼                                        ▼
               Confidence Score                        Visual Verification
```

SikuliX captures the screen, runs template matching via OpenCV to find target regions, and performs pixel-accurate interactions. The entire pipeline runs locally — no cloud, no external API, no data leaves your machine.

<br>

---

<div align="center">
  <br>
  <p>
    <strong>SikuliX</strong> &mdash; Computer Vision meets Desktop Automation
  </p>
  <p>
    Maintained by <a href="https://github.com/oculix-org">oculix-org</a> &middot;
    Founded by <a href="https://github.com/RaiMan">RaiMan</a> &middot;
    <a href="https://github.com/oculix-org/SikuliX1/blob/master/LICENSE">MIT License</a>
  </p>
  <br>
</div>
