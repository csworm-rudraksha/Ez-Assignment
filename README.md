# VFilms - Single Page Website ( Ez Assignment ) 

A beautiful single-page React website showcasing VFilms' storytelling services with smooth vertical scrolling and a functional navigation bar.

## Project Structure

```
src/
├── components/
│   ├── NavBarComponent/
│   │   └── Navbar.jsx          
│   ├── Home.jsx              
│   ├── Hero.jsx               
│   ├── AboutUs.jsx            
│   ├── Services.jsx          
│   ├── Portfolio.jsx          
│   └── Contact.jsx            
├── styles/
│   ├── Navbar.css          
│   ├── Home.css           
│   ├── Hero.css           
│   ├── AboutUs.css            
│   ├── Services.css           
│   ├── Portfolio.css           
│   ├── Contact.css           
│   ├── App.css             
│   └── index.css       
├── App.jsx                  
└── main.jsx                    
```

## Features

- **Vertical Scrolling**: Smooth vertical scrolling between sections
- **Fixed Navbar**: Sticky navigation bar that highlights active section
- **Smooth Scroll Navigation**: Clicking navbar links smoothly scrolls to sections
- **Responsive Design**: Mobile-friendly layout for all screen sizes
- **Section IDs**: Each page has an ID for easy navigation:
  - `#home` - Home page
  - `#varnan` - Hero/About page
  - `#ourstory` - About Us/Portfolio page
  - `#services` - Services page
  - `#portfolio` - Portfolio page
  - `#contact` - Contact page

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Navigation

The navbar includes:
- **Services** - Links to services section
- **Their Stories** - Links to portfolio section
- **Our Story** - Links to about us section
- **Varnan** - Links to hero/about section
- **Let's Talk** - Links to contact section

The navbar:
- Is fixed at the top of the page
- Highlights the active section as you scroll
- Has a mobile-responsive hamburger menu
- Smoothly scrolls to sections when clicked

## Technologies Used

- React 18
- Vite
- CSS3

## Design Notes

The website features:
- Light beige textured background (#FFF8F0)
- Peach/coral accent colors (#FF9D7D, #FF7A5C)
- Dark blue text (#1E3A5F, #2C2C2C)
- Custom fonts: Island Moments, Instrument Sans, Crimson Text, Halant
- Responsive design for mobile and desktop

## Assets

All assets are located in `/public/assets/`:
- `/public/assets/images/` - Image files
- `/public/assets/vectors/` - SVG vector files
- `/public/assets/logo/` - Logo files
## Dump File Postman
<img src="Postman Dump.png" alt="X" width="750" height="400">
