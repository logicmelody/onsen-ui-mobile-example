import React, { useState } from 'react';
import {
	Page,
	Tabbar,
	Tab
} from 'react-onsenui';

import Home from '../home';
import KaiJiang from '../kai-jiang';
import Atm from '../atm';
import Settings from '../settings';

import HomeIcon from '../../img/tabs/home.png';
import HomeIconSelected from '../../img/tabs/home-selected.png';

const TabIndexEnum = {
	HOME: 0,
	KAI_JIANG: 1,
	ATM: 2,
	SETTINGS: 3,
};

function Main({
	navigator,
}) {
	const [tabIndex, setTabIndex] = useState(TabIndexEnum.HOME);

	function _renderTabs() {
		return [
			{
				content: (
					<Home
						navigator={navigator}
					/>
				),
				tab: _renderHomeTab(),
			},
			{
				content: (
					<KaiJiang
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						label='開獎'
						icon="fa-file"
					/>
				),
			},
			{
				content: (
					<Atm
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						label='充提款'
						icon="fa-car"
					/>
				),
			},
			{
				content: (
					<Settings
						navigator={navigator}
					/>
				),
				tab: (
					<Tab
						label='我的'
						icon="md-face"
					/>
				),
			},
		];
	}

	function _renderHomeTab() {
		const icon = TabIndexEnum.HOME === tabIndex ? HomeIconSelected : HomeIcon;

		return (
			<Tab>
				<img
					src={icon}
					alt="home-tab"
					width={40}
					height={40}
				/>
			</Tab>
		);
	}

	return (
		<Page>
			<Tabbar
				position='bottom'
				animation='none'
				index={tabIndex}
				renderTabs={_renderTabs}
				onPreChange={({ index }) => {
					if (index !== tabIndex) {
						setTabIndex(index)
					}
				}}
			/>
		</Page>
	);
}

export default Main;
