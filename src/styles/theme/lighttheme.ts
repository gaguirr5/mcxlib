import { createTheme } from '@mui/material';
import { sharedComponents, sharedTypography } from './sharedThemeStyles';

const lighttheme = createTheme({
    palette:{
        mode:'light'
    },
    typography:{...sharedTypography},
    components:{...sharedComponents}
})

export default lighttheme