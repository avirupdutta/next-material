import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import { authenticateDispatcher } from '../src/redux/dispatchers/authDispatchers';
import { getAllUsers } from '../src/services/authService';

export default function About() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(authenticateDispatcher({
            user: 'Avirup Dutta',
            token: 'Token_sdfertfhrfghvsdfvd.sdf343fsdvsvsdasdasdghfgufghuasdrqwer',
            refreshtoken: 'Refresh_token_4e56tfdgdfgsddf43h'
        }))
    }

    const handleLogout = () => {
        dispatch(authenticateDispatcher({
            user: null,
            token: null,
            refreshtoken: null
        }))
    }

    const fetchUsers = () => {
        getAllUsers().then(data => {
            console.log('users data', data)
        }).catch(error => {
            console.log(error, 'error')
        })
    }

    useEffect(() => {
        if (auth.token) {
            fetchUsers()
        }
    }, [auth])

    return (
        <Container maxWidth="sm">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example - {auth.user ?? 'Anonymous'}
                </Typography>

                <Button onClick={auth.token ? handleLogout : handleLogin} variant="contained" color="primary">
                    {auth.token ? 'Logout' : 'Login'}
                </Button>
                <br />
                <br />
                <br />
                <Button onClick={fetchUsers} variant="contained" color="primary">
                    fetch users
                </Button>
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" component={Link} naked href="/">
                    Go to the main page
                </Button>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}