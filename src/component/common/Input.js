import React from 'react';
import { Text, View, TextInput } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {


	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
			        onChangeText={onChangeText}
				value={value}	
				autoCapitalize='none'
				style={inputStyle}
				autoCorrect={false}
				placeholder={placeholder}
			/>
		</View>
	);
};


const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		paddingLeft: 20,
		flex: 1,
		fontSize: 18,
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	}
}


export { Input };
