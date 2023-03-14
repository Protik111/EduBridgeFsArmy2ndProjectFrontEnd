import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/material';
import { ButtonComp } from '../ui/Button';
import Link from 'next/Link';
import { useRouter } from 'next/router';

const drawerWidth = 240;
// const navItems = ['Peer Education', 'Group Discussion', 'Community', 'Contact'];
const navItems = [
    {
        id: 1,
        title: 'Peer Education',
        slug: 'peer-education'
    },
    {
        id: 1,
        title: 'Group Discussion',
        slug: 'group-discussion'
    },
    {
        id: 1,
        title: 'Community',
        slug: 'community'
    },
    {
        id: 1,
        title: 'Contact',
        slug: 'Contact'
    },
];

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const router = useRouter();

    console.log('router', router);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Box sx={{ flexGrow: 1, color: '#413434', display: { xs: 'none', sm: 'block' } }}>

                <img src="logo.svg" slt="logo"></img>
            </Box>

            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item?.id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item?.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <AppBar position="fixed" sx={{ p: 1, background: '#FFFFFF', boxShadow: '1px 635px 254px rgba(0, 0, 0, 0.01), 1px 357px 214px rgba(0, 0, 0, 0.05), 0px 159px 159px rgba(0, 0, 0, 0.09), 0px 40px 87px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)' }}>
                <Container>
                    <Toolbar>
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, color: '#413434', display: { xs: 'none', sm: 'block' } }}>

                            <Link href='/'>
                                <img src="logo.svg" slt="logo"></img>
                            </Link>
                        </Box>

                        <Box direction="row" sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link href={`${item?.slug}`}>
                                    <Typography variant='body1' key={item?.id} sx={{ mx: 2, color: '#413434', display: 'inline-block', cursor: 'pointer' }}>
                                        {item?.title}
                                    </Typography>
                                </Link>
                            ))}
                            <ButtonComp myWidth='110px'>Sign In</ButtonComp>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;