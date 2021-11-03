import React from 'react';
import {
	Page,
	Button,
} from 'react-onsenui';
import Lottie from 'react-lottie';

import PageCatalog from '../page-catalog';
import Main from '../main';

import HomeLootieAnimation from '../../img/tabs-lootie/home-lootie.json';
import HomeSelectedLootieAnimation from '../../img/tabs-lootie/home-selected-lootie.json';
import GameLootieAnimation from '../../img/tabs-lootie/games-lootie.json';
import GameSelectedLootieAnimation from '../../img/tabs-lootie/games-selected-lootie.json';
import StarLootieAnimation from '../../img/tabs-lootie/star-lootie.json';
import StarSelectedLootieAnimation from '../../img/tabs-lootie/star-selected-lootie.json';

function Login({
	navigator,
}) {
	function _handleClickLogin() {
		navigator.popPage({
			animation: 'none',
		});

		navigator.pushPage(
			{
				component: Main,
				key: PageCatalog.MAIN,
			},
			{
				animation: 'none',
			}
		);
	}

	return (
		<Page>
			<h1>Login</h1>

			<Button
				modifier='material large'
				ripple
				onClick={_handleClickLogin}
			>
				登入
			</Button>

			<br />
			<br />
			<br />

			<Lottie
				options={{
					loop: false,
					autoplay: true,
					animationData: HomeLootieAnimation,
				}}
				width={300}
				height={300}
			/>
		</Page>
	);
}

export default Login;
