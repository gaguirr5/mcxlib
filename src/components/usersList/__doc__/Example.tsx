import { Box } from '@mui/material'
import UsersList, { UsersListProps } from '../UsersList'

const Example = () =>{
    return (
        <Box sx={{display:'flex', width:'100%'}}>
            <UsersList/>
        </Box>
    )
}

export default Example