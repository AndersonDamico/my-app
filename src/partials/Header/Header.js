import {
AppBar,
 Toolbar, 
Typography,
Button, 
IconButton, 
MenuIcon 
} from '@material-ui/icons/Menu'


import MenuIcon from '@material-ui/icons/menu'
import useStyle from './Header.style'


const Header = () => {
    const classes = useStyles()

    return (
   
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
 }
 
 export default Header
