# Islamic Community Platform

A stunning, modern Islamic community platform homepage/dashboard built with **React**, **Shadcn UI**, and **DaisyUI** featuring beautiful dark/light mode support. This platform serves as a welcoming digital space for Muslims to connect, access prayer times, and enrich their spiritual journey.

## ✨ Features

### 🌙 **Dark/Light Mode Support**
- **Beautiful theme switching** with Shadcn UI Switch component
- **Smooth transitions** between light and dark themes
- **Theme persistence** across browser sessions
- **Automatic theme detection** with localStorage support
- **CSS custom properties** for seamless theme switching

### 🕌 **Hero Section**
- Islamic greetings in Arabic and English with beautiful typography
- Current Hijri date display with Shadcn Badge
- Beautiful gradient background with Islamic patterns
- Responsive design for all devices
- DaisyUI hero component integration

### 🕐 **Prayer Times Widget**
- Real-time prayer times for current location
- **DaisyUI countdown component** with smooth animations
- All 5 daily prayers in **Shadcn Cards** with hover effects
- Prayer reminders and tips using Shadcn Badge components
- Highlighted next prayer with special styling and animations

### 📖 **Daily Spiritual Content**
- **Daily Hadith**: Arabic text with English translation, source citation, and explanation
- **Quranic Reflection**: Verse of the day with translation and reflection
- Interactive refresh functionality for new content
- Beautiful typography and Islamic styling
- **Shadcn Card components** with hover effects

### 🧭 **Quick Navigation**
- 6 main platform sections with intuitive icons
- Islamic Guide, Donations, Prayer Times, Calendar, Opportunities, Stories
- **DaisyUI glass morphism** effects on navigation cards
- Hover effects and smooth animations
- Call-to-action for community engagement

### 🎨 **Design Features**
- **Islamic color scheme** that adapts to both themes
- **Glass morphism effects** using DaisyUI utilities
- **Responsive grid layouts** with proper spacing
- **Smooth animations** and transitions
- **Arabic font support** for proper text rendering

## 🚀 Technology Stack

### **UI Libraries**
- **Shadcn UI**: Modern, accessible React components
- **DaisyUI**: Beautiful utility-first CSS framework
- **Tailwind CSS**: Utility-first CSS framework with custom Islamic theme

### **Core Technologies**
- **React 19**: Latest React with modern hooks
- **Context API**: Theme management and state
- **CSS Custom Properties**: Dynamic theming system

### **Component Architecture**
- **Shadcn Components**: Button, Card, Badge, Switch
- **DaisyUI Classes**: hero, countdown, glass, gradient
- **Custom Islamic Components**: Hero, PrayerTimes, SpiritualContent, Navigation

## 🎨 Theme System

