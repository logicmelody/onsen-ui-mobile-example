import React from 'react';
import {
	Page,
	Button,
} from 'react-onsenui';

import PageCatalog from '../page-catalog';

import Main from '../main';

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
		</Page>
	);
}

export default Login;
