import {
  // useMediaQuery,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Stack,
  Typography,
  Box,
  Avatar,
  TablePagination,
  TableFooter,
  Menu,
  MenuItem,
} from '@mui/material';
import { BlockIcon, MoreHorzIcon, PersonIcon } from '../../icons';
import { useState } from 'react';

export interface UsersListProps {
  listData: {
    name: string;
    group: string;
    email: string;
    active: boolean;
    roles: string[];
  }[];
}

const UserProfile = ({ listData }: UsersListProps) => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleAnchorEl = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const TableBodySX = {
    '& .MuiTableRow-root:first-of-type td': {
      borderTop: '1px solid', // Apply border only to the top edge
      borderColor: 'divider', // Match the default theme divider color
    },
    '& .MuiTableRow-root:first-of-type td:first-child': {
      borderTopLeftRadius: '10px', // Top-left corner rounding
    },
    '& .MuiTableRow-root:first-of-type td:last-child': {
      borderTopRightRadius: '10px', // Top-right corner rounding
    },
    '& .MuiTableRow-root:last-of-type td': {
      borderBottom: '1px solid', // Apply border only to the bottom edge
      borderColor: 'divider',
    },
    '& .MuiTableRow-root:last-of-type td:first-child': {
      borderBottomLeftRadius: '10px', // Bottom-left corner rounding
    },
    '& .MuiTableRow-root:last-of-type td:last-child': {
      borderBottomRightRadius: '10px', // Bottom-right corner rounding
    },
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const userComponent = (name: string, group: string, email: string, active: boolean) => {
    return (
      <Stack flexDirection='row' alignItems='stretch' padding={1}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            // margin:'0 .5rem',
            marginRight: '.5rem',
          }}
        >
          <>
            <Avatar
              sx={{
                background: 'linear-gradient(90deg, rgba(0,136,186,1) 0%, rgba(50,0,186,1) 100%)',
                fontSize: '2rem',
              }}
            >
              <PersonIcon />
            </Avatar>
          </>
        </Box>

        <Stack
          flexDirection='column'
          spacing={0.1} // Minimized space between text rows
          // justifyContent='center'
          justifyContent='space-between'
          sx={{ lineHeight: 0.5 }}
        >
          <Stack flexDirection='row' alignItems='center'>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 'bold',
                fontSize: '0.8rem',
                marginBottom: 0,
                marginRight: '.1rem',
              }}
            >
              {name}
            </Typography>
            {!active && <BlockIcon sx={{ fontSize: '.8rem', color: theme.palette.error.main }} />}
          </Stack>

          <Typography
            variant='body2'
            sx={{
              fontSize: '0.7rem',
              marginBottom: 0,
              fontStyle: 'italic',
            }}
          >
            {email}
          </Typography>
          <Typography
            variant='caption'
            sx={{
              fontSize: '0.7rem',
            }}
          >
            {group}
          </Typography>
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: '1rem',
          overflowX: 'auto',
          backgroundColor: theme.palette.gridBackground.main,
          color: theme.palette.gridBackground.contrastText,
        }}
      >
        <Table sx={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
          <TableHead sx={{ backgroundColor: theme.palette.gridHead.main, '& th': { borderBottom: 'none' } }}>
            <TableRow>
              <TableCell sx={{ fontSize: '.7rem', padding: '.5rem' }}>User</TableCell>
              <TableCell sx={{ fontSize: '.7rem', padding: '.5rem' }}>Roles</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={TableBodySX}>
            {listData.map((item, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.04)',
                  },
                }}
              >
                <TableCell sx={{ padding: 0, verticalAlign: 'top' }}>
                  {userComponent(item.name, item.group, item.email, item.active)}
                </TableCell>
                <TableCell sx={{ fontSize: '.8rem' }}>{item.roles.join(',')}</TableCell>
                <TableCell sx={{ padding: 0, width: '1px' }}>
                  <IconButton
                    id='basic-button'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleAnchorEl}
                  >
                    <MoreHorzIcon sx={{ bgcolor: theme.palette.formBackground.light, borderRadius: '.5rem' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[100, 200, 500, { label: 'All', value: -1 }]}
                count={listData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseAnchor}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        slotProps={{
          paper: {
            sx: { borderRadius: '.5rem' },
          },
        }}
      >
        <MenuItem>View Profile</MenuItem>
        <MenuItem sx={{ color: theme.palette.error.main }}>Deactivate User</MenuItem>
        <MenuItem sx={{ color: theme.palette.error.main }}>Delete User</MenuItem>
      </Menu>
    </>
  );
};

export default UserProfile;
