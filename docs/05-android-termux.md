---
layout: page
title: "Android Tablet — Termux & Acode"
nav_order: 6
---

# Using This Course on an Android Tablet

> **Time:** ~30 minutes setup  
> **Goal:** Use your Android tablet as a learning environment using **Termux** (a full Linux terminal) and **Acode** (a touch-friendly code editor).

---

## Why Android?

You do **not** need a Mac or Windows PC to follow this course. A modern Android tablet running **Termux** gives you a real Bash shell with `git`, `node`, `npm`, and every other tool used in Lessons 1–4. The experience is nearly identical to a desktop terminal.

| What you need | Minimum spec |
|---------------|--------------|
| Android tablet or phone | Android 7.0 (Nougat) or newer |
| Storage | ~500 MB free (for Termux + packages) |
| Keyboard | On-screen keyboard works; a Bluetooth keyboard is highly recommended |

---

## How Termux Works

Termux is **not** an emulator — it runs a real Linux environment directly on Android's Linux kernel. Here's a simplified view of the architecture:

```
┌─────────────────────────────────────────────────┐
│                 Android Device                  │
│                                                 │
│  ┌──────────────────────┐  ┌─────────────────┐  │
│  │     Termux App       │  │    Acode App    │  │
│  │                      │  │   (code editor) │  │
│  │  ┌────────────────┐  │  └────────┬────────┘  │
│  │  │  Bash Shell    │  │           │           │
│  │  │  (your prompt) │  │           │           │
│  │  └───────┬────────┘  │           │           │
│  │          │           │           │           │
│  │  ┌───────▼────────┐  │  ┌────────▼────────┐  │
│  │  │ pkg Packages   │  │  │ ~/storage/      │  │
│  │  │ git, node, npm │  │  │ shared/         │  │
│  │  │ nano, python   │  │  │ (shared files)  │  │
│  │  └───────┬────────┘  │  └────────┬────────┘  │
│  │          │           │           │           │
│  │  ┌───────▼───────────┼───────────▼────────┐  │
│  │  │ Termux Home Dir: ~/                    │  │
│  │  │ /data/data/com.termux/files/home       │  │
│  │  └────────────────────────────────────────┘  │
│  └──────────────────────┘                       │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │   Android Linux Kernel                  │    │
│  │   (Termux runs natively — no emulation) │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

**Key points:**

- **Termux** provides a self-contained [Linux](https://en.wikipedia.org/wiki/Linux) file system under `/data/data/com.termux/files/`. Packages installed with `pkg` live here.
- **Acode** is a separate Android app. It accesses your project files through Android's shared storage (accessed as `~/storage/shared/` in Termux, or via the system file picker in Acode), which Termux creates via `termux-setup-storage`.
- Both apps talk to the same underlying Linux kernel — there's no virtual machine or performance penalty.

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

### Understanding `pkg` — Termux's package manager

On a regular Linux desktop you'd use `apt` (Debian/Ubuntu) or `dnf` (Fedora) to install software. Termux ships its own package manager called **`pkg`**.

| Command | What it does |
|---------|-------------|
| `pkg update` | Refreshes the list of available packages from Termux's repositories (like `apt update`) |
| `pkg upgrade` | Upgrades all installed packages to their latest versions (like `apt upgrade`) |
| `pkg install <name>` | Downloads and installs a package (like `apt install <name>`) |
| `pkg search <name>` | Searches for packages by name or keyword |
| `pkg uninstall <name>` | Removes an installed package |

> 💡 **Why `pkg` instead of `apt`?** `pkg` is a thin wrapper around `apt` that automatically runs `apt update` when needed and formats output for the smaller mobile screen. You *can* use `apt` directly, but `pkg` is the recommended way in Termux.

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

# A lightweight text editor (useful for editing files without Acode)
pkg install nano
```

Here's what each tool does:

| Package | Provides | Used in |
|---------|----------|---------|
| `git` | The Git version control system (`git init`, `git commit`, `git push`, etc.) | Lessons 3–4 |
| `nodejs` | Node.js runtime **and** `npm` / `npx` (JavaScript package manager) | Lessons 2–4 |
| `nano` | A simple terminal-based text editor — edit files without leaving Termux | All lessons |

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

This lets you share files between Termux and other Android apps (like Acode).

```bash
termux-setup-storage
```

Tap **Allow** when Android asks for the permission. This creates symlinks inside `~/storage/` that point to Android's shared folders:

```bash
ls ~/storage/
# downloads/  dcim/  music/  pictures/  shared/
```

| Path | Points to |
|------|-----------|
| `~/storage/shared/` | Your tablet's main internal storage (`/storage/emulated/0/`) |
| `~/storage/downloads/` | The Downloads folder |
| `~/storage/dcim/` | Camera photos |

> 💡 **Where to keep your projects:** For this course, create a folder in shared storage so both Termux and Acode can access the same files:
>
> ```bash
> mkdir -p ~/storage/shared/projects
> ln -s ~/storage/shared/projects ~/projects
> cd ~/projects
> ```
>
> The symlink (`ln -s`) lets you type `cd ~/projects` in Termux while the actual files live in shared storage where Acode can see them.

---

## Part 3 — Install Acode

