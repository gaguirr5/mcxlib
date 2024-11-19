import { Box } from '@mui/material'
// import React from 'react'
import UserProfile, { UserProfileProps } from '../UserProfile'

const Example = ({username, userEmail}:UserProfileProps) =>{
    return (
        <Box sx={{display:'flex'}}>
            <UserProfile username={username} userEmail={userEmail}/>
        </Box>
    )
}

export default Example