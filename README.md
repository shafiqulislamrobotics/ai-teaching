# Advanced AI Teaching Institute

**Live Website:** [https://shafiqulislamrobotics.github.io/ai-teaching/](https://shafiqulislamrobotics.github.io/ai-teaching/)

A multi-page academic website for the Advanced AI Teaching Institute, featuring Dr. Shafiqul Islam's seven specialized AI and robotics courses at Xavier University of Louisiana.

---

## 📁 Repository Structure

```
ai-teaching/
├── index.html                  # Home page
├── about/
│   └── index.html              # About page
├── research/
│   └── index.html              # Research Projects page
├── courses/
│   └── index.html              # Courses Offering page
├── instructor/
│   └── index.html              # Instructor page
├── enroll/
│   └── index.html              # Enroll Now page
├── assets/
│   ├── css/
│   │   └── style.css           # Shared stylesheet (Bookman Old Style font)
│   ├── js/
│   │   └── main.js             # Scroll reveal, counter animations, nav
│   └── images/
│       └── image_instructor.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
└── README.md
```

---

## 🚀 Deployment — GitHub Pages

### Option A: Automatic (GitHub Actions — Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that auto-deploys on every push to `main`.

**Steps:**
1. Push this repository to `https://github.com/shafiqulislamrobotics/ai-teaching`
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will be live at `https://shafiqulislamrobotics.github.io/ai-teaching/`

### Option B: Manual (Branch-based)

1. Push all files to the `main` branch of `https://github.com/shafiqulislamrobotics/ai-teaching`
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose branch: `main`, folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes; the site will be live at `https://shafiqulislamrobotics.github.io/ai-teaching/`

---

## 🌐 Pages

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about/` |
| Research Projects | `/research/` |
| Courses | `/courses/` |
| Instructor | `/instructor/` |
| Enroll Now | `/enroll/` |

---

## ✨ Features

- **Font:** Bookman Old Style (with Georgia/serif fallbacks)
- **Responsive** — mobile hamburger menu, fluid grids
- **Scroll-reveal animations** on all content sections
- **Animated counters** (28+ years, 110+ publications, etc.)
- **Dark hero** with SVG drone + robot illustrations
- **Email-to-enroll** — clicking any course opens a pre-filled email to Dr. Islam
- **No dependencies** — pure HTML, CSS, JavaScript. No build step needed.

---

## 📬 Contact

**Dr. Shafiqul Islam**  
Lead Instructor & Principal Researcher  
Robotics & Mechatronics Engineering  
Xavier University of Louisiana  

📧 [sislam3@xula.edu](mailto:sislam3@xula.edu)  
🎓 [Google Scholar](https://scholar.google.com/citations?user=tYVDFI0AAAAJ&hl=en)  
📍 207 NCF Academic Science Complex, 1 Drexel Drive, New Orleans, LA 70125

---

## 📜 Courses Offered

1. Machine Learning
2. Computer Vision & Deep Learning
3. Large Language Models (LLMs)
4. AI for Engineers
5. Robotics AI Applications
6. AI for Autonomous Systems
7. Machine Learning with Python

Each course includes **4 research projects** drawn from active funded R&D in autonomous UAVs, medical imaging, climate computing, and computational biology.
