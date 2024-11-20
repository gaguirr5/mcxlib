import { Box } from '@mui/material'
import UserProfile, { UserProfileProps } from '../UserProfile'

const Example = ({username, userEmail}:UserProfileProps) =>{
    return (
        <Box sx={{display:'flex', width:'100%'}}>
            <UserProfile username={username} userEmail={userEmail}/>
        </Box>
    )
}

export default Example