---
layout: page
title: "Lesson 4 — Create Your Portfolio"
nav_order: 5
---

# Lesson 4 — Create Your Portfolio

> **Time:** ~60 minutes  
> **Goal:** Build a personal portfolio website from scratch using the CLI, then deploy it live on **GitHub Pages** — for free.

---

## 🛠️ Prerequisites for This Lesson

You need all of the following before starting:

| Tool | Why | Install / sign-up |
|------|-----|-------------------|
| **Git** | Version control & pushing code | [git-scm.com/downloads ↗](https://git-scm.com/downloads) · Windows: [gitforwindows.org ↗](https://gitforwindows.org/) |
| **Node.js & npm** | Running npm scripts and optional `gh-pages` deployment | [nodejs.org/en/download ↗](https://nodejs.org/en/download/) (LTS) |
| **GitHub account** | Hosting on GitHub Pages | [github.com/signup ↗](https://github.com/signup) |

> 💡 Complete **Lessons 1–3** first — this lesson builds on those skills.

---

## What You'll Build

A clean, professional portfolio that includes:

- Your name and a short bio
- A skills section
- A projects showcase
- Contact links (GitHub, LinkedIn, email)

Deployed live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## Part 1 — Create the Portfolio Repository

### Option A — Username homepage (`YOUR_USERNAME.github.io`)

This deploys to `https://YOUR_USERNAME.github.io` with no path.

```bash
# The repo MUST be named exactly: USERNAME.github.io
cd ~/projects
mkdir YOUR_USERNAME.github.io
cd YOUR_USERNAME.github.io
git init
```

### Option B — Project page (any repo name)

This deploys to `https://YOUR_USERNAME.github.io/portfolio`.

```bash
cd ~/projects
mkdir portfolio
cd portfolio
git init
```

> Throughout this lesson we'll use **Option B** (`portfolio`). Replace paths accordingly if you chose Option A.

---

## Part 2 — Build the Portfolio Site

### 2.1 — Scaffold the file structure

```bash
mkdir -p assets/css assets/js assets/images
touch index.html
touch assets/css/style.css
touch assets/js/main.js
echo "# My Portfolio" > README.md
```

Verify the structure:

```bash
find . -not -path "./.git/*" | sort
```

Expected output:
```
.
./README.md
./assets
./assets/css
./assets/css/style.css
./assets/images
./assets/js
./assets/js/main.js
./index.html
```

---

### 2.2 — Write the HTML

Create the portfolio homepage:

```bash
cat > index.html << 'HTMLEOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Personal portfolio of YOUR NAME" />
  <title>YOUR NAME — Portfolio</title>
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

  <!-- HERO SECTION -->
  <header class="hero">
    <div class="container">
      <h1>Hi, I'm <span class="highlight">Your Name</span> 👋</h1>
      <p class="tagline">Full-Stack Developer · Open Source Enthusiast · CLI Nerd</p>
      <div class="cta-buttons">
        <a href="#projects" class="btn btn-primary">View Projects</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </header>

  <!-- ABOUT SECTION -->
  <section id="about" class="section">
    <div class="container">
      <h2>About Me</h2>
      <p>
        I'm a developer based in <strong>Your City</strong>. I love building things
        for the web, contributing to open source, and teaching others how to code.
        This portfolio was bootstrapped entirely from the <strong>command line</strong>! 🚀
      </p>
    </div>
  </section>

  <!-- SKILLS SECTION -->
  <section id="skills" class="section section-alt">
    <div class="container">
      <h2>Skills</h2>
      <div class="skills-grid">
        <span class="skill-badge">HTML</span>
        <span class="skill-badge">CSS</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">Node.js</span>
        <span class="skill-badge">Git</span>
        <span class="skill-badge">CLI</span>
      </div>
    </div>
  </section>

  <!-- PROJECTS SECTION -->
  <section id="projects" class="section">
    <div class="container">
      <h2>Projects</h2>
      <div class="projects-grid">

        <article class="project-card">
          <h3>CLI Starter Course</h3>
          <p>A beginner-friendly guide to the terminal for Mac and Windows users.</p>
          <div class="project-tags">
            <span>Markdown</span>
            <span>Jekyll</span>
            <span>GitHub Pages</span>
          </div>
          <a href="https://github.com/YOUR_USERNAME/cli-starter" class="project-link" target="_blank" rel="noopener">
            View on GitHub →
          </a>
        </article>

        <article class="project-card">
          <h3>My Awesome Project</h3>
          <p>A project bootstrapped from the command line in Lesson 3.</p>
          <div class="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
          <a href="https://github.com/YOUR_USERNAME/my-awesome-project" class="project-link" target="_blank" rel="noopener">
            View on GitHub →
          </a>
        </article>

      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section id="contact" class="section section-alt">
    <div class="container">
      <h2>Get In Touch</h2>
      <p>I'm always open to new opportunities and collaborations!</p>
      <div class="contact-links">
        <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener">🐙 GitHub</a>
        <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener">💼 LinkedIn</a>
        <a href="mailto:you@example.com">✉️ Email</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>Built from the CLI with ❤️ · <a href="https://github.com/YOUR_USERNAME/portfolio">View Source</a></p>
    </div>
  </footer>

  <script src="assets/js/main.js"></script>
</body>
</html>
HTMLEOF
```

---

### 2.3 — Write the CSS

```bash
cat > assets/css/style.css << 'CSSEOF'
/* ── Reset & Base ───────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --color-bg:        #0d1117;
  --color-surface:   #161b22;
  --color-border:    #30363d;
  --color-text:      #e6edf3;
  --color-muted:     #8b949e;
  --color-accent:    #58a6ff;
  --color-accent-2:  #3fb950;
  --font-sans: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Cascadia Code', monospace;
  --radius: 8px;
  --max-width: 900px;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.7;
}

.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }

/* ── Hero ───────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
  border-bottom: 1px solid var(--color-border);
}

.hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 800; margin-bottom: .75rem; }
.highlight { color: var(--color-accent); }
.tagline { font-size: 1.2rem; color: var(--color-muted); margin-bottom: 2rem; }

.cta-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }

.btn {
  display: inline-block;
  padding: .65rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: opacity .2s;
}
.btn:hover { opacity: .85; }
.btn-primary  { background: var(--color-accent);   color: #0d1117; }
.btn-secondary { border: 2px solid var(--color-accent); color: var(--color-accent); }

/* ── Sections ───────────────────────────── */
.section     { padding: 5rem 0; }
.section-alt { background: var(--color-surface); }
h2 { font-size: 2rem; margin-bottom: 1.5rem; }
h2::after { content: ''; display: block; width: 3rem; height: 3px; background: var(--color-accent); margin-top: .4rem; }

/* ── Skills ─────────────────────────────── */
.skills-grid { display: flex; flex-wrap: wrap; gap: .75rem; }
.skill-badge {
  padding: .35rem .9rem;
  border: 1px solid var(--color-border);
  border-radius: 2rem;
  font-size: .9rem;
  font-family: var(--font-mono);
  color: var(--color-accent);
}

/* ── Projects ───────────────────────────── */
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color .2s, transform .2s;
}
.project-card:hover { border-color: var(--color-accent); transform: translateY(-2px); }
.project-card h3 { margin-bottom: .5rem; }
.project-card p  { color: var(--color-muted); margin-bottom: 1rem; }

.project-tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1rem; }
.project-tags span {
  font-size: .75rem;
  font-family: var(--font-mono);
  padding: .2rem .6rem;
  background: rgba(88,166,255,.1);
  color: var(--color-accent);
  border-radius: 2rem;
}

.project-link { color: var(--color-accent-2); text-decoration: none; font-weight: 600; }
.project-link:hover { text-decoration: underline; }

/* ── Contact ────────────────────────────── */
.contact-links { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1rem; }
.contact-links a { color: var(--color-accent); text-decoration: none; font-size: 1.1rem; }
.contact-links a:hover { text-decoration: underline; }

/* ── Footer ─────────────────────────────── */
footer {
  padding: 2rem 0;
  text-align: center;
  color: var(--color-muted);
  font-size: .9rem;
  border-top: 1px solid var(--color-border);
}
footer a { color: var(--color-muted); }
footer a:hover { color: var(--color-text); }
CSSEOF
```

---

### 2.4 — Write the JavaScript

```bash
cat > assets/js/main.js << 'JSEOF'
// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple scroll-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-badge').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
JSEOF
```

---

## Part 3 — Customise Your Portfolio

Open each file and replace the placeholder text:

```bash
# Find all placeholder text (works on Mac and Git Bash)
grep -rn "YOUR" .
```

Things to update in `index.html`:
- `YOUR NAME` → your real name
- `Your City` → your location
- `YOUR_USERNAME` → your GitHub username
- Project names, descriptions and links → your actual projects

---

## Part 4 — Commit and Push

```bash
# Stage everything
git add .

# Initial commit
git commit -m "feat: initial portfolio site"

# Create the repo on GitHub (via the web UI at github.com/new)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## Part 5 — Deploy to GitHub Pages

There are two ways to enable GitHub Pages. We'll use both CLI steps and the web UI.

### Method 1 — Deploy from the `main` branch (simplest)

1. Go to `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

After about 60 seconds, your site is live at:  
`https://YOUR_USERNAME.github.io/portfolio` 🎉

### Method 2 — Deploy via a `gh-pages` branch (CLI)

```bash
# Install the gh-pages npm package
npm install --save-dev gh-pages

# Add a deploy script to package.json
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts = {
  ...pkg.scripts,
  deploy: 'gh-pages -d .'
};
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
"

# Deploy!
npm run deploy
```

This pushes your files to a `gh-pages` branch and GitHub Pages serves from there.

---

## Part 6 — Update Your Portfolio

Every time you make changes:

```bash
# 1. Make your edits (in index.html, style.css, etc.)

# 2. Check what changed
git diff

# 3. Stage and commit
git add .
git commit -m "feat: add new project card"

# 4. Push
git push
```

GitHub Pages auto-rebuilds — changes appear within ~30 seconds.

---

## Part 7 — Add a Custom Domain (Optional)

```bash
# Create a CNAME file pointing to your domain
echo "www.yourdomain.com" > CNAME

git add CNAME
git commit -m "feat: add custom domain"
git push
```

Then configure your domain registrar's DNS to point to GitHub Pages (see [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

## ✅ Lesson 4 Checklist

- [ ] Created the portfolio directory and initialised Git
- [ ] Built `index.html` with hero, about, skills, projects and contact sections
- [ ] Styled the portfolio with `assets/css/style.css`
- [ ] Added scroll animations in `assets/js/main.js`
- [ ] Replaced all `YOUR_NAME` / `YOUR_USERNAME` placeholders
- [ ] Committed all files and pushed to GitHub
- [ ] Enabled GitHub Pages in the repository settings
- [ ] Visited the live URL and confirmed the site works

---

## 🎓 Congratulations!

You've completed the CLI Starter Course! Here's what you've learned:

| Lesson | Skills Gained |
|--------|---------------|
| 1 — CLI Basics | Opening a terminal, understanding the prompt, first commands |
| 2 — Navigation & Files | `ls`, `cd`, `mkdir`, `touch`, `cp`, `mv`, `rm`, `grep` |
| 3 — Bootstrap a Project | `git init`, `npm init`, `.gitignore`, first commit |
| 4 — Portfolio | Full project build + GitHub Pages deployment |

### What's Next?

- Explore **branching** and **pull requests** with `git checkout -b feature/...`
- Learn a JavaScript framework (React, Vue, Svelte) to level-up your portfolio
- Try **GitHub Actions** to automate your deployments
- Contribute to an open-source project — you have all the CLI skills you need!

---

[← Lesson 3: Bootstrap a Project](03-bootstrap-project) | [← Back to Home](../index) | [📱 Android Tablet Setup →](05-android-termux)
