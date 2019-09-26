import React from 'react';
import {
	Page,
	Navigator,
} from 'react-onsenui';

import PageCatalog from '../page-catalog';

import Deposit from './deposit';

function Atm({
	navigator,
}) {
	function _renderPage(route, innerNavigator) {
		return (
			<route.component
				key={route.key}
				navigator={innerNavigator}
				{...route.passProps}
			/>
		);
	}

	return (
		<Page>
			<Navigator
				renderPage={_renderPage}
				initialRoute={{
					component: Deposit,
					key: PageCatalog.ATM_DEPOSIT,
				}}
			/>
		</Page>
	);
}

export default Atm;
