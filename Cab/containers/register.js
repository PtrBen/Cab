import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const style_register = StyleSheet.create({
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

export default class Register extends Component {
	render() {
		return (
			<View style={[ style_register.container ]}>
				<Text style={[ style_register.text ]}>Register</Text>
			</View>
		);
	}
}
