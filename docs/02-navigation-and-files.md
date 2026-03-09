---
layout: page
title: "Lesson 2 — Navigation & File Operations"
nav_order: 3
---

# Lesson 2 — Navigation & File Operations

> **Time:** ~30 minutes  
> **Goal:** Move confidently around your file system and manage files entirely from the command line.

---

## 📂 Get the Practice Files

Several commands in this lesson (`cat`, `head`, `tail`, `grep`, `cp`, `mv`, `rm`) need real files to work on. Set up a practice folder **before** you start — choose whichever option suits you.

### Option A — Download only the practice files (recommended)

Use `npx degit` to download **just the exercise files** from the course repository — no course source code, no Ruby files, no `.git` history.

> 💡 `npx` ships with Node.js (a prerequisite for Lesson 3+). If you haven't installed it yet, see the [Prerequisites](../index#prerequisites) on the home page.

```bash
# Go to a safe working area
cd ~

# Download only the practice files into a new folder called cli-practice
npx degit ZEZE1020/cli-starter/practice cli-practice

# Enter the folder
cd cli-practice
```

You now have a clean folder containing only the exercise files:
```
cli-practice/
├── README.md        ← multi-line text — great for cat, head, tail, grep
├── app.log          ← simulated log file — great for tail, grep -i
├── file.txt         ← plain text — great for grep, cp, mv
├── notes.txt        ← course notes — great for grep -n, grep -r
├── original.txt     ← ready to copy with cp
├── old-name.txt     ← ready to rename with mv
└── src/
    ├── app.js       ← JavaScript with functions and TODOs
    ├── utils.js     ← more JS functions and TODOs
    └── style.css    ← CSS file for wildcard exercises
```

> 💡 **Messed up a file?** Delete the folder and re-download in seconds:
> ```bash
> cd ~
> rm -rf cli-practice
> npx degit ZEZE1020/cli-starter/practice cli-practice
> cd cli-practice
> ```

---

### Option B — Create the practice files yourself

Prefer to build from scratch? This is great extra practice with the commands you're about to learn. Run the commands below:

```bash
# Create and enter a practice folder
cd ~
mkdir -p cli-practice/src
cd cli-practice

# A multi-line README (good for head / tail / cat)
cat > README.md << 'EOF'
# Practice Project

This file is here so you can try out cat, head, tail, less and grep.

Line 1: The quick brown fox jumps over the lazy dog.
Line 2: Hello, CLI learner!
Line 3: Learning the terminal is a superpower.
Line 4: TODO: practice grep on this file.
Line 5: Every expert was once a beginner.
Line 6: Ctrl+C cancels a running command.
Line 7: Tab auto-completes file names.
Line 8: Use cd .. to go up one directory.
Line 9: pwd shows where you are right now.
Line 10: git init starts a new repository.
EOF

# A log file (good for tail -f, grep -i "error")
cat > app.log << 'EOF'
2026-03-01 08:00:12 INFO  Server started on port 3000
2026-03-01 08:01:10 WARN  Slow query detected
2026-03-01 08:01:20 ERROR Failed to send email: SMTP refused
2026-03-01 08:02:00 INFO  GET /api/orders 200 OK
2026-03-01 08:03:30 ERROR Database connection lost
2026-03-01 08:03:37 INFO  Database reconnected successfully
2026-03-01 08:05:05 INFO  POST /api/login 200 OK
EOF

# Plain text files for cp / mv / grep
echo "Hello, CLI learner! This file is great for grep and cp." > file.txt
echo "TODO: rename this file using mv." > old-name.txt
echo "Copy me with: cp original.txt copy.txt" > original.txt

# Notes file with TODOs (for cat and grep -n "TODO")
cat > notes.txt << 'EOF'
These are your course notes.

TODO: review navigation commands (cd, ls, pwd).
TODO: practice grep -n "TODO" notes.txt.
TODO: add your own notes as you learn.
EOF

# Source files with functions and TODOs (for grep -r and find)
cat > src/app.js << 'EOF'
function greet(name) {
  return "Hello, " + name + "!";
}
// TODO: add more functions here
function add(a, b) { return a + b; }
EOF

cat > src/utils.js << 'EOF'
function formatDate(date) { return new Date(date).toISOString().slice(0,10); }
// TODO: add unit tests
function isEmpty(v) { return v === null || v === undefined || v === ''; }
EOF

echo "/* TODO: add responsive styles */" > src/style.css

# Verify what you created
find . | sort
```

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

> 💡 **Using practice files?** Make sure you're inside the practice folder (`cd ~/cli-practice`) before running the examples below.

### `cat` — Print File Contents

```bash
cat README.md
cat file.txt
cat notes.txt
```

### `less` — Scroll Through Long Files

```bash
less README.md
# Use arrow keys to scroll, q to quit
less app.log
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
cp original.txt copy.txt          # copy a file (original.txt is in the practice folder)
cp -r src/ backup/                # copy an entire directory (-r = recursive)
cp *.html dist/                   # copy all .html files into dist/
```

### `mv` — Move or Rename

```bash
mv old-name.txt new-name.txt      # rename a file (old-name.txt is in the practice folder)
mv file.txt src/                  # move a file into a folder
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

> 💡 **Using the practice folder?** If you delete a practice file by accident, reset with:
> ```bash
> cd ~
> rm -rf cli-practice
> npx degit ZEZE1020/cli-starter/practice cli-practice
> cd cli-practice
> ```

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
find . -name "*.js"            # find all JS files in current directory (try in practice/)
find . -name "*.md"            # find all Markdown files
find ~ -name "README.md"       # find README.md files in home directory
find . -type d                 # find all directories
find . -type f -name "*.js"    # find all JS files (practice/src has two)
```

### `grep` — Search Inside Files

```bash
grep "hello" file.txt                  # search for "hello" in file.txt
grep -r "TODO" .                       # search recursively in all files
grep -rn "function" src/               # show line numbers too (src/ has JS files)
grep -i "error" app.log                # case-insensitive search in the log file
grep -n "TODO" notes.txt               # show which lines have TODOs
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

- [ ] Set up practice files (cloned the repo or ran the self-setup script)
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
