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
          <Typography sx={{ color: theme.palette.readOnlyText.main, fontSize: '.6rem' }}>{titleName}</Typography>
          <Typography
            sx={{
              color: theme.palette.pageBackground.contrastText,
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
      <Card sx={{width:'100%'}}>
        <CardContent>
          <Stack flexDirection='row'>
          {!isMobile && (
            <Box maxWidth={345} display='flex' marginRight='2rem' alignItems='center'>
              <PersonIcon sx={{ fontSize: 80, color: 'primary.main' }} data-testid='PersonIcon'/>
            </Box>
          )}

          <Stack flexDirection='column'>
            <Box marginBottom='.5rem'>{InfoField('Group', username || 'N/A')}</Box>
            <Box>{InfoField('Email', userEmail || 'N/A')}</Box>
          </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default UserProfile;
