import React from 'react'
import NavDrawer from '../../components/NavDrawer'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="h4">Welcome to Dashboard</Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt.
        </Typography>
      </Box>
    </Box>
  )
}
