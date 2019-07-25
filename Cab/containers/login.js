import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const style_login = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	},
	text: {
		color: 'red',
		fontSize: 30
	}
});

export default class Login extends Component {
	render() {
		return (
			<View style={[ style_login.container ]}>
				<Text style={[ style_login.text ]}>Login</Text>
			</View>
		);
	}
}
