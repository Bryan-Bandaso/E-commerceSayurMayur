import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const drawerWidth = 250

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 25,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 10,
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#76453B',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#76453B',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('smm')]: {
      width: '20ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}))

export default function Appbar({ open, handleDrawerOpen }) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      open={open}
      sx={{ backgroundColor: '#F9F7C9' }}
    >
      <Toolbar>
        <IconButton
          color="#76453B"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        {!open && (
          <Typography
            overflow="visible"
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#76453B' }}
          >
            Sayur Mayur
          </Typography>
        )}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  )
}
