# Cartesia AI WordPress Theme

A minimalistic, high-performance WordPress theme replicating Cartesia.ai design. Built with React.js, GSAP animations, and optimized for 90+ Lighthouse scores.

## 🚀 Features

- **Modern Design**: Clean, minimalistic interface with smooth animations
- **React Components**: Interactive pricing table, FAQ accordion, and contact form
- **GSAP Animations**: Subtle animations for hero and features sections


## 🛠️ Installation

### Quick Install
1. **Download/Clone**
   ```bash
   git clone https://github.com/sayamjn/cartesia-theme.git
   ```

2. **Upload to WordPress**
   - Zip the theme folder
   - Go to **Appearance > Themes > Add New > Upload Theme**
   - Select and install the zip file
   - Activate the theme

### Development Setup
```bash
cd cartesia-theme
npm install
npm run dev  # Watch mode
npm run build  # Production build
```

## 🔧 Development

### Project Structure
```
cartesia-theme/
├── assets/           # CSS, JS, and image assets
├── inc/             # PHP includes and functions
├── react-src/       # React component source files
├── template-parts/  # Reusable template parts
├── tests/           # Jest and Playwright tests
└── [WordPress theme files]
```

### Scripts
- `npm run dev` - Development mode with file watching
- `npm run build` - Build production assets
- `npm test` - Run Jest unit tests
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier



## 🚢 Deployment

### Free Hosting Options
- **InfinityFree** (Recommended)
- **000WebHost**
- **WordPress.com** (Paid plan required)


## 🐛 Troubleshooting

**Animations not working**
- Check GSAP script loading
- Verify browser console for errors

**React components not rendering**
- Confirm React/ReactDOM loaded
- Check component mount points exist

**Poor performance**
- Enable caching plugin
- Use CDN for static assets
- Optimize images

## 📄 License

GPL v2 or later

## 🙏 Credits

- Design inspired by Cartesia.ai
- Built with WordPress
- Animations powered by GSAP
- React components using React 18

---

**Made with ❤️ by Sayam**