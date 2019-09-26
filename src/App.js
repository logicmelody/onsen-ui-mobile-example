import React from 'react';
import {
	Navigator
} from 'react-onsenui';

import PageCatalog from './pages/page-catalog';

import Main from './pages/main';

function App() {
	function _renderPage(route, navigator) {
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
				component: Main,
				key: PageCatalog.MAIN,
			}}
			animation='lift-md'
		/>
	);
}

export default App;
