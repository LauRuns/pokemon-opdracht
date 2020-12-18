import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../pages';

export const Routes = () => {
	return (
		<Switch>
			<Route path="/home" exact component={LandingPage} />
		</Switch>
	);
};
