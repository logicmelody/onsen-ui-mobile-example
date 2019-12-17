import React from 'react';
import {
	Page,
	Tabbar,
	Tab
} from 'react-onsenui';

import Home from '../home';
import KaiJiang from '../kai-jiang';
import Atm from '../atm';
import Settings from '../settings';

import Icon from "../../img/play-icon.png";

function Main({
	navigator,
}) {
	function _renderTabs() {
		return [
			{
				content: (
					<Home
						navigator={navigator}
					/>
				),
				tab: (
					<Tab>
						<img
							src={Icon}
							alt="Icon"
							width={40}
							height={40}
						/>
					</Tab>
				),
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
