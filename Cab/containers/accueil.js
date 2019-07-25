import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

const style_accueil = StyleSheet.create({
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

export default class Accueil extends Component {
	render() {
		return (
			<View style={[ style_accueil.container ]}>
				<Text style={[ style_accueil.text ]}>Accueil</Text>
			</View>
		);
	}
}
