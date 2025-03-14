# Journal App

## Overview
A React Native application for journaling and personal insights, built with Expo.

## Project Structure

### Core Directories
- `/app`: Main application routes using Expo Router
- `/components`: Reusable UI components
- `/theme`: Global theme configuration
- `/assets`: Static assets like images and fonts

### Component Organization
- `/components/ui`: Base UI components (Button, Card, etc.)
- `/components/home`: Components for the home screen
- `/components/journal`: Components for the journal entry screen
- `/components/signin`: Components for the authentication screens
- `/components/welcome`: Components for the welcome/onboarding screens

## Design System

The application uses a centralized theme configuration in `/theme/index.ts` that defines:

- Color palette
- Typography (font families, sizes, weights)
- Spacing scales
- Border radii
- Shadow styles

All components should reference these theme values instead of hardcoding styles.

## Development Guidelines

### TypeScript
- Use strict TypeScript conventions
- Define interfaces for all component props
- Follow consistent naming conventions (e.g., `ComponentNameProps`)
- Add JSDoc comments to document component usage

### Components
- Keep components small and focused on a single responsibility
- Use default prop values for optional props
- Include accessibility attributes (accessibilityLabel, accessibilityRole)
- Document components with JSDoc comments

### Styling
- Use React Native's StyleSheet for performance
- Reference theme values instead of hardcoding colors, spacing, etc.
- Keep styles close to the components that use them

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

## Available Scripts

- `npm start`: Start the Expo development server
- `npm run android`: Start the app on an Android emulator/device
- `npm run ios`: Start the app on an iOS simulator/device
- `npm run web`: Start the app in a web browser
