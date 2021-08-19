import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import { authenticateDispatcher } from '../src/redux/dispatchers/authDispatchers';
import { getAllUsers } from '../src/services/authService';

export async function getStaticProps(context) {
    const users = await getAllUsers()

    return {
        props: {
            users,
            revalidate: 10,
        }
    }
}

export default function Login({ users }) {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    console.log('users', users)

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

    const handleFetchUsers = () => {
        getAllUsers().then(data => {
            console.log(data)
        })
    }

    return (
        <Container maxWidth="sm">
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example - {auth.user ?? 'Anonymous'}
                </Typography>

                <Button onClick={auth.token ? handleLogout : handleLogin} variant="contained" color="primary">
                    {auth.token ? 'Logout' : 'Login'}
                </Button>
                <br />
                <br />
                <br />

                <Button onClick={handleFetchUsers} variant="contained" color="primary">
                    fetch users
                </Button>
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" component={Link} naked href="/posts">
                    See All Posts
                </Button>
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" component={Link} naked href="/">
                    Go to the main page
                </Button>
                <br />
                <br />
                <br />
                <Button variant="contained" color="primary" component={Link} naked href="/swr">
                    Go to swr
                </Button>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}