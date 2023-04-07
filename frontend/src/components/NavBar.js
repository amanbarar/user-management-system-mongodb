import { AppBar , Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
    background: #585159
`

const Tabs = styled('div')`
    font-size: 18px;
    margin-right: 120px;
`

const NavBar = () => {
    return(
        <Header>
            <Toolbar>
                <Tabs>User Management System</Tabs>
                <Tabs>Add Users</Tabs>
                <Tabs>Add Users</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;