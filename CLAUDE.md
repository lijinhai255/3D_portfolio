# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

This is a React 3D portfolio website built with Three.js, featuring interactive 3D models and animations.

### Core Architecture

- **Framework**: React 18 with Vite as the build tool
- **3D Graphics**: Three.js with React Three Fiber and React Three Drei
- **Styling**: Tailwind CSS with custom themes and animations
- **Routing**: React Router Dom for navigation
- **Email**: EmailJS for contact form functionality

### Key Components

- **Pages**: Home, About, Projects, Contact (`src/pages/`)
- **3D Models**: Island, Plane, Bird, Sky, Fox (`src/models/`)
- **UI Components**: Navbar, Footer, CTA, Loader, HomeInfo (`src/components/`)
- **Assets**: Icons and images organized in `src/assets/`
- **Constants**: Skills, experiences, projects, social links in `src/constants/index.js`

### 3D Scene Architecture

The main 3D scene is in `src/pages/Home.jsx` and includes:
- Interactive island with responsive scaling
- Animated biplane with screen size adjustments
- Sky and bird models for atmosphere
- Audio integration with background music
- Touch event handling for mobile devices

### File Organization

- Export patterns: Each directory has an `index.js` file for clean imports
- Model files are individual components with GLB asset loading
- Constants are centralized for easy configuration
- Components follow consistent naming conventions

### Styling System

- Custom Tailwind config with color themes and typography
- Responsive design with mobile-first approach
- Box shadow utilities and custom animations
- Font integration with Work Sans and Poppins

### Development Notes

- The project uses `.env` file for environment variables
- GLB 3D models are included via vite config's `assetsInclude`
- ESLint is configured for React development
- The build output is optimized for Vercel deployment