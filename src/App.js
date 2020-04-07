import React from 'react';
import {
	Navigator
} from 'react-onsenui';

import PageCatalog from './pages/page-catalog';

import Main from './pages/main';
import Login from './pages/login';

function App() {
	function _renderPage(route, navigator) {
		console.log('route object = ', route);

		return (
			<route.component
				key={route.key}
				navigator={navigator}
				{...route.passProps}
			/>
		);
	}

	return (
		<Navigator
			renderPage={_renderPage}
			initialRoute={{
				component: Login,
				key: PageCatalog.Login,
			}}
		/>
	);
}

export default App;
