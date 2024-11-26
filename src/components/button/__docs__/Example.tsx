import React, { FC } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '../Button';

const theme = createTheme();

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = 'small',
  text = 'Button',
}) => {
  return (
    // <ThemeProvider theme={theme}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Button size={size} text={text} disabled={disabled} onClick={onClick} primary={primary} />
    </div>
    // </ThemeProvider>
  );
};

export default Example;
