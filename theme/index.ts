/**
 * Global Theme Configuration
 *
 * This file defines the application's design system including colors, spacing,
 * typography, and other UI constants. Import from this file instead of hardcoding
 * values to maintain consistency across the application.
 */

export const colors = {
  // Brand colors
  primary: {
    dark: "#2c2c2c",
    main: "#222222",
    light: "#777777",
  },
  // UI colors
  background: {
    main: "#ffffff",
    secondary: "#f5f7fa",
  },
  border: "#e6eaef",
  text: {
    primary: "#222222",
    secondary: "#777777",
    white: "#ffffff",
  },
  // Status colors
  status: {
    success: "#4CAF50",
    error: "#F44336",
    warning: "#FF9800",
    info: "#2196F3",
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  // Common component-specific spacing
  container: 20,
  cardPadding: 14,
  inputPadding: 16,
  buttonPadding: {
    vertical: 14,
    horizontal: 16,
  },
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  round: 9999,
};

export const typography = {
  fontFamily: {
    primary: "Inter",
    mono: "SpaceMono",
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 26,
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
  },
};

export const shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 16.7,
    elevation: 3,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
};

const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
};

export type Theme = typeof theme;
export default theme;
