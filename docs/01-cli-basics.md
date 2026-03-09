---
layout: page
title: "Lesson 1 — CLI Basics"
nav_order: 2
---

# Lesson 1 — CLI Basics

> **Time:** ~20 minutes  
> **Goal:** Open your terminal, understand the prompt, and run your first commands.

---

## 🛠️ Before You Begin

Make sure you have the following ready before starting this lesson:

| What you need | Where to get it |
|---------------|-----------------|
| **Terminal** *(Mac)* | Built-in. Press **⌘ Space**, type *Terminal*, press **Return**. |
| **Git Bash** *(Windows)* | Download and install **Git for Windows** from **[gitforwindows.org ↗](https://gitforwindows.org/)**, which bundles Git Bash. |
| **GitHub account** *(for later lessons)* | Create a free account at **[github.com/signup ↗](https://github.com/signup)**. |
| **Node.js & npm** *(for Lesson 3+)* | Download the LTS release from **[nodejs.org/en/download ↗](https://nodejs.org/en/download/)**. |

> 💡 **Windows users:** This course uses **Git Bash**, not Command Prompt (`cmd`) or PowerShell. Make sure Git Bash is installed before continuing.

---

## What is the CLI?

The **Command Line Interface (CLI)** — also called the *terminal*, *shell*, or *command prompt* — lets you control your computer entirely with text commands. Instead of clicking icons you type instructions and the computer responds.

Why bother?

- It's **faster** for many tasks once you're comfortable
- Almost all developer tools (git, npm, node, docker …) live here
- It gives you **full control** that a GUI doesn't always expose
- It works the same way on **every machine** (Mac, Linux, Windows Git Bash)

---

## Opening Your Terminal

### 🍎 Mac — Terminal

1. Press **⌘ Command + Space** to open Spotlight
2. Type `Terminal` and press **Return**
3. A dark (or light) window with a `$` prompt appears — you're in!

*Alternatively:* Applications → Utilities → Terminal

**Recommended upgrade:** Install [iTerm2](https://iterm2.com/) for extra features (tabs, split panes, themes).

---

### 🪟 Windows — Git Bash

1. Install **Git for Windows** from **[gitforwindows.org ↗](https://gitforwindows.org/)** if you haven't already — this installs both Git and Git Bash.
2. Search for **Git Bash** in the Start menu and open it
3. You'll see a window with a `$` prompt — identical to Mac Terminal for most commands!

*Alternatively:* Right-click any folder in Explorer → **Git Bash Here**

> ⚠️ **Windows users:** This course uses **Git Bash**, not Command Prompt (`cmd`) or PowerShell. Git Bash provides the Unix-style commands used throughout the course.

---

## Anatomy of the Prompt

When you open your terminal you'll see something like:

```
username@MacBook-Pro ~ $
```

or in Git Bash on Windows:

```
username@DESKTOP-ABC123 MINGW64 ~ $
```

| Part | Meaning |
|------|---------|
| `username` | Your computer login name |
| `~` | Your current directory (`~` is shorthand for your home folder) |
| `$` | The prompt — where you type commands |

---

## Your First Commands

Type each command below and press **Enter** to run it.

### `pwd` — Print Working Directory

Shows you exactly **where** you are in the file system.

```bash
pwd
```

Example output on Mac:
```
/Users/alex
```

Example output on Windows Git Bash:
```
/c/Users/alex
```

---

### `whoami` — Who Am I?

Prints the name of the currently logged-in user.

```bash
whoami
```

Output:
```
alex
```

---

### `echo` — Print Text

Prints any text to the terminal. Great for testing and simple output.

```bash
echo "Hello, CLI!"
```

Output:
```
Hello, CLI!
```

---

### `date` — Show Date and Time

```bash
date
```

Output (Mac):
```
Sat Mar  7 07:30:00 UTC 2026
```

---

### `clear` — Clear the Screen

When your terminal gets cluttered, clear it:

```bash
clear
```

*Keyboard shortcut:* **Ctrl + L** (works on both Mac and Windows Git Bash)

---

## Getting Help

Every command has built-in documentation.

### `--help` flag

```bash
ls --help
```

### `man` (manual pages) — Mac only

```bash
man ls
```

Press **q** to quit the manual.

> 💡 **Windows Git Bash users:** `man` isn't always available. Use `--help` instead, or search online.

---

## Keyboard Shortcuts You'll Use Every Day

| Shortcut | What it does |
|----------|-------------|
| **↑ / ↓** Arrow keys | Scroll through command history |
| **Tab** | Auto-complete file/folder names |
| **Tab Tab** | Show all possible completions |
| **Ctrl + C** | Cancel a running command |
| **Ctrl + L** | Clear the screen (same as `clear`) |
| **Ctrl + A** | Jump to beginning of line |
| **Ctrl + E** | Jump to end of line |
| **Ctrl + R** | Search command history |

---

## ✅ Lesson 1 Checklist

- [ ] Opened Terminal (Mac) or Git Bash (Windows)
- [ ] Ran `pwd` and saw your home directory path
- [ ] Ran `whoami` and saw your username
- [ ] Used `echo` to print a message
- [ ] Used `clear` or **Ctrl + L** to clear the screen
- [ ] Tried Tab auto-complete

---

[← Home](../index) | [Lesson 2: Navigation & File Operations →](02-navigation-and-files)
