import React from 'react';
import {
	Navigator
} from 'react-onsenui';

import PageCatalog from './pages/page-catalog';

import Main from './pages/main';

function App() {
	function renderPage(route, navigator) {
		return (
			<route.component
				key={route.key}
				navigator={navigator}
			/>
		);
	}

	return (
		<Navigator
			renderPage={renderPage}
			initialRoute={{
				component: Main,
				key: PageCatalog.MAIN,
			}}
		/>
	);
}

export default App;
