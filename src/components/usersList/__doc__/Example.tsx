import { Box } from '@mui/material'
import UsersList, { UsersListProps } from '../UsersList'

const Example = ({listData}:UsersListProps) =>{
    return (
        <Box sx={{display:'flex', width:'100%'}}>
            <UsersList listData={listData}/>
        </Box>
    )
}

export default Example