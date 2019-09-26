import React from 'react';
import {
	Page,
	Toolbar,
	ToolbarButton,
	Icon,
	Button,
} from 'react-onsenui';
import OnsenUi from 'onsenui';

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

				<div className="right">
					<ToolbarButton onClick={_handleClickWallets}>
						<Icon icon="fa-wallet" />
					</ToolbarButton>
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
