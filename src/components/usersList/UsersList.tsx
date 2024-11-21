import {useMediaQuery, useTheme } from '@mui/material';

export interface UsersListProps{}

const UserProfile = ({}:UsersListProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <>
      
    </>
  );
};

export default UserProfile;
