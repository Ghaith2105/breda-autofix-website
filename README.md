<h1 align="center">
  Breda AutoFix
  <br>
</h1>

<h4 align="center">A Modern Car Garage Website Built with React, TypeScript & Vite</h4>

<p align="center">
  <a href="#features">Features</a>
  •
  <a href="#tech-stack">Tech Stack</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#deployment">Deployment</a>
  •
  <a href="https://ghaith2105.github.io/breda-autofix-website/" target="__blank">Live Demo</a>
</p>

---

## Features

#### Service Management
- **APK Keuring** - Official Dutch vehicle inspection
- **Small & Large Service** - Comprehensive maintenance packages
- **Tire Services** - Seasonal changes with balancing
- **Airco Service** - AC system refill and cleaning
- **Engine Diagnostics** - Computerized error code analysis

#### Booking System
- Multi-step booking flow with service selection
- Interactive date & time slot picker
- Real-time availability checking
- Customer information capture
- Booking confirmation system

#### User Experience
- Custom animated loading screen with car animation
- Custom cursor effect (desktop)
- Smooth scroll animations
- Responsive mobile-first design
- Multi-language support (EN/NL)
- AI-powered customer assistant

#### Technical Features
- Modern React 19 with TypeScript
- Tailwind CSS for styling
- Vite for blazing-fast development
- Lucide React icons
- Google Gemini AI integration
- Modular component architecture

---

## Tech Stack

**Frontend Framework:** React 19 with TypeScript  
**Build Tool:** Vite  
**Styling:** Tailwind CSS  
**Icons:** Lucide React  
**AI Integration:** Google Gemini API  
**Deployment:** GitHub Pages / Vercel

---

## Installation

To run the project locally, you need **Node.js** installed on your machine.

#### Clone the repository

```sh
git clone https://github.com/ghaith2105/breda-autofix-website.git
cd breda-autofix-website
```

#### Install dependencies

```sh
npm install
```

#### Set up environment variables

Create a `.env.local` file in the root directory:

```sh
GEMINI_API_KEY=your_gemini_api_key_here
```

> **Note:** The AI Assistant feature requires a valid Gemini API key. Get one from [Google AI Studio](https://ai.google.dev/).

#### Run the development server

```sh
npm run dev
```

The site will be available at `http://localhost:3000`

#### Build for production

```sh
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## Deployment

### Deploy to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Prerequisites:
1. Push your code to a GitHub repository
2. Add your `GEMINI_API_KEY` as a repository secret:
   - Go to Settings → Secrets and variables → Actions
   - Create a new secret named `GEMINI_API_KEY`
   - Paste your API key

#### Configuration:
1. Go to Settings → Pages
2. Under "Source", select **GitHub Actions**
3. Push to the `main` branch to trigger deployment

Your site will be live at: `https://ghaith2105.github.io/breda-autofix-website/`

### Deploy to Vercel (Alternative)

1. Import your repository at [vercel.com](https://vercel.com)
2. Add `GEMINI_API_KEY` as an environment variable
3. Deploy with one click

Your site will be live at: `https://breda-autofix.vercel.app`

---

## Project Structure

```
breda-autofix-website/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Booking/
│   │   └── BookingSystem.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── AiAssistant.tsx
│   ├── LoadingScreen.tsx
│   └── CustomCursor.tsx
├── context/
│   └── LanguageContext.tsx
├── App.tsx
├── constants.ts
├── types.ts
├── index.html
├── package.json
└── vite.config.ts
```

---

## TODO
### Future Improvements (Version 2.0)

If this project were to expand, here are some features I would add:

- **Backend Integration:** Connect to a real backend API for booking management
- **Payment Gateway:** Integrate Stripe/Mollie for online payments
- **Customer Dashboard:** Allow customers to view and manage their bookings
- **Admin Panel:** Full booking management system for garage staff
- **Email Notifications:** Automated booking confirmations and reminders
- **Reviews System:** Allow customers to leave reviews and ratings
- **Service History:** Track customer service history and maintenance schedules
- **Real-time Availability:** Dynamic time slot management based on actual bookings
- **Multi-location Support:** Expand to support multiple garage locations
- **Advanced Analytics:** Track booking patterns and popular services

---

## License

This project is open-source and available for portfolio and educational purposes.

---

## Contact

For questions or collaboration opportunities, feel free to reach out!

**Live Demo:** [https://ghaith2105.github.io/breda-autofix-website/](https://ghaith2105.github.io/breda-autofix-website/)

---

<p align="center">Made with ❤️ using React & TypeScript</p>
