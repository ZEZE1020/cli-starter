---
layout: page
title: "Lesson 2 — Navigation & File Operations"
nav_order: 3
---

# Lesson 2 — Navigation & File Operations

> **Time:** ~30 minutes  
> **Goal:** Move confidently around your file system and manage files entirely from the command line.

---

## The File System — A Quick Mental Model

Think of your file system as a **tree of folders**. Every file lives at an *absolute path* starting from the root:

- **Mac / Git Bash:** Root is `/`  
  Example: `/Users/alex/Documents/project/index.html`
- **Windows Git Bash:** Root is `/c/` (or `/d/` for another drive)  
  Example: `/c/Users/alex/Documents/project/index.html`

The **tilde `~`** is a shortcut for your home folder:  
`~/Documents` expands to `/Users/alex/Documents` (Mac) or `/c/Users/alex/Documents` (Windows).

---

## Navigating the File System

### `ls` — List Files

```bash
ls
```

Useful flags:

```bash
ls -l        # long format — shows permissions, size, date
ls -a        # show hidden files (files starting with .)
ls -la       # combine both
ls -lh       # human-readable file sizes (K, M, G)
```

Example output of `ls -la`:
```
drwxr-xr-x  5 alex staff  160 Mar  7 08:00 .
drwxr-xr-x 12 alex staff  384 Mar  7 07:55 ..
-rw-r--r--  1 alex staff  108 Mar  7 08:00 README.md
drwxr-xr-x  3 alex staff   96 Mar  7 08:00 src
```

> 💡 **Windows Git Bash:** `ls` works identically in Git Bash!

---

### `cd` — Change Directory

```bash
cd Documents           # go into Documents folder
cd ..                  # go up one level
cd ../..               # go up two levels
cd ~                   # go to home directory (always works)
cd -                   # go back to previous directory
cd "My Projects"       # use quotes when the name has spaces
```

**Absolute vs relative paths:**

```bash
cd /Users/alex/Documents     # absolute — starts from root
cd Documents/projects        # relative — starts from current location
```

---

### `pwd` — Where Am I?

A quick reminder: use `pwd` any time you want to confirm your location.

```bash
pwd
# /Users/alex/Documents/projects
```

---

## Creating Directories and Files

### `mkdir` — Make Directory

```bash
mkdir my-project             # create a folder
mkdir -p src/css/themes      # create nested folders in one command
```

---

### `touch` — Create an Empty File (Mac / Git Bash)

```bash
touch index.html
touch style.css script.js    # create multiple files at once
```

> 💡 **Windows Git Bash:** `touch` works in Git Bash. In Command Prompt you'd use `echo. > file.txt` but since we're using Git Bash throughout this course, `touch` is fine.

---

### `echo` with Redirection — Create a File with Content

```bash
echo "# My Project" > README.md      # create/overwrite file
echo "More content" >> README.md     # append to existing file
```

---

## Viewing File Contents

### `cat` — Print File Contents

```bash
cat README.md
```

### `less` — Scroll Through Long Files

```bash
less README.md
# Use arrow keys to scroll, q to quit
```

### `head` / `tail` — First or Last Lines

```bash
head -n 10 README.md     # first 10 lines
tail -n 20 app.log       # last 20 lines
tail -f app.log          # follow a file in real-time (Ctrl+C to stop)
```

---

## Copying, Moving and Renaming

### `cp` — Copy

```bash
cp original.txt copy.txt          # copy a file
cp -r src/ backup/                # copy an entire directory (-r = recursive)
cp *.html dist/                   # copy all .html files into dist/
```

### `mv` — Move or Rename

```bash
mv old-name.txt new-name.txt      # rename a file
mv index.html src/                # move a file into a folder
mv src/ app/                      # rename a folder
```

---

## Deleting Files and Folders

### `rm` — Remove

```bash
rm file.txt                  # delete a file
rm -r my-folder/             # delete a folder and everything inside
rm -rf dist/                 # force delete without confirmation prompts
```

> ⚠️ **Warning:** There is **no Recycle Bin** in the terminal. `rm` permanently deletes files. Double-check before running `rm -rf`!

---

## Practical Exercise

Let's put it all together and build a simple project scaffold:

```bash
# 1. Go to a safe working area
cd ~

# 2. Create a projects folder (if it doesn't exist)
mkdir -p projects

# 3. Enter it
cd projects

# 4. Create a new project folder
mkdir my-first-project

# 5. Enter the project
cd my-first-project

# 6. Create a basic file structure
mkdir src
touch index.html
touch src/style.css
touch src/app.js
echo "# My First Project" > README.md

# 7. Verify the structure
ls -la
ls src/

# 8. Read the README
cat README.md
```

You should see:
```
.
..
README.md
index.html
src/
```

---

## Searching and Finding Files

### `find` — Find Files by Name

```bash
find . -name "*.html"          # find all HTML files in current directory
find ~ -name "README.md"       # find README.md files in home directory
find . -type d                 # find all directories
find . -type f -name "*.js"    # find all JS files
```

### `grep` — Search Inside Files

```bash
grep "hello" file.txt                  # search for "hello" in a file
grep -r "TODO" .                       # search recursively in all files
grep -rn "function" src/               # show line numbers too
grep -i "error" app.log                # case-insensitive search
```

---

## Wildcards (Glob Patterns)

| Pattern | Matches |
|---------|---------|
| `*` | Any number of characters |
| `?` | Exactly one character |
| `[abc]` | One character from the set |

```bash
ls *.md              # all markdown files
ls src/*.js          # all JS files in src/
rm -rf dist/**       # everything inside dist/
```

---

## ✅ Lesson 2 Checklist

- [ ] Used `ls -la` to list files with details
- [ ] Navigated with `cd`, `cd ..`, and `cd ~`
- [ ] Created a folder with `mkdir`
- [ ] Created files with `touch` and `echo >`
- [ ] Read a file with `cat`
- [ ] Copied a file with `cp`
- [ ] Renamed a file with `mv`
- [ ] Deleted a file with `rm` (carefully!)
- [ ] Completed the practical exercise — built a project scaffold

---

[← Lesson 1: CLI Basics](01-cli-basics) | [Lesson 3: Bootstrap a Project →](03-bootstrap-project)
