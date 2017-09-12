import React from 'react';
import { Text, View, TextInput } from 'react-native';


const Input = ({ label, value, onChangeText }) => {
	return (
		<View>
			<Text>{label}</Text>
			<TextInput
			        onChangeText={onChangeText}
				value={value}	
				style={{ height: 20, width: 100 }}
			/>
		</View>
	);
};


export { Input };
