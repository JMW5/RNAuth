import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/Login';

class App extends Component {
	
	componentWillMount() {
		firebase.initalizeApp(
				{
					apiKey: "AIzaSyAyr9CVgW0hd_99mHs9YWMRQYs4-YUPJOE",
				        authDomain: "authentication-fac35.firebaseapp.com",
					databaseURL: "https://authentication-fac35.firebaseio.com",
					projectId: "authentication-fac35",
				    	storageBucket: "authentication-fac35.appspot.com",
					messagingSenderId: "1010077946052"
									  
				}
		);
	}


	render() {
		return (
				<View>
					<Header headerText="Wynn Auth" />
					<LoginForm />
				</View>
		       )
	}
}





export default App;
