import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
	

	state = { loggedIn: false };


	componentWillMount() {
		firebase.initializeApp(
				{
					apiKey: "AIzaSyAyr9CVgW0hd_99mHs9YWMRQYs4-YUPJOE",
				        authDomain: "authentication-fac35.firebaseapp.com",
					databaseURL: "https://authentication-fac35.firebaseio.com",
					projectId: "authentication-fac35",
				    	storageBucket: "authentication-fac35.appspot.com",
					messagingSenderId: "1010077946052"
									  
				}
		);



		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}


	renderContent() {

		switch (this.state.loggedIn) {
			case true:
				return (
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
				       );
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="small"/>
		}	
	}


	render() {
		return (
				<View>
					<Header headerText="Wynn Auth" />
					{this.renderContent()}
				</View>
		       )
	}
}





export default App;
