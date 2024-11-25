// styles/theme/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    statusPending: Palette['primary'];
    statusRejected: Palette['primary'];
    statusApproved: Palette['primary'];
    // capex: Palette['primary'];
    // opex: Palette['primary'];
    // gridBlue: Palette['primary'];
    // cnxPurple: Palette['primary'];
    pageBackground: Palette['primary'];
    gridBackground: Palette['primary'];
    formBackground: Palette['primary'];
    defaultText: Palette['primary'];
    // buttonOne: Palette['primary'];
    // buttonBorder: Palette['primary'];
    logout: Palette['primary'];
    readOnlyText: Palette['primary'];
    requiredFieldText: Palette['primary'];
    // tabs: Palette['primary'];
    navbarBackground: Palette['primary'];
    gridHead:Palette['primary']
    hover:Palette['primary']
  }

  interface PaletteOptions {
    statusPending?: PaletteOptions['primary'];
    statusRejected?: PaletteOptions['primary'];
    statusApproved?: PaletteOptions['primary'];
    // capex?: PaletteOptions['primary'];
    // opex?: PaletteOptions['primary'];
    // gridBlue?: PaletteOptions['primary'];
    // cnxPurple?: PaletteOptions['primary'];
    pageBackground?:PaletteOptions['primary'];
    gridBackground?: PaletteOptions['primary'];
    formBackground?: PaletteOptions['primary'];
    defaultText?: PaletteOptions['primary'];
    // buttonOne?: PaletteOptions['primary'];
    // buttonBorder?: PaletteOptions['primary'];
    logout?: PaletteOptions['primary'];
    readOnlyText?: PaletteOptions['primary'];
    requiredFieldText?: PaletteOptions['primary'];
    // tabs?: PaletteOptions['primary'];
    navbarBackground?: PaletteOptions['primary'];
    gridHead?:PaletteOptions['primary']
    hover?:PaletteOptions['primary']
  }
}

// Update the Button's color options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    statusPending: true;
    statusRejected: true;
    statusApproved: true;
    // capex: true;
    // opex: true;
    // gridBlue: true;
    // cnxPurple: true;
    pageBackground:true;
    gridBackground: true;
    formBackground: true;
    defaultText: true;
    // buttonOne: true;
    // buttonBorder: true;
    logout: true;
    readOnlyText: true;
    requiredFieldText: true;
    // tabs: true;
    navbarBackground: true;
    gridHead:true;
    hover:true;
  }
}
