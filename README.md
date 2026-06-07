# Portfolio V2 — Sivabharath S P

A modern, responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- JavaScript (ES6+)

## 📦 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-v2/
├── public/
│   └── profile.jpg        ← Add your profile photo here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## ✏️ Customization

1. **Add your profile photo** — place `profile.jpg` in the `/public/` folder
2. **Update personal info** — edit `Hero.jsx`, `About.jsx`, `Contact.jsx` with your actual details
3. **Add your projects** — update the `projects` array in `Projects.jsx`
4. **Update social links** — find LinkedIn/GitHub URLs across components and update them
5. **Contact form** — integrate EmailJS or Formspree in `Contact.jsx` for real email sending

## 🌐 Deploy to Vercel

```bash
npm run build
# Then deploy the `dist` folder to Vercel, Netlify, or GitHub Pages
```

---
Built by [Sivabharath S P](https://github.com/sivabharath23)
