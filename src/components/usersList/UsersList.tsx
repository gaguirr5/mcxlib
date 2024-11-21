import {useMediaQuery, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export interface UsersListProps{
  listData:{
    name:string;
    group:string;
    email:string;
    active:boolean;
    roles:string[];
  }[],
}

const UserProfile = ({listData}:UsersListProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Roles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((item, index)=>(
              <TableRow key={index}>
                <TableCell>{item.name} {item.email}</TableCell>
                <TableCell>{item.roles.join(',')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserProfile;
