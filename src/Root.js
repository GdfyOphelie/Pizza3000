import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';

import NotFound from './components/pages/NotFound';
import Order from './components/pages/Order';

const Root = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path="/Order" element={<Order/>} />
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</Router>
	);
};

export default Root;
