# Gohil Parth Arvindbhai - Personal Developer Portfolio

> **"Learning Today, Building Tomorrow."**

A modern, high-performance, dark-themed personal portfolio website built with semantic **HTML5**, **CSS3**, and modern **JavaScript (ES6)**. Designed specifically for GitHub Pages deployment.

---

## 🌟 Highlights & Features

- **Dark Modern Aesthetic**: Deep navy and black backgrounds with electric blue and cyan accent glows.
- **Dynamic Typing Animation**: Smooth cycle through roles (*IT Engineering Student*, *Aspiring AI/ML Engineer*, *Future Software Developer*).
- **Interactive Code Terminal**: Highlights Parth's developer profile and ambition.
- **Skill Matrix**: Clearly categorized foundational skills in C, C++, and developer tools (VS Code, GitHub, Google Antigravity, Firebase, Gemini) without inflated percentages.
- **Production Projects**:
  - **AKSHAR ARI WORK – Bill Generator**: Live business billing app integrated with Firebase cloud database.
  - **QuickLearn AI**: AI-powered study and learning web app.
- **Academic & Certifications**: B.E. IT at SSASIT (GTU), Surat, and C Programming certification showcase.
- **Client-Side Contact Form**: Seamless direct email composer using `mailto:` without third-party dependencies or paid services. Plus 1-click clipboard email copy.
- **Fully Responsive**: Optimized for smartphones (Android & iOS), tablets, laptops, and ultra-wide desktops.
- **Performance & SEO**: Semantic tags, OpenGraph metadata, Google Fonts preconnect, and lightweight pure CSS/JS animations.

---

## 📂 Project Structure

```text
portfolio/
├── index.html                  # Main portfolio website
├── style.css                   # Responsive styles, dark theme & animations
├── script.js                   # Interactive logic, typing effect, scroll listeners
├── 404.html                    # Custom 404 error page for GitHub Pages
├── README.md                   # Documentation and deployment guide
└── assets/
    └── images/
        ├── favicon.svg         # Glowing "PG" vector favicon
        ├── akshar-preview.svg  # Preview graphic for Akshar Ari Work app
        └── quicklearn-preview.svg # Preview graphic for QuickLearn AI app
```

---

## 💻 How to Run Locally

You don't need any complex frameworks or Node.js to run this website.

### Option 1: Direct Browser Open (Simplest)
1. Navigate to the `portfolio/` folder on your computer.
2. Double-click `index.html` (or right-click -> **Open with** -> Google Chrome, Brave, Edge, etc.).

### Option 2: VS Code Live Server (Recommended for Development)
1. Open the `portfolio/` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` with instant live-reloading.

### Option 3: Python Local Server
Open PowerShell or Terminal in the `portfolio` folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🚀 How to Deploy to GitHub Pages

Follow these step-by-step instructions to publish your website live on GitHub Pages:

### Step 1: Create a GitHub Repository
1. Log into your GitHub account: [github.com](https://github.com/)
2. Click the **"+"** icon in the top-right corner and select **New repository**.
3. Repository name:
   - To host as your user site (e.g. `https://gohilparth439.github.io/`), name the repository:
     `gohilparth439.github.io`
   - Or to host as a project (e.g. `https://gohilparth439.github.io/portfolio/`), name it:
     `portfolio`
4. Set visibility to **Public**.
5. Do **not** check "Add a README file" (we already have our own files ready).
6. Click **Create repository**.

### Step 2: Push Your Code Using Git
Open your terminal (PowerShell or Git Bash) inside the `portfolio` directory and run:

```bash
# 1. Initialize Git in the portfolio folder
git init

# 2. Add all files to staging
git add .

# 3. Create your first commit
git commit -m "Initial commit: Professional portfolio website"

# 4. Set default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/gohilparth439/portfolio.git
# (Or: https://github.com/gohilparth439/gohilparth439.github.io.git)

# 6. Push files to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
*(Note: If you named your repository `gohilparth439.github.io`, GitHub Pages is enabled automatically on push!)*

If you named the repository `portfolio`:
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and the `/ (root)` folder.
6. Click **Save**.
7. Wait 1-2 minutes. Refresh the page to see your live URL:
   `https://gohilparth439.github.io/portfolio/`

---

## 👤 Personal Information

- **Name:** Gohil Parth Arvindbhai
- **Title:** IT Engineering Student | Aspiring AI/ML Engineer
- **Institution:** Shree Swami Atmanand Saraswati Institute of Technology (SSASIT)
- **University:** Gujarat Technological University (GTU)
- **Location:** Surat, Gujarat, India
- **Email:** parthgohil3191@gmail.com
- **GitHub:** [github.com/gohilparth439](https://github.com/gohilparth439)
