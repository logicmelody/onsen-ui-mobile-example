import React from 'react';
import {
	Page,
	Tabbar,
	Tab
} from 'react-onsenui';

import PageCatalog from '../page-catalog';

import Home from '../home';
import KaiJiang from '../kai-jiang';
import Atm from '../atm';
import Settings from '../settings';

function Main({
	navigator,
}) {
	function _renderTabs() {
		return [
			{
				content: (
					<Home
						key={PageCatalog.HOME}
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						key={PageCatalog.HOME}
						label='首頁'
						icon="ion-home"
					/>
				),
			},
			{
				content: (
					<KaiJiang
						key={PageCatalog.KAI_JIANG}
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						key={PageCatalog.KAI_JIANG}
						label='開獎'
						icon="ion-home"
					/>
				),
			},
			{
				content: (
					<Atm
						key={PageCatalog.ATM}
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						key={PageCatalog.ATM}
						label='充提款'
						icon="ion-home"
					/>
				),
			},
			{
				content: (
					<Settings
						key={PageCatalog.SETTINGS}
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						key={PageCatalog.SETTINGS}
						label='我的'
						icon="ion-home"
					/>
				),
			},
		];
	}

	return (
		<Page>
			<Tabbar
				position='bottom'
				renderTabs={_renderTabs}
				animation='none'
			/>
		</Page>
	);
}

export default Main;
