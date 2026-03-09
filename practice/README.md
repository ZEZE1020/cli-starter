# CLI Practice Files

This folder contains sample files for practicing the commands taught in
**Lesson 2 — Navigation & File Operations**.

## How to use

Use `npx degit` to download **only these exercise files** into your home directory:

```bash
cd ~
npx degit ZEZE1020/cli-starter/practice cli-practice
cd cli-practice
```

This downloads just the exercise files — no Ruby source code, no course docs, no `.git` history.

## Contents

| File / Folder | Purpose |
|---------------|---------|
| `README.md` | This file — good for `cat`, `head`, `tail`, `less`, `grep` |
| `app.log` | Simulated log file — good for `tail -f`, `grep`, `head` |
| `file.txt` | Plain text file — good for `cat`, `grep`, `cp`, `mv` |
| `notes.txt` | Plain text file — good for `cat`, `grep` |
| `original.txt` | Ready-made file to copy with `cp` |
| `old-name.txt` | Ready-made file to rename with `mv` |
| `src/` | Source folder — good for `find`, `grep -r`, `ls` |
| `src/app.js` | JavaScript file with functions and TODO comments |
| `src/utils.js` | Utility functions — more TODO comments and functions |
| `src/style.css` | CSS file for wildcard and search exercises |

## Tip

After practicing destructive commands (`rm`, `mv`) you can reset the
folder at any time by re-downloading:

```bash
cd ~
rm -rf cli-practice
npx degit ZEZE1020/cli-starter/practice cli-practice
cd cli-practice
```

Happy learning! 🚀
