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

import KaiJiangIcon from '../../img/tabs/kai-jiang.png';
import KaiJiangIconSelected from '../../img/tabs/kai-jiang-selected.png';

import AtmIcon from '../../img/tabs/atm.png';
import AtmIconSelected from '../../img/tabs/atm-selected.png';

import SettingsIcon from '../../img/tabs/settings.png';
import SettingsIconSelected from '../../img/tabs/settings-selected.png';

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
				tab: _renderTab(TabIndexEnum.HOME, HomeIcon, HomeIconSelected),
			},
			{
				content: (
					<KaiJiang
						navigator={navigator}
					/>
				),
				tab: _renderTab(TabIndexEnum.KAI_JIANG, KaiJiangIcon, KaiJiangIconSelected),
			},
			{
				content: (
					<Atm
						navigator={navigator}
					/>
				),
				tab: _renderTab(TabIndexEnum.ATM, AtmIcon, AtmIconSelected),
			},
			{
				content: (
					<Settings
						navigator={navigator}
					/>
				),
				tab: _renderTab(TabIndexEnum.SETTINGS, SettingsIcon, SettingsIconSelected),
			},
		];
	}

	function _renderTab(where = TabIndexEnum.HOME, normalIcon, selectedIcon) {
		const icon = where === tabIndex ? selectedIcon : normalIcon;

		return (
			<Tab>
				<img
					src={icon}
					alt={where}
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
