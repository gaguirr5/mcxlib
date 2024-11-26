/// <reference path="../../../styles/theme/theme.d.ts" />
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import UserProfile from '../UserProfile';
import lighttheme from '../../../styles/theme/lighttheme';
import '@testing-library/jest-dom'

describe('UserProfile component', () => {
  // const theme = createTheme();

  // Helper function to wrap the component in a ThemeProvider
  const renderWithTheme = (component: React.ReactNode) =>
    render(<ThemeProvider theme={lighttheme}>{component}</ThemeProvider>);
  // render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

  it('renders the component correctly', () => {
    renderWithTheme(<UserProfile username='John Doe' userEmail='john.doe@example.com' />);

    // Check if the username and email are displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('handles empty props gracefully', () => {
    renderWithTheme(<UserProfile username='' userEmail='' />);

    // Ensure the component renders without crashing
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('john.doe@example.com')).not.toBeInTheDocument();
  });

  it('renders icons correctly', () => {
    renderWithTheme(<UserProfile username='John Doe' userEmail='john.doe@example.com' />);

    // Check if the icon is present (adjust based on your icon setup)
    const icon = screen.getByTestId('PersonIcon'); // Use data-testid if applicable
    expect(icon).toBeInTheDocument();
  });
});
