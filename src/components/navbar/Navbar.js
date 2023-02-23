import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets';
const Navbar = () => {
    return (
        <Stack
            direction='row'
            justifyContent='space-around'
            sx={{ gap: { sm: '120px', xs: '30px' }, mt: { sm: '120px', xs: '40px' }, justifyContent: 'none' }}
            paddingX={20}
        >
            <Link to='/'>
                <img src={Logo} alt='logo' style={{ width: '50px', height: '50px',margin:"0 20px" }} />
            </Link>
            <Stack direction='row' gap='40px' fontSize='25px' alignItems='flex-end'>
                <Link to='/'
                    style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}
                >Home</Link>
                <a href='#exercise'
                    style={{ textDecoration: 'none', color: '#3A1212' }}
                >Exercise</a>
            </Stack>
        </Stack>

    )
}

export default Navbar;