import React from 'react';
import {
	Page,
	Button,
} from 'react-onsenui';

import PageCatalog from '../../page-catalog';

import BankSelection from '../bank-selection';

function Deposit({
	navigator,
}) {
	function _handleClickButton() {
		navigator.pushPage(
			{
				component: BankSelection,
				key: PageCatalog.ATM_BANK_SELECTION,
			}
		);
	}

	return (
		<Page>
			<h1>Deposit</h1>

			<Button
				modifier='material large'
				ripple
				onClick={_handleClickButton}
			>
				請選擇充值方式
			</Button>
		</Page>
	);
}

export default Deposit;
