# MoonDEX Platform

A modern, responsive DEX (Decentralized Exchange) platform built with React, TypeScript, and Tailwind CSS.

## Features

- 🌙 Modern UI design with dark mode
- 📱 Fully responsive layout
- ⚡ Built with performance in mind
- 🔒 Security-focused architecture
- 🎨 Customizable theme using Tailwind CSS
- 🧩 Modular component structure

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- shadcn/ui components
- Lucide Icons

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/moondex.git
cd moondex
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
cp .env.example .env
```

## Development

To start the development server:
```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
moondex/
├── src/
│   ├── components/     # Reusable components
│   ├── styles/        # Global styles and Tailwind configuration
│   ├── lib/           # Utility functions and helpers
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Customization

### Styling
- Global styles are defined in `src/styles/globals.css`
- Theme customization can be done in `tailwind.config.js`
- Component-specific styles use Tailwind CSS classes

### Components
- UI components are built using shadcn/ui
- Custom components are located in `src/components`
- Responsive design breakpoints follow Tailwind CSS defaults

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Design inspiration from modern DEX platforms
- shadcn/ui for beautiful, accessible components
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons

## Support

For support, please open an issue in the GitHub repository or contact the maintainers directly.

## Development Notes

### Key Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Lint code
npm run lint
```

### Adding New Features
1. Create a new branch for your feature
2. Implement the feature using the existing component structure
3. Add necessary tests
4. Update documentation
5. Submit a pull request

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Document complex logic with comments

Remember to update this documentation as the project evolves!# moondex
