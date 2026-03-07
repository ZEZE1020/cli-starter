---
layout: page
title: "Lesson 3 — Bootstrap a Project"
nav_order: 4
---

# Lesson 3 — Bootstrap a New Project

> **Time:** ~40 minutes  
> **Goal:** Initialise a Git repository, set up npm, create a solid project structure, and make your first commit — all from the CLI.

---

## Prerequisites

Make sure these are installed before continuing:

| Tool | Check command | Install link |
|------|---------------|--------------|
| **Git** | `git --version` | [git-scm.com/downloads ↗](https://git-scm.com/downloads) · Windows: [gitforwindows.org ↗](https://gitforwindows.org/) |
| **Node.js & npm** | `node -v && npm -v` | [nodejs.org/en/download ↗](https://nodejs.org/en/download/) (choose the **LTS** release) |

```bash
# Verify both are available
git --version
# git version 2.43.0

node -v
# v20.11.0

npm -v
# 10.2.4
```

---

## Part 1 — Configure Git (one-time setup)

The first time you use Git, tell it who you are. This info is attached to every commit.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# Set VS Code as the default editor (optional but recommended)
git config --global core.editor "code --wait"

# Verify your config
git config --list
```

---

## Part 2 — Create a Project Folder

```bash
# Go to where you keep projects
cd ~
mkdir -p projects
cd projects

# Create and enter your new project
mkdir my-awesome-project
cd my-awesome-project
```

---

## Part 3 — Initialise Git

```bash
git init
```

Output:
```
Initialized empty Git repository in /Users/alex/projects/my-awesome-project/.git/
```

This creates a hidden `.git` folder that tracks all changes. Never delete it manually.

```bash
# See the hidden .git folder
ls -la
```

---

## Part 4 — Create a `.gitignore`

Before adding any files, tell Git what to *ignore* (e.g., `node_modules`, OS files, secrets).

```bash
touch .gitignore
```

Open it in a text editor and add:

```
# Dependencies
node_modules/

# Build output
dist/
build/
.cache/

# Environment variables (never commit secrets!)
.env
.env.local
.env.*.local

# OS files
.DS_Store        # Mac
Thumbs.db        # Windows

# Editor
.vscode/settings.json
.idea/
```

Or do it all from the CLI in one shot:

```bash
cat > .gitignore << 'EOF'
node_modules/
dist/
build/
.cache/
.env
.env.local
.DS_Store
Thumbs.db
EOF
```

---

## Part 5 — Initialise npm

```bash
npm init
```

npm will ask you a series of questions. Answer them (or press **Enter** to accept defaults):

```
package name: (my-awesome-project)
version: (1.0.0)
description: My first CLI-bootstrapped project
entry point: (index.js)
test command:
git repository:
keywords:
author: Your Name
license: (ISC) MIT
```

This creates a **`package.json`** file — the heart of every Node.js project.

**Shortcut** — accept all defaults at once:

```bash
npm init -y
```

---

## Part 6 — Install Dependencies

Let's install a couple of common development tools to see how `npm install` works.

```bash
# Install a dev dependency (only needed during development)
npm install --save-dev prettier

# Install a production dependency
npm install chalk
```

Notice that:
- `package.json` now lists the dependencies
- A `node_modules/` folder appeared (it's in `.gitignore` — never commit it!)
- A `package-lock.json` was created (this *should* be committed)

---

## Part 7 — Add npm Scripts

Open `package.json` and update the `"scripts"` section:

```json
{
  "scripts": {
    "start": "node index.js",
    "format": "prettier --write .",
    "test": "echo \"No tests yet\" && exit 0"
  }
}
```

Or do it from the CLI using `node` to update the JSON:

```bash
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = {
  start: 'node index.js',
  format: 'prettier --write .',
  test: 'echo \"No tests yet\" && exit 0'
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"
```

Run a script:

```bash
npm run format
npm test          # shorthand for npm run test
npm start         # shorthand for npm run start
```

---

## Part 8 — Create the Project Structure

```bash
mkdir -p src/css src/js
touch index.html
touch src/css/style.css
touch src/js/app.js
echo "# My Awesome Project" > README.md
```

Create a basic `index.html`:

```bash
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Awesome Project</title>
  <link rel="stylesheet" href="src/css/style.css" />
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Bootstrapped from the CLI 🚀</p>
  <script src="src/js/app.js"></script>
</body>
</html>
EOF
```

---

## Part 9 — Make Your First Commit

```bash
# Check what Git sees
git status
```

You'll see all your new files listed as *untracked*.

```bash
# Stage all files
git add .

# Check again — files are now staged (green)
git status

# Make your first commit
git commit -m "feat: initial project bootstrap"
```

Output:
```
[main (root-commit) a1b2c3d] feat: initial project bootstrap
 6 files changed, 45 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 index.html
 create mode 100644 package.json
 create mode 100644 src/css/style.css
 create mode 100644 src/js/app.js
```

---

## Part 10 — Connect to GitHub

1. Go to [github.com/new](https://github.com/new) and create an **empty** repository (no README, no .gitignore — you already have those)
2. Copy the repository URL shown on the page
3. Run:

```bash
# Add the remote
git remote add origin https://github.com/YOUR_USERNAME/my-awesome-project.git

# Rename local branch to main (GitHub default)
git branch -M main

# Push your code
git push -u origin main
```

After this, every subsequent push is just:

```bash
git push
```

---

## Essential Git Workflow

Here's the daily Git workflow you'll use constantly:

```bash
# 1. Check what changed
git status

# 2. See the actual changes
git diff

# 3. Stage specific files (or . for all)
git add index.html
git add .

# 4. Commit with a message
git commit -m "fix: update heading text"

# 5. Push to GitHub
git push

# 6. Pull latest changes (when collaborating)
git pull
```

### Useful Git Commands

```bash
git log --oneline          # compact commit history
git log --oneline --graph  # visual branch history
git diff HEAD~1            # compare with previous commit
git checkout -- file.txt   # discard changes to a file
git stash                  # temporarily save uncommitted changes
git stash pop              # restore stashed changes
```

---

## ✅ Lesson 3 Checklist

- [ ] Verified Git and Node.js are installed
- [ ] Configured `git config --global` with name and email
- [ ] Ran `git init` to start a new repository
- [ ] Created `.gitignore` with sensible defaults
- [ ] Ran `npm init` and reviewed `package.json`
- [ ] Installed at least one npm package
- [ ] Created a basic project file structure
- [ ] Made your first commit with `git add .` and `git commit`
- [ ] Pushed the project to GitHub

---

[← Lesson 2: Navigation & File Operations](02-navigation-and-files) | [Lesson 4: Create Your Portfolio →](04-create-portfolio)
