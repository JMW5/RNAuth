import React, ( Component ) from 'react';
import { View } from 'react';
import { Button, Card, CardSection } from './common';


class LoginForm extends Component {
	render() {
		return (
				<Card>
					<CardSection />
					<CardSection />

					<CardSection>
						<Button>
							LOG IN
						</Button>
					</CardSection>	
				</Card>
		       )
	}
}




export default LoginForm;
