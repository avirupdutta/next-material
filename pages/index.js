import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppButton from '../src/components/common/AppButton';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';

const useStyles = makeStyles(theme => ({
	text: {
		color: theme.palette.primary.main
	}
}))

export default function Index() {
	const classes = useStyles()
	return (
		<Container maxWidth="sm">
			<Box>
				<Typography className={classes.text} variant="h4" component="h1" gutterBottom>
					Next.js example
				</Typography>
				<br />
				<br />
				<Link href="/login" color="secondary">
					<AppButton>Login Page</AppButton>
				</Link>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}