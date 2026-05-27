# Piumi Abeygunasekera Portfolio

A modern, animated personal portfolio built with **React** and **Vite** that showcases skills, projects, and a functional contact form.

---

## ✨ Features
- **Hero section** with smooth reveal animations.
- **Soft‑skills** and **technical‑skills** cards using reusable components.
- **Contact form** that sends messages via **Formspree** (no backend required).
- **Responsive layout** with dark‑mode friendly colors.
- Centralised styling in `src/styles/main.css` (CSS variables, animations, and a glass‑morphism look).
- Easy to extend – just add new sections/components.

---

## 🛠️ Tech Stack
- **React** – UI library
- **Vite** – Lightning‑fast build tool & dev server
- **JavaScript (ES6+)** – Component logic
- **Vanilla CSS** – Global stylesheet (`src/styles/main.css`) with custom variables
- **Formspree** – Email sending service (no server required)
- **GitHub Pages** (or any static host) for deployment

---

## 📦 Getting Started
### Prerequisites
- Node.js ≥ 18
- npm (comes with Node)

### Installation
```bash
# Clone the repo
git clone https://github.com/your‑username/piumi‑portfolio.git
cd piumi‑portfolio

# Install dependencies
npm install
```

### Development
```bash
npm run dev
```
Open `http://localhost:5173` (or the URL shown in the console).

### Build for Production
```bash
npm run build
# The static files are output to the `dist` folder
```

---

## 📧 Contact Form Configuration
1. Sign up at https://formspree.io/.
2. Create a new form and copy its endpoint URL (e.g. `https://formspree.io/f/abcd1234`).
3. In `src/sections/ContactForm.jsx` replace the placeholder:
```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```
4. Verify the form via the email you receive from Formspree.
5. Restart the dev server and the form will now send real emails.

---

## 🎨 Styling
All visual tweaks live in **`src/styles/main.css`**:
- CSS variables (`--primary`, `--bg`, `--accent`, etc.) control colors.
- The `.reveal` class handles scroll‑into‑view animations.
- No component‑specific CSS files – everything is centralized per the project’s design guidelines.

---

## 📂 Project Structure
```
my-portfolio/
├─ public/               # static assets (favicon, images)
├─ src/
│   ├─ components/      # reusable hooks & UI helpers
│   ├─ sections/        # page sections (Hero, Skills, ContactForm, …)
│   └─ styles/
│       └─ main.css     # global stylesheet (single source of truth)
├─ .env                 # Vite env variables (Formspree endpoint, etc.)
├─ index.html
├─ vite.config.js
└─ package.json
```

---

## 🚀 Deploying
You can deploy the `dist` folder to any static‑hosting provider (GitHub Pages, Netlify, Vercel, etc.). Example for GitHub Pages:
```bash
npm run build
# push the `dist` folder to the `gh-pages` branch
npx gh-pages -d dist
```

---

## 📄 License
Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgements
- Inspiration from modern portfolio templates.
- Thanks to **Formspree** for a hassle‑free email solution.
- Icons from **Font Awesome** and Google Fonts (**Inter**, **Roboto**).

---

*Happy coding!*
