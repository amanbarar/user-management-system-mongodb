import { AppBar , Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #585159
`

const Tabs = styled(NavLink)`
    font-size: 18px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`

const NavBar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/all'>Display Users</Tabs>
                <Tabs to='add'>Add Users</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;