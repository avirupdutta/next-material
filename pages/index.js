import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AppButton from '../src/components/common/AppButton';
import Copyright from '../src/Copyright';
import Link from '../src/Link';
import ProTip from '../src/ProTip';

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
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