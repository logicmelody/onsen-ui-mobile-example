import React from 'react';
import {
	Page,
	Toolbar,
	ToolbarButton,
	Icon,
	Button,
} from 'react-onsenui';
import OnsenUi from 'onsenui';

import HomeIcon from '../../img/tabs/home.png';
import './styles.css';

import PageCatalog from '../page-catalog';

import Bet from '../bet';

function Home({
	navigator,
}) {
	function _renderToolbar() {
		return (
			<Toolbar>
				<div className="left">
					華語娛樂
				</div>

				<div className="center">
					Home
				</div>

				<div className="right right-toolbar-button-container">
					<img
						onClick={_handleClickWallets}
						src={HomeIcon}
						alt={"toolbar-button"}
						width={30}
						height={30}
					/>
				</div>
			</Toolbar>
		);
	}

	function _handleClickWallets() {
		OnsenUi.notification.alert('Click wallets');
	}

	function _handleClickBetTableButton() {
		navigator.pushPage(
			{
				component: Bet,
				key: PageCatalog.BET,
			},
			{
				animation: 'lift-md',
			}
		);
	}

	return (
		<Page
			renderToolbar={_renderToolbar}
			onInit={() => console.log("Home onInit")}
			onShow={() => console.log("Home onShow")}
			onHide={() => console.log("Home onHide")}
		>
			<Button
				modifier='material large'
				ripple
				onClick={_handleClickBetTableButton}
			>
				Bet Table
			</Button>
		</Page>
	);
}

export default Home;
