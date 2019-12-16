import React from 'react';
import {
	Page,
	Button,
} from 'react-onsenui';

import PageCatalog from '../page-catalog';

import OddsTable from './odds-table';

function KaiJiang({
	navigator,
}) {
	function _handleClickOddsTable() {
		navigator.pushPage(
			{
				component: OddsTable,
				key: PageCatalog.KAI_JIANG_ODDS_TABLE,
				passProps: {
					lottery: {
						id: 1,
						name: '時時彩',
					},
				},
			},
		);
	}

	return (
		<Page
			onInit={() => console.log("KaiJiang onInit")}
			onShow={() => console.log("KaiJiang onShow")}
			onHide={() => console.log("KaiJiang onHide")}
		>
			<h1>KaiJiang</h1>

			<Button
				modifier='material large'
				ripple
				onClick={_handleClickOddsTable}
			>
				賠率表
			</Button>
		</Page>
	);
}

export default KaiJiang;
