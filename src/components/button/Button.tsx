// import React from "react";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export interface ButtonProps {
  text: string; // The text displayed on the button
  primary?: boolean; // Whether the button uses the primary theme
  disabled?: boolean; // Whether the button is disabled
  size?: "small" | "medium" | "large"; // The size of the button
  onClick?: () => void; // Function called on button click
}

// Style customization for the MUI button
const StyledButton = styled(MuiButton)<{ primary?: boolean }>(({ theme, primary }) => ({
  backgroundColor: primary ? theme.palette.primary.main : theme.palette.secondary.main,
  color: primary ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText,
  "&:hover": {
    backgroundColor: primary ? theme.palette.primary.dark : theme.palette.secondary.dark,
  },
}));

const Button = ({ text, primary, size, disabled, onClick }:ButtonProps) => {
  return (
    <StyledButton
      variant="contained"
      size={size}
      disabled={disabled}
      primary={primary} // Custom primary prop for styling
      onClick={onClick}
    >
      {text} {/* Pass text as children */}
    </StyledButton>
  );
};

export default Button;
