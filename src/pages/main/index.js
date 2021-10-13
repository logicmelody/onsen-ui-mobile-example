import React, { useState } from 'react';
import {
	Page,
	Tabbar,
	Tab
} from 'react-onsenui';
import Lottie from 'react-lottie';

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

import HomeLootieAnimation from '../../img/tabs-lootie/home-lootie.json';
import HomeSelectedLootieAnimation from '../../img/tabs-lootie/home-selected-lootie.json';
import GameLootieAnimation from '../../img/tabs-lootie/games-lootie.json';
import GameSelectedLootieAnimation from '../../img/tabs-lootie/games-selected-lootie.json';
import MoneyLootieAnimation from '../../img/tabs-lootie/money-lootie.json';
import MoneySelectedLootieAnimation from '../../img/tabs-lootie/money-selected-lootie.json';
import StarLootieAnimation from '../../img/tabs-lootie/star-lootie.json';
import StarSelectedLootieAnimation from '../../img/tabs-lootie/star-selected-lootie.json';

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
				tab: _renderLottieTab(TabIndexEnum.HOME, HomeLootieAnimation, HomeSelectedLootieAnimation),
			},
			{
				content: (
					<KaiJiang
						navigator={navigator}
					/>
				),
				tab: _renderLottieTab(TabIndexEnum.KAI_JIANG, GameLootieAnimation, GameSelectedLootieAnimation),
			},
			{
				content: (
					<Atm
						navigator={navigator}
					/>
				),
				tab: _renderLottieTab(TabIndexEnum.ATM, MoneyLootieAnimation, MoneySelectedLootieAnimation),
			},
			{
				content: (
					<Settings
						navigator={navigator}
					/>
				),
				tab: _renderLottieTab(TabIndexEnum.SETTINGS, StarLootieAnimation, StarSelectedLootieAnimation),
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

	function _renderLottieTab(where = TabIndexEnum.HOME, normalAnimation, selectedAnimation) {
		return (
			<Tab>
				<Lottie
					options={{
						loop: false,
						autoplay: true,
						animationData: where === tabIndex ? selectedAnimation : normalAnimation,
						rendererSettings: {
							preserveAspectRatio: 'xMidYMid slice',
						},
					}}
					width={30}
					height={30}
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
