import React from 'react';
import {
	Page,
	Navigator,
	Toolbar,
	ToolbarButton,
} from 'react-onsenui';

import PageCatalog from '../page-catalog';

import BetTable from './bet-table';

function Bet({
	navigator,
}) {
	function _renderPage(route, innerNavigator) {
		return (
			<route.component
				key={route.key}
				navigator={navigator}
				innerNavigator={innerNavigator}
				{...route.passProps}
			/>
		);
	}

	return (
		<Page>
			<Navigator
				renderPage={_renderPage}
				initialRoute={{
					component: BetTable,
					key: PageCatalog.BET_TABLE,
				}}
			/>
		</Page>
	);
}

export default Bet;
