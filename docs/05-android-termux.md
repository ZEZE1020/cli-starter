---
layout: page
title: "Android Tablet — Termux & ACodeX"
nav_order: 6
---

# Using This Course on an Android Tablet

> **Time:** ~30 minutes setup  
> **Goal:** Turn your Android tablet into a capable CLI learning environment using **Termux** (a full Linux terminal) and **ACodeX** (a touch-friendly code editor).

---

## Why Android?

You do **not** need a Mac or Windows PC to follow this course. A modern Android tablet running **Termux** gives you a real Bash shell with `git`, `node`, `npm`, and every other tool used in Lessons 1–4. The experience is nearly identical to a desktop terminal.

| What you need | Minimum spec |
|---------------|--------------|
| Android tablet or phone | Android 7.0 (Nougat) or newer |
| Storage | ~500 MB free (for Termux + packages) |
| Keyboard | On-screen keyboard works; a Bluetooth keyboard is highly recommended |

---

## Part 1 — Install Termux

> ⚠️ **Do NOT install Termux from the Google Play Store.** The Play Store version is outdated and no longer maintained. Use **F-Droid** instead.

### Step 1 — Install F-Droid

F-Droid is a free, open-source app store that carries the current Termux build.

1. Open your browser and go to **[f-droid.org](https://f-droid.org/)**.
2. Tap **Download F-Droid** to download the `.apk`.
3. When the download finishes, tap the file and follow the prompts to install it.
   - If asked, enable **"Install unknown apps"** for your browser — this is safe for F-Droid.
4. Open F-Droid and let it refresh the repository index (may take a minute).

### Step 2 — Install Termux from F-Droid

1. In F-Droid, tap the search icon and search for **Termux**.
2. Tap the **Termux** result (by Fredrik Fornwall) and tap **Install**.
3. Once installed, open Termux — you'll see a black terminal with a `$` prompt.

```
Welcome to Termux!

Community forum: https://termux.com/community
Gitter chat:     https://gitter.im/termux/termux
IRC channel:     #termux on libera.chat

Working subscriptions can be found at https://termux.com/donate.html

$ _
```

---

## Part 2 — Set Up Termux

Run these commands in Termux to update and install the tools needed for this course.

### Update the package list

```bash
pkg update && pkg upgrade
```

> 💡 Press **Enter** (or type `y`) when prompted to confirm package upgrades.

### Install core tools

```bash
# Git — version control (Lesson 3+)
pkg install git

# Node.js and npm — project tooling (Lesson 3+)
pkg install nodejs

# A lightweight text editor (useful for editing files without ACodeX)
pkg install nano
```

Verify everything installed correctly:

```bash
git --version
# git version 2.x.x

node -v
# v20.x.x

npm -v
# 10.x.x
```

### Grant Termux access to your tablet's storage

This lets you open files from Termux in ACodeX (and vice versa).

```bash
termux-setup-storage
```

Tap **Allow** when Android asks for the permission. After this you can access your tablet's files at:

```bash
ls ~/storage/
# downloads/  dcim/  music/  pictures/  shared/
```

> 💡 Your Termux home folder (`~`) lives at `/data/data/com.termux/files/home` — separate from the main Android storage. For this course, work inside `~` (e.g., `~/projects/`) to avoid permission issues.

---

## Part 3 — Install ACodeX

**ACodeX** is a free, open-source code editor built for Android. It understands many languages (HTML, CSS, JavaScript, Markdown, JSON), has syntax highlighting, and integrates with Termux through a shared terminal session.

### Install from the Play Store or F-Droid

| Source | Link |
|--------|------|
| **Google Play** | Search *ACodeX* in the Play Store |
| **F-Droid** | Search *ACodeX* in F-Droid |
| **GitHub Releases** | [github.com/deadlyjack/Acode/releases ↗](https://github.com/deadlyjack/Acode/releases) |

After installing, open ACodeX — you'll see a code editor similar to VS Code.

### Connect ACodeX to your Termux files

1. In ACodeX, tap the **folder icon** in the sidebar.
2. Tap **Add a storage** → **Local storage**.
3. Navigate to the **Termux home folder**:
   - Path: `Internal storage → Android → data → com.termux → files → home`
   - Or grant ACodeX access via the Android file picker when prompted.
4. Tap **Select** — your Termux home directory now appears in the ACodeX file tree.

> 💡 You can now open any file you create in Termux directly in ACodeX for editing, and save it back with Termux.

---

## Part 4 — Configure Git (one-time)

Before Lesson 3, set your Git identity in Termux:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

For GitHub pushes, create a **Personal Access Token** (PAT) since HTTPS password authentication is no longer supported:

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Generate a token with **repo** scope.
3. When `git push` asks for a password, enter the token instead of your GitHub password.

**Save credentials in Termux** so you don't re-enter the token every push:

```bash
git config --global credential.helper store
```

---

## Part 5 — Following the Course on Android

All four lessons work on Android with Termux. The table below highlights any small differences.

| Lesson | Works on Android? | Notes |
|--------|:-----------------:|-------|
| [1 — CLI Basics](01-cli-basics) | ✅ | All commands (`pwd`, `whoami`, `echo`, `clear`) work identically in Termux |
| [2 — Navigation & Files](02-navigation-and-files) | ✅ | Use `pkg install nodejs` to get `npx` for the practice-files download |
| [3 — Bootstrap a Project](03-bootstrap-project) | ✅ | `git`, `npm init`, `npm install` all work; use nano or ACodeX to edit files |
| [4 — Create Your Portfolio](04-create-portfolio) | ✅ | Build the site locally; deploy to GitHub Pages from Termux with `git push` |

### Opening a text editor

Throughout the course you'll need to edit files. On Android you have two good options:

**Option A — nano (inside Termux)**

```bash
nano .gitignore
# Edit, then press Ctrl+X → Y → Enter to save
```

**Option B — ACodeX (touch-friendly)**

Open the file from the ACodeX file tree (after connecting it to Termux storage above), edit it, then tap **Save** (`Ctrl+S` or the save icon).

---

## Termux Keyboard Tips

Android's on-screen keyboard lacks keys like **Ctrl**, **Tab**, **Esc**, and **Arrow keys** that are essential in a terminal. Here's how to access them.

### Volume-key shortcuts (Termux built-in)

| Key combination | Result |
|-----------------|--------|
| **Volume Down + C** | `Ctrl+C` (cancel a running command) |
| **Volume Down + L** | `Ctrl+L` (clear screen) |
| **Volume Down + T** | `Tab` (auto-complete) |
| **Volume Down + 1** | `F1` |
| **Volume Down + E** | `Escape` |
| **Volume Down + W/A/S/D** | Arrow keys (↑ ↓ ← →) |

### Show Termux's extra-keys row

Termux can show a row of extra keys above the on-screen keyboard (Ctrl, Alt, Tab, arrows, etc.).

1. In Termux, long-press the terminal (or swipe down from the top) to reveal the notification.
2. Tap **Keyboard** in the Termux notification, **or** create the config file:

```bash
mkdir -p ~/.termux
cat > ~/.termux/termux.properties << 'EOF'
extra-keys = [['ESC','/','-','HOME','UP','END','PGUP'],['TAB','CTRL','ALT','LEFT','DOWN','RIGHT','PGDN']]
EOF
```

3. Restart Termux (swipe away and reopen) — the extra-keys bar will appear.

### Use a Bluetooth keyboard

For the best experience, pair any Bluetooth keyboard with your tablet. All desktop shortcuts (`Ctrl+C`, `Tab` completion, arrow keys) work exactly as described throughout the course.

---

## Termux-Specific Commands

A few commands behave slightly differently or are only available in Termux:

| Task | Termux command | Notes |
|------|---------------|-------|
| Install a package | `pkg install <name>` | Wrapper around `apt`; preferred in Termux |
| Search for a package | `pkg search <name>` | |
| Update all packages | `pkg update && pkg upgrade` | Run periodically |
| Access Android clipboard | `termux-clipboard-get` / `termux-clipboard-set` | Needs `pkg install termux-api` |
| Open a URL in Android browser | `termux-open-url <url>` | Needs `pkg install termux-api` |
| List running sessions | Swipe right in Termux | Opens the sessions sidebar |

---

## Practice File Setup on Android

The Lesson 2 practice files work identically on Android:

```bash
# Make sure npx is available (installed with nodejs)
npx --version

# Download the practice files
cd ~
npx degit ZEZE1020/cli-starter/practice cli-practice
cd cli-practice
ls
```

---

## ✅ Android Setup Checklist

- [ ] Installed F-Droid from **f-droid.org** (not the Play Store)
- [ ] Installed **Termux** from F-Droid
- [ ] Ran `pkg update && pkg upgrade`
- [ ] Installed `git`, `nodejs`, and `nano` with `pkg install`
- [ ] Ran `termux-setup-storage` and granted storage permission
- [ ] Verified `git --version`, `node -v`, and `npm -v` all print version numbers
- [ ] Installed **ACodeX** and connected it to the Termux home folder
- [ ] Set up Git global config (`user.name` and `user.email`)
- [ ] Configured the Termux extra-keys bar (or paired a Bluetooth keyboard)

---

[← Home](../index) | [Lesson 1: CLI Basics →](01-cli-basics)
