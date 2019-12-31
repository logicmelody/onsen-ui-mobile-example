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
				tab: _renderTab(
					TabIndexEnum.HOME,
					<img
						src={HomeIcon}
						alt='home'
						width={40}
						height={40}
					/>
					,
					<img
						src={HomeIconSelected}
						alt='home-selected'
						width={40}
						height={40}
					/>
				),
			},
			{
				content: (
					<KaiJiang
						navigator={navigator}
					/>
				),
				tab: _renderTab(
					TabIndexEnum.KAI_JIANG,
					<img
						src={KaiJiangIcon}
						alt='kai-jiang'
						width={40}
						height={40}
					/>
					,
					<img
						src={KaiJiangIconSelected}
						alt='kai-jiang-selected'
						width={40}
						height={40}
					/>
				),
			},
			{
				content: (
					<Atm
						navigator={navigator}
					/>
				),
				tab: _renderTab(
					TabIndexEnum.ATM,
					<img
						src={AtmIcon}
						alt='atm'
						width={40}
						height={40}
					/>
					,
					<img
						src={AtmIconSelected}
						alt='atm-selected'
						width={40}
						height={40}
					/>
				),
			},
			{
				content: (
					<Settings
						navigator={navigator}
					/>
				),
				tab: _renderTab(
					TabIndexEnum.SETTINGS,
					<img
						src={SettingsIcon}
						alt='settings'
						width={40}
						height={40}
					/>
					,
					<img
						src={SettingsIconSelected}
						alt='settings-selected'
						width={40}
						height={40}
					/>
				),
			},
		];
	}

	function _renderTab(where = TabIndexEnum.HOME, normalContent, selectedcontent) {
		return (
			<Tab>
				{where === tabIndex ? selectedcontent : normalContent}
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
