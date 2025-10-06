# Metro Solver - Digital Growth Platform

## Overview
Metro Solver is a modern React-based landing page for a digital growth consultancy. Built with React 19, Vite 6, TypeScript, and GitHub Spark design system, it features a comprehensive landing page with multiple sections including services, portfolio, testimonials, and contact forms.

## Project Structure
This is a frontend-only application with the following architecture:
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 with Radix UI components
- **Design System**: GitHub Spark
- **Icons**: Phosphor Icons & Heroicons

## Key Features
- Responsive landing page with modern design
- Multiple sections: Hero, Services, Portfolio, Process, Stats, Testimonials
- Contact form and FAQ sections
- Interactive map integration
- Newsletter signup
- Blog and podcast sections

## Development
- **Dev Server**: Runs on port 5000
- **Hot Reload**: Enabled via Vite HMR
- **Command**: `npm run dev`

## Deployment
- **Type**: Autoscale (stateless web app)
- **Build**: `npm run build` - Compiles TypeScript and bundles with Vite
- **Run**: `npm run preview` - Serves the production build

## Recent Changes (October 6, 2025)
- Initial setup for Replit environment
- Configured Vite server to bind to 0.0.0.0:5000 for Replit proxy compatibility
- Added deployment configuration for autoscale deployment
- Installed all npm dependencies
- Verified application runs correctly

## Dependencies
All dependencies are managed via npm and defined in package.json. Major libraries include:
- React 19 & React DOM
- Vite 6 with React plugin
- Tailwind CSS 4 with container queries
- Radix UI component library
- Framer Motion for animations
- React Hook Form with Zod validation
- TanStack Query for data fetching
- Recharts for data visualization
