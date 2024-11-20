import { createTheme } from '@mui/material';
import { sharedComponents, sharedTypography } from './sharedThemeStyles';

const darktheme = createTheme({
  palette: {
    mode: 'dark',
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
      main: '#424242',
      light: 'rgba(204, 204, 204, .1)',
      contrastText: '#CCCCCC',
    },

    gridBackground: {
      main: '#424242',
      contrastText: '#CCCCCC',
    },

    pageBackground: {
      main: '#424242',
      contrastText: '#CCCCCC',
    },

    navbarBackground: {
      main: '#222222',
      contrastText: '#CCCCCC',
    },

    //buttons
    primary: {
      main: '#0088ba',
      light: '#339FC7',
      dark: '#005F82',
    },
    secondary: {
      main: '#666769',
      light: '#848587',
      dark: '#474849',
      contrastText: '#CCCCCC',
    },

    error: {
      main: '#d11a2a',
      light: '#DA4754',
      dark: '#E9EDFB',
    },
    warning: {
      main: '#ffce44',
      light: '#FFD769',
      dark: '#E9EDFB',
    },
    info: {
      main: '#002bba',
    },
    logout: {
      main: '#424242',
      contrastText: '#CCCCCC',
    },

    //misc colors
    statusPending: {
      main: '#B2902F',
      light: '#FFD769',
      dark: '#E9EDFB',
      contrastText: '#cccccc',
    },
    statusRejected: {
      main: '#92121D',
      light: '#A7414A',
      dark: '#660C14',
      contrastText: '#cccccc',
    },
    statusApproved: {
      main: '#008264',
      light: '#339B83',
      dark: '#005B46',
      contrastText: '#cccccc',
    },
    

    //company colors
     //   capex: {
    //     main: '#00ba8f',
    //     light: '#00ba8f',
    //     dark: '#00BA8F',
    //     contrastText: '#000000',
    //   },
    //   opex: {
    //     main: '#c4aeff',
    //     light: '#c4aeff',
    //     dark: '#c4aeff',
    //     contrastText: '#000000',
    //   },

    //   cnxPurple: {
    //     main: '#3200ba',
    //     light: '#5B33C7',
    //     dark: '#230082',
    //   },


    // buttonOne: {
    //     main: '#0088ba',
    //     light: '#339FC7',
    //     dark: '#005F82',
    //   },

    //   buttonBorder: {
    //     main: '#005F82',
    //     light: '#005F82',
    //     dark: '#005F82',
    //     contrastText: '#CCCCCC',
    //   },

    //   tabs: {
    //     main: '',
    //     light: '#555555',
    //     dark: '',
    //     contrastText: '#CCC',
    //   },
    //   gridBlue: {
    //     main: '#e9edfb',
    //     light: '#f5f7fd',
    //   },
  },
  typography: { ...sharedTypography },
  components: { ...sharedComponents },
});

export default darktheme;
