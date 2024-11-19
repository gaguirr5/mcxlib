import { createTheme } from '@mui/material';
import { sharedComponents, sharedTypography } from './sharedThemeStyles';

const darktheme = createTheme({
    palette:{
        mode:'dark'
    },
    typography:{...sharedTypography},
    components:{...sharedComponents}
})

export default darktheme