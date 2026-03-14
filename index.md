---
layout: home
title: CLI Starter Course
nav_order: 1
---

# 🖥️ CLI Starter Course

Welcome! This course will take you from **zero CLI experience** to being comfortable in the terminal — on **Mac** (Terminal / zsh), **Windows** (Git Bash), or an **Android tablet** (Termux).

By the end you will be able to:

- ✅ Navigate your file system entirely from the command line
- ✅ Create, move, copy and delete files and folders without a mouse
- ✅ Bootstrap a brand-new web project with **Git** and **npm**
- ✅ Deploy a personal **portfolio website** to **GitHub Pages**

---

## 📚 Course Lessons

| # | Lesson | What you'll learn |
|---|--------|-------------------|
| 1 | [CLI Basics](docs/01-cli-basics) | Open a terminal, understand the prompt, run your first commands |
| 2 | [Navigation & File Operations](docs/02-navigation-and-files) | `cd`, `ls/dir`, `mkdir`, `touch/echo`, `cp`, `mv`, `rm` |
| 3 | [Bootstrap a Project](docs/03-bootstrap-project) | `git init`, `npm init`, project structure best practices |
| 4 | [Create Your Portfolio](docs/04-create-portfolio) | Build and deploy a personal site with GitHub Pages |
| 📱 | [Android Tablet (Termux & ACodeX)](docs/05-android-termux) | Set up a full CLI environment on Android — no PC required |

---

## ⚡ Quick Reference Card

| Goal | Mac / Git Bash command |
|------|------------------------|
| Print working directory | `pwd` |
| List files | `ls` (`ls -la` for details) |
| Change directory | `cd folder-name` |
| Go up one level | `cd ..` |
| Make a directory | `mkdir my-folder` |
| Create an empty file | `touch file.txt` |
| Remove a file | `rm file.txt` |
| Remove a folder | `rm -rf folder/` |
| Copy a file | `cp src.txt dest.txt` |
| Move / rename | `mv old.txt new.txt` |
| Display file contents | `cat file.txt` |
| Clear the terminal | `clear` |

---

## 🛠️ Prerequisites

Before you start, make sure you have these tools installed:

| Tool | Mac | Windows | Android (Termux) |
|------|-----|---------|------------------|
| **Terminal / Shell** | Built-in — search *Terminal* in Spotlight | Install **Git Bash** via [Git for Windows ↗](https://gitforwindows.org/) | Install **Termux** from [F-Droid ↗](https://f-droid.org/) (not the Play Store) |
| **Git** | Included with Xcode Command Line Tools (`git --version` to prompt install) | Included with [Git for Windows ↗](https://gitforwindows.org/) | `pkg install git` in Termux |
| **Node.js & npm** | [Download LTS from nodejs.org ↗](https://nodejs.org/en/download/) | [Download LTS from nodejs.org ↗](https://nodejs.org/en/download/) | `pkg install nodejs` in Termux |
| **GitHub account** | [Sign up free at github.com ↗](https://github.com/signup) | [Sign up free at github.com ↗](https://github.com/signup) | [Sign up free at github.com ↗](https://github.com/signup) |

> 💡 **Not sure if something is already installed?** Open your terminal and run `git --version`, `node -v`, and `npm -v`. If a version number appears, you're good to go!

> 📱 **On an Android tablet?** See the [Android Tablet (Termux & ACodeX)](docs/05-android-termux) setup guide for step-by-step instructions.

---

## 🗂️ Practice Files

Lesson 2 requires real files to practice commands like `cat`, `grep`, `cp`, `mv`, and `rm`.  
Download **only the exercise files** (no course source code) in one command:

```bash
npx degit ZEZE1020/cli-starter/practice cli-practice
cd cli-practice
```

> 💡 `npx` ships with Node.js. Full instructions and a self-setup alternative are at the top of [Lesson 2](docs/02-navigation-and-files).

---

> 💡 **Tip:** Every lesson includes side-by-side examples for Mac and Windows (Git Bash). The commands are almost identical — differences are clearly called out.

[Start Lesson 1 →](docs/01-cli-basics)