**Acode** is a free, open-source code editor built for Android. It understands many languages (HTML, CSS, JavaScript, Markdown, JSON), has syntax highlighting, and can open files from Termux's shared storage.

### Install from the Play Store or F-Droid

| Source | Link |
|--------|------|
| **Google Play** | Search *Acode* in the Play Store |
| **F-Droid** | Search *Acode* in F-Droid |
| **GitHub Releases** | [github.com/deadlyjack/Acode/releases ↗](https://github.com/deadlyjack/Acode/releases) |

After installing, open Acode — you'll see a code editor similar to VS Code.

### Connect Acode to your Termux project files

Because Android's scoped storage blocks direct access to Termux's internal directory on newer devices, we use the [**shared storage**](https://developer.android.com/training/data-storage/shared) approach set up in Part 2:

1. In Acode, tap the **folder icon** in the sidebar.
2. Tap **Add a storage** → **Select folder**.
3. Navigate to **Internal storage → projects** (the folder you created with `mkdir -p ~/storage/shared/projects`).
4. Tap **Use this folder** → **Allow** to grant Acode access.

Your project files now appear in Acode's file tree. Any edits you make in Acode are immediately visible in Termux (and vice versa) because both apps read/write to the same shared storage location.

> 💡 If you skipped the symlink step in Part 2, go back and run:
> ```bash
> mkdir -p ~/storage/shared/projects
> ln -s ~/storage/shared/projects ~/projects
> ```

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
# Option A — Cache credentials in memory for 4 hours (safer)
git config --global credential.helper 'cache --timeout=14400'

# Option B — Store credentials permanently on disk
git config --global credential.helper store
```

> ⚠️ **Security note:** Option B (`store`) saves your token in **plaintext** in `~/.git-credentials`. This is convenient but means anyone with access to your device can read the token. Option A (`cache`) is safer — it keeps the token only in memory and automatically forgets it after the timeout (4 hours in the example above). For a personal tablet either option is usually fine, but prefer `cache` if you share the device.

---

## Part 5 — Following the Course on Android

All four lessons work on Android with Termux. The table below highlights any small differences.

| Lesson | Works on Android? | Notes |
|--------|:-----------------:|-------|
| [1 — CLI Basics](01-cli-basics) | ✅ | All commands (`pwd`, `whoami`, `echo`, `clear`) work identically in Termux |
| [2 — Navigation & Files](02-navigation-and-files) | ✅ | Use `pkg install nodejs` to get `npx` for the practice-files download |
| [3 — Bootstrap a Project](03-bootstrap-project) | ✅ | `git`, `npm init`, `npm install` all work; use nano or Acode to edit files |
| [4 — Create Your Portfolio](04-create-portfolio) | ✅ | Build the site locally; deploy to GitHub Pages from Termux with `git push` |

### Opening a text editor

Throughout the course you'll need to edit files. On Android you have two good options:

**Option A — nano (inside Termux)**

```bash
nano .gitignore
# Edit, then press Ctrl+X → Y → Enter to save
```

**Option B — Acode (touch-friendly)**

Open the file from the Acode file tree (after connecting it to Termux storage above), edit it, then tap **Save** (`Ctrl+S` or the save icon).

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

A few commands are unique to Termux or behave slightly differently from a desktop Linux:

| Task | Termux command | Description |
|------|---------------|-------------|
| Install a package | `pkg install <name>` | Downloads and installs software. Wrapper around `apt` that auto-updates the package index. |
| Search for a package | `pkg search <name>` | Finds available packages by name or keyword. |
| Update all packages | `pkg update && pkg upgrade` | Refreshes the package list, then upgrades everything to the latest version. Run periodically. |
| Set up shared storage | `termux-setup-storage` | Creates symlinks in `~/storage/` so Termux can read/write Android's shared folders. Run once. |
| Access Android clipboard | `termux-clipboard-get` / `termux-clipboard-set` | Copy/paste between Termux and other apps. Requires `pkg install termux-api`. |
| Open a URL in browser | `termux-open-url <url>` | Opens a link in your default Android browser. Requires `pkg install termux-api`. |
| List running sessions | Swipe right in Termux | Opens the sessions sidebar — like browser tabs for terminals. |

### Common commands compared: Termux vs Desktop Linux

Most CLI commands work identically, but here are the key differences:

| Action | Desktop Linux | Termux | Why different? |
|--------|---------------|--------|----------------|
| Install software | `sudo apt install git` | `pkg install git` | Termux has no `sudo` — you're already the admin of your Termux environment |
| System root | `/` | `/data/data/com.termux/files/` | Termux is sandboxed inside its own app directory |
| Home directory | `/home/username` | `/data/data/com.termux/files/home` | Same idea, just a different path |
| Config files | `~/.bashrc` | `~/.bashrc` | ✅ Identical |
| Run node/git/npm | `node`, `git`, `npm` | `node`, `git`, `npm` | ✅ Identical |

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
- [ ] Installed **Acode** and connected it to the Termux shared projects folder
- [ ] Set up Git global config (`user.name` and `user.email`)
- [ ] Configured the Termux extra-keys bar (or paired a Bluetooth keyboard)

---

[← Home](../index) | [Lesson 1: CLI Basics →](01-cli-basics)
