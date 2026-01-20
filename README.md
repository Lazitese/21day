# 21DAY Bootcamp

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Version](https://img.shields.io/badge/version-0.1.0-lightgrey.svg)

## Overview
The **21DAY Bootcamp** is a premium, full‑stack web application that empowers aspiring professionals with a 21‑day intensive training program. Built with modern technologies, it delivers a seamless, responsive experience across devices.

## Features
- Interactive curriculum with daily lessons
- Real‑time progress tracking
- Integrated sponsorship and donation flow
- Responsive design with glassmorphism and premium UI
- SEO‑optimized pages and performant build
- Deployable to any static hosting platform or cPanel

## Tech Stack
- **Vite** – Lightning‑fast dev server and bundler  
- **React** with **TypeScript** – Type‑safe UI components  
- **shadcn/ui** – Accessible, customizable UI primitives  
- **Tailwind CSS** – Utility‑first styling with dark mode & animations  
- **Framer Motion** – Smooth micro‑animations  
- **Supabase** (optional) – Backend‑as‑a‑Service for auth & data  

## Getting Started

### Prerequisites
- Node.js ≥ 20 (recommended via **nvm**)  
- npm ≥ 10  

### Installation
```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm ci

# Run the development server
npm run dev
```
The app will be available at `http://localhost:5173`.

### Building for Production
```bash
npm run build   # Generates the `dist/` folder
```
Deploy the contents of `dist/` to your hosting provider (e.g., cPanel, Vercel, Netlify).

## Deployment with cPanel
A ready‑to‑use `.cpanel.yml` is included:
```yaml
---
deployment:
  tasks:
    - export DEPLOYPATH=/home/dayboopy/public_html/
    - /bin/cp -R dist/* $DEPLOYPATH
```
Update `DEPLOYPATH` to match your account and run the deployment script.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature/awesome-feature`)  
3. Commit your changes with clear messages  
4. Open a Pull Request describing the changes  

All contributions must adhere to the existing code style and pass `npm run lint`.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Contact & Sponsorship
For inquiries, partnership opportunities, or to sponsor the program, please fill out the form:

[Become a Sponsor](https://forms.gle/joSQRC6r6yMZ461n9)

---
*Built with ❤️ by the 21DAY Team*