### **Light Mode Colors**
- Primary: Emerald green (#10B981, #059669)
- Secondary: Gold/amber (#F59E0B, #D97706)
- Background: Clean whites with subtle gradients
- Text: Charcoal grays (#374151, #6B7280)

### **Dark Mode Colors**
- Primary: Lighter emerald (#34D399, #10B981)
- Secondary: Bright gold (#FCD34D, #F59E0B)
- Background: Dark slate (#0F172A, #1E293B)
- Text: Light grays (#F1F5F9, #CBD5E1)

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js (version 14 or higher)
- npm or yarn package manager

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd islamic-community-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### **Build for Production**
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   │   ├── button.jsx        # Button component
│   │   ├── card.jsx          # Card component
│   │   ├── badge.jsx         # Badge component
│   │   └── switch.jsx        # Switch component
│   ├── Header.js             # Header with theme toggle
│   ├── Hero.js               # Hero section with DaisyUI
│   ├── PrayerTimesWidget.js  # Prayer times with Shadcn Cards
│   ├── SpiritualContent.js   # Hadith & Quran with Shadcn Cards
│   ├── QuickNavigation.js    # Navigation grid with Shadcn Cards
│   ├── HomePage.js           # Main component combining all sections
│   └── ThemeToggle.js        # Theme toggle component
├── contexts/
│   └── ThemeContext.js       # Dark/light mode management
├── utils/
│   └── islamicUtils.js       # Islamic date & prayer utilities
├── lib/
│   └── utils.js              # Utility functions (cn, clsx, twMerge)
├── data/
│   └── mockData.js           # Sample Islamic content
├── App.js                    # Main app with ThemeProvider
└── index.css                 # Tailwind + theme CSS variables
```

## 🎯 Key Components

### **ThemeToggle Component**
- **Shadcn Switch** with sun/moon icons
- Smooth theme transitions
- Theme persistence in localStorage

### **Header Component**
- Responsive navigation menu
- Theme toggle integration
- Beautiful Islamic logo design

### **Hero Component**
- **DaisyUI hero** styling
- Islamic greetings and welcome message
- Hijri date display with **Shadcn Badge**

### **PrayerTimesWidget Component**
- **Shadcn Cards** for prayer times
- **DaisyUI countdown** for next prayer
- Responsive grid layout
- Prayer highlighting with **Shadcn Badge**

### **SpiritualContent Component**
- **Shadcn Cards** for hadith and Quran
- Interactive refresh functionality
- Beautiful Arabic text rendering
- **Shadcn Button** components

### **QuickNavigation Component**
- **Shadcn Cards** with **DaisyUI glass** effects
- Hover animations and transitions
- Beautiful gradient backgrounds
- Responsive grid layout

## 🔧 Customization

### **Adding New Shadcn Components**
```bash
# Install additional Shadcn components
npx shadcn-ui@latest add [component-name]
```

### **Modifying Theme Colors**
Update `tailwind.config.js` and `src/index.css` with your custom color scheme.

### **Adding New Features**
1. Create new components in `src/components/`
2. Import and use them in `HomePage.js`
3. Add any new dependencies to `package.json`
4. Update theme context if adding new theme-dependent features

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Mobile**: Stacked layout with larger touch targets
- **Tablet**: 2-column layout for spiritual content
- **Desktop**: Full layout with proper spacing and hover effects

## 🌟 Advanced Features

### **Theme System**
- **CSS Custom Properties** for dynamic theming
- **Smooth transitions** between themes
- **Theme persistence** across sessions
- **Automatic theme detection**

### **Performance Optimizations**
- **React.memo** for component optimization
- **useMemo** for expensive calculations
- **Efficient re-renders** with proper dependencies
- **Lazy loading** ready for future implementation

### **Accessibility**
- **ARIA labels** and proper semantic HTML
- **Keyboard navigation** support
- **Focus management** with visible indicators
- **Screen reader** compatibility

## 🚀 Future Enhancements

- [ ] Real-time prayer times API integration
- [ ] User authentication and profiles
- [ ] Community forum and discussions
- [ ] Islamic calendar with events
- [ ] Audio recitations of Quran and Hadith
- [ ] Push notifications for prayer times
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Islamic community members for inspiration and feedback
- Shadcn UI team for beautiful, accessible components
- DaisyUI team for stunning utility classes
- Open source community for amazing tools and libraries

## 📞 Support

For support and questions:
- Email: info@islamiccommunity.com
- Create an issue in the GitHub repository
- Join our community discussions

---

**May Allah guide us all to the straight path. Ameen.** 🤲

## 🎉 **Ready to Use!**

Your stunning Islamic Community Platform with **Shadcn UI** and **DaisyUI** is now ready! 

**Features included:**
✅ Beautiful dark/light mode support  
✅ Shadcn UI components (Button, Card, Badge, Switch)  
✅ DaisyUI styling (hero, countdown, glass, gradient)  
✅ Responsive design for all devices  
✅ Islamic color scheme and typography  
✅ Smooth theme transitions  
✅ Theme persistence across sessions  

**Open `http://localhost:3000` to see your platform in action!** 🕌✨
