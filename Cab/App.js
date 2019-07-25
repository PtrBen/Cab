import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Accueil from './containers/accueil';
import Register from './containers/register';
import Login from './containers/login';

export default function App() {
	return (
		<Router>
			<Stack key="main">
				<Scene key="accueil" path="/" component={Accueil} title="Accueil" />
				<Scene key="register" path="/register" component={Register} title="Register" />
				<Scene key="login" path="/login" component={Login} title="Login" />
			</Stack>
		</Router>
	);
}
