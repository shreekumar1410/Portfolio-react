# Professional Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap, featuring dark/light theme toggle, smooth animations, and professional design.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 Design & UI
- **Modern & Professional Design** - Clean, minimalist aesthetic
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for all device sizes (mobile-first approach)
- **Smooth Animations** - Framer Motion and AOS for engaging user experience
- **Professional Color Palette** - Carefully selected colors for maximum impact

### 🚀 Sections
- **Hero Section** - Animated introduction with typewriter effect
- **About Section** - Professional bio with animated statistics
- **Skills Section** - Interactive progress bars and technology showcase
- **Projects Section** - Project showcase with filtering and detailed modals
- **Contact Section** - Functional contact form with validation

### 🛠️ Technical Features
- **React Functional Components** - Modern React with hooks
- **Bootstrap Integration** - Responsive grid and components
- **Theme Context** - Centralized theme management
- **Form Validation** - Client-side validation with error handling
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized** - Lazy loading and optimized animations
- **SEO Friendly** - Semantic HTML and meta tags

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.js        # Navigation with theme toggle
│   ├── Hero.js          # Hero section with animations
│   ├── About.js         # About section with stats
│   ├── Skills.js        # Skills with progress bars
│   ├── Projects.js      # Projects showcase
│   └── Contact.js       # Contact form
├── context/             # React context
│   └── ThemeContext.js  # Theme management
├── styles/              # CSS files
│   ├── theme.css        # Color palette and variables
│   └── portfolio.css    # Main stylesheet
├── data/                # Data files (optional)
└── assets/              # Images and other assets
```

## 🎨 Customization Guide

### 1. Personal Information

**Update Hero Section** (`src/components/Hero.js`):
```javascript
// Change your name and roles
<h1>Hi, I'm <span className="text-gradient">Your Name</span></h1>

// Update roles in the typewriter effect
const roles = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3'
];
```

**Update About Section** (`src/components/About.js`):
```javascript
// Update your bio and statistics
const stats = [
  { count: 25, label: 'Projects Completed' },
  { count: 2, label: 'Years Experience' },
  // ... update with your actual stats
];
```

### 2. Skills & Technologies

**Update Skills** (`src/components/Skills.js`):
```javascript
// Update your technical skills
const technicalSkills = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'Your Skill', level: 85, color: '#color-code' },
  // ... add your skills
];

// Update technologies you use
const technologies = [
  { name: 'React', icon: <SiReact size={40} />, color: '#61DAFB' },
  // ... add your technologies
];
```

### 3. Projects

**Update Projects** (`src/components/Projects.js`):
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'react', // react, javascript, css
    description: 'Brief description',
    longDescription: 'Detailed description',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-link.com',
    features: ['Feature 1', 'Feature 2']
  }
  // ... add your projects
];
```

### 4. Contact Information

**Update Contact Details** (`src/components/Contact.js`):
```javascript
const contactInfo = [
  {
    icon: <BsEnvelope size={24} />,
    title: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com'
  }
  // ... update with your contact info
];

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    // ... update with your social links
  }
];
```

### 5. Color Theme

**Customize Colors** (`src/styles/theme.css`):
```css
:root[data-theme="light"] {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... customize your color palette */
}
```

### 6. Add Your Images

1. **Profile Photo**: Replace placeholder in About section
2. **Project Images**: Add project screenshots to `public/` folder
3. **Favicon**: Replace `public/favicon.ico` with your icon

## 📱 Responsive Breakpoints

- **Mobile**: 576px and below
- **Tablet**: 768px and below
- **Desktop**: 992px and above
- **Large Desktop**: 1200px and above

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

### Vercel
1. Connect your GitHub repository
2. Deploy automatically with each push

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 📦 Dependencies

### Core
- **React** - UI library
- **React Bootstrap** - Bootstrap components for React
- **Bootstrap** - CSS framework

### Animation
- **Framer Motion** - Advanced animations
- **AOS** - Animate on scroll library

### Icons
- **React Icons** - Icon library
- **Simple Icons** - Technology icons

## 🌟 Best Practices Implemented

- **Semantic HTML** - Proper HTML structure
- **Accessibility** - ARIA labels and keyboard navigation
- **Performance** - Optimized images and lazy loading
- **SEO** - Meta tags and structured data
- **Code Quality** - ESLint and clean code practices
- **Responsive Design** - Mobile-first approach

## 📝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you found this helpful, please give it a ⭐️ on GitHub!

For questions or support, reach out through:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

**Built with ❤️ using React & Bootstrap**
