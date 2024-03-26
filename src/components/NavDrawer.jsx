import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import Appbar from './Appbar'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 250

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
)

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

const MyListItemButton = ({
  selected,
  icon,
  text,
  handleNavbarItemClicked,
}) => {
  return (
    <ListItemButton
      onClick={() => handleNavbarItemClicked(text)}
      sx={{
        ...(selected && {
          background: '#F9F7C9',
          borderRadius: 2,
          fontWeight: 'bold',
          color: '#76453B',
        }),
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

export default function NavDrawer({ item }) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const navigate = useNavigate()

  const [selectedItem, setSelectedItem] = React.useState('')

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleNavbarItemClicked = (item) => {
    setSelectedItem(item)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {open && (
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ color: '#76453B' }}
            >
              Sayur Mayur
            </Typography>
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding onClick={() => navigate('/admin/dashboard')}>
            <MyListItemButton
              text={'Dashboard'}
              icon={<DashboardIcon sx={{ color: '#76453B' }} />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('Dashboard')}
            />
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/admin/product')}>
            <MyListItemButton
              text={'Product'}
              icon={<CategoryIcon sx={{ color: '#76453B' }} />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('Product')}
            />
          </ListItem>

          <ListItem disablePadding onClick={() => navigate('/admin/customer')}>
            <MyListItemButton
              text={'Customer'}
              icon={<AccountBoxIcon sx={{ color: '#76453B' }} />}
              handleNavbarItemClicked={handleNavbarItemClicked}
              selected={selectedItem.includes('Customer')}
            />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  )
}
