import React, { useEffect, useState, } from 'react';
import {
	Page,
	Toolbar,
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
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count === 5) {
			generateMobileUrlHandler('https://www.nba.com/').open();
		}

	}, [count]);

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

			<Button
				modifier='material large'
				ripple
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Add Count
			</Button>
		</Page>
	);
}

function generateMobileUrlHandler(url) {
	let windowReference = window.open('about:blank', '_blank');

	return {
		open: function() {
			windowReference.location = url;
		},

		// open: function() {
		// 	setTimeout(() => {
		// 		windowReference.location = url;

		// 	}, 500);
		// },
	};
}

export default Home;
