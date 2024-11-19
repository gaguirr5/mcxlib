import { Card, CardContent, useMediaQuery, useTheme, Box, Stack, Typography } from '@mui/material';
import { PersonIcon } from '../../icons';

export interface UserProfileProps{
  username:string;
  userEmail:string;
}

const UserProfile = ({username, userEmail}:UserProfileProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const InfoField = (titleName: string, data: string) => {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ color: '#929497', fontSize: '.6rem' }}>{titleName}</Typography>
          {/* <Typography sx={{ color: theme.palette.readOnly.main, fontSize: '.6rem' }}>{titleName}</Typography> */}
          <Typography
            sx={{
              color: '#000',
              // color: theme.palette.fonpm rmBgColor.contrastText,
              fontSize: '.9rem',
              width: '100%',
              wordBreak: 'break-all',
            }}
          >
            {data}
          </Typography>
        </Box>
      </>
    );
  };
  
  return (
    <>
      <Card>
        <CardContent>
          {!isMobile && (
            <Box maxWidth={345} display='flex' marginRight='2rem' alignItems='center'>
              <PersonIcon sx={{ fontSize: 80, color: 'primary.main' }} />
            </Box>
          )}

          <Stack flexDirection='column'>
            {/* <Box marginBottom='.5rem'>{InfoField('User Name', 'user name')}</Box> */}
            <Box marginBottom='.5rem'>{InfoField('Group', username || 'N/A')}</Box>
            {/* <Box>{InfoField('Email', 'user name')}</Box> */}
            <Box>{InfoField('Email', userEmail || 'N/A')}</Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default UserProfile;
