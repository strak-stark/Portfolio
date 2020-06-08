import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Main from './components/Main'
import FaceIcon from '@material-ui/icons/Face'; // About
import SettingsIcon from '@material-ui/icons/Settings'; // Skills
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';  // Projects
// Contact (mailicon)
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser'; // DL resume
import Switch from '@material-ui/core/Switch';
import { Link, animateScroll as scroll } from "react-scroll";
import Grid from '@material-ui/core/Grid';
import { TradContext } from './contexts/TradContext';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1,
        fontSize:'25px'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
}));

function App(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [checkedLng, setCheckedLng] = React.useState(false)
    const [actualLang, setActualLang] = React.useState('ENG')

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleChange = (event) => {
        setCheckedLng(event.target.checked)
        event.target.checked
            ? setActualLang('FR')
            : setActualLang('ENG')
    };
    const drawerData = [
        [actualLang === "ENG" ? 'About' : 'A propos', <FaceIcon />, 'hero'],
        [actualLang === "ENG" ? 'Skills' : 'Compétences', <SettingsIcon />, 'skills'],
        [actualLang === "ENG" ? 'Projects' : 'Projets', <EmojiObjectsIcon />, 'projects'],
        [actualLang === "ENG" ? 'Contact me' : 'Me contacter', <MailIcon />, 'contact'],
    ]
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {
                    drawerData.map(text => (
                        <Link
                            activeClass="active"
                            to={text[2]}
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={100}
                            key={text[0]}>
                            <ListItem button >
                                <ListItemIcon>{text[1]}</ListItemIcon>
                                <ListItemText primary={text[0]} />
                            </ListItem>
                        </Link>
                    ))}
                <ListItem button key="Open resume">
                    <ListItemIcon><OpenInBrowserIcon /></ListItemIcon>
                    <ListItemText primary={actualLang === "ENG" ? 'Open resume' : 'Voir CV'} />
                </ListItem>

                <ListItem key="SwitchLang">
                    <Typography component="div">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>
                                {/* <img style={flagStyles} src={ukIcon} width={flagSize} height={flagSize}></img> */}
                                ENG
                            </Grid>
                            <Grid item>
                                <Switch
                                    checked={checkedLng}
                                    onChange={handleChange}
                                    name="checkedLng"
                                    color="primary"
                                />
                            </Grid>
                            <Grid item>
                                {/* <img style={flagStyles} src={frIcon} width={flagSize} height={flagSize}></img> */}
                                FR
                            </Grid>
                        </Grid>
                    </Typography>

                </ListItem>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.title} variant="h1" noWrap>
                        Aurélien NEZZAR
          </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor='right'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <TradContext.Provider value={actualLang}>
                    <Main />
                </TradContext.Provider>
            </main>
        </div>
    )
}

export default App;