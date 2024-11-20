import { createTheme } from '@mui/material';
import { sharedComponents, sharedTypography } from './sharedThemeStyles';

const lighttheme = createTheme({
  palette: {
    mode: 'light',

    //txt colors
    defaultText: {
      main: '#CCC',
      light: '#FFF',
      dark: '#000',
    },
    requiredFieldText: {
      main: '#FF6F61',
    },

    readOnlyText: {
      main: '#929497',
    },

    //background colors
    formBackground: {
      main: '#fff',
      light: '#ddd',
      contrastText: '#000000',
    },
    gridBackground: {
      main: '#fff',
      contrastText: '#000000',
    },
    pageBackground: {
      main: '#fff',
      contrastText: '#000000',
    },
    navbarBackground: {
      main: '#002244',
      contrastText: '#F9F6EE',
    },

    //buttons
    primary: {
      main: '#0088ba',
      light: '#339FC7',
      dark: '#005F82',
    },

    secondary: {
      main: '#929497',
      light: '#A7A9AB',
      dark: '#666769',
    },

    //green
    success: {
      main: '#00ba8f',
    },

    //yellow
    warning: {
      main: '#ffce44',
    },

    //
    error: {
      main: '#d11a2a',
    },

    //dark blue/purple
    info: {
      main: '#002bba',
    },
    
    logout: {
      main: '#0088ba',
      contrastText: '#fff',
    },

    // buttonOne: {
    //     main: '#002bba',
    //     light: '#3355C7',
    //     dark: '#001E82',
    //   },

    //   buttonBorder: {
    //     main: '#0088ba1a',
    //     light: '#0088ba0d',
    //     dark: '#005F82',
    //     contrastText: '#000',
    //   },

    //misc colors
    statusPending: {
      main: '#ffce44',
      light: '#FFD769',
      dark: '#B2902F',
      contrastText: '#fff',
    },

    statusRejected: {
      main: '#d11a2a',
      light: '#DA4754',
      dark: '#92121D',
      contrastText: '#fff',
    },

    statusaApproved: {
      main: '#00ba8f',
      light: '#33C7A5',
      dark: '#008264',
      contrastText: '#ffffff',
    },

    //company colors
    //   capex: {
    //     main: '#00ba8f',
    //     light: '#00ba8f1a',
    //     contrastText: '#000000',
    //   },

    //   opex: {
    //     main: '#3200ba',
    //     light: '#3200ba1a',
    //     dark: '#9C84DD',
    //     contrastText: '#000000',
    //   },

    //   cnxPurple: {
    //     main: '#3200ba',
    //     light: '#5B33C7',
    //     dark: '#230082',
    //   },

    //   tabs: {
    //     main: '',
    //     light: '#DCE0E1',
    //     dark: '',
    //     contrastText: '#000',
    //   },

    //   gridBlue: {
    //     main: '#e9edfb',
    //     light: '#f5f7fd',
    //   },
  },
  typography: { ...sharedTypography },
  components: { ...sharedComponents },
});

export default lighttheme;
