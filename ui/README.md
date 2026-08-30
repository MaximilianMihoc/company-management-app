# CompanyApp

A modern web application for managing company information, built with React, TypeScript, and Vite. The application provides a secure and user-friendly interface for managing company data with support for multiple stock exchanges.

## Features

- **User Authentication**: Secure login and registration system
- **Company Management**: 
  - View list of companies with their details
  - Create new company entries
  - Edit existing company information
  - Track company details including name, exchange, ticker, and ISIN
- **Dark Mode Support**: Toggle between light and dark themes for better user experience
- **Responsive Design**: Built with Tailwind CSS for a mobile-first, responsive layout
- **Modern Stack**:
  - React 19 for UI
  - TypeScript for type safety
  - Vite for fast development and building
  - Tailwind CSS for styling
  - React Router for navigation
  - Axios for API communication

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

### Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Configuration

The application connects to a backend API running at `https://localhost:7240`. You can modify the API base URL in `src/api.ts` if needed.

## ESLint Configuration

The project includes a comprehensive ESLint setup for TypeScript and React. See the ESLint configuration section below for advanced configuration options.

### Advanced ESLint Setup

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

For React-specific lint rules, you can add the following plugins:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
