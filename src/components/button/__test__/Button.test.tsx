import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MyButton from "../Button";

describe("MyButton component", () => {
  const theme = createTheme();

  const renderWithTheme = (component: React.ReactNode) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

  it("renders correctly with text", () => {
    renderWithTheme(<MyButton text="Click Me" />);
    const button = screen.getByRole("button", { name: "Click Me" });
    expect(button).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    renderWithTheme(<MyButton text="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: "Click Me" });

    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
 