import React from 'react';
import {
	Page,
	Toolbar,
	BackButton,
} from 'react-onsenui';

function XinYong({
	navigator,
	balance,
}) {
	function _renderToolbar() {
		return (
			<Toolbar>
				<div className='left'>
					<BackButton>
							關閉
					</BackButton>
				</div>

				<div className='center'>
					選擇充值方式
				</div>
			</Toolbar>
		);
	}

	return (
		<Page renderToolbar={_renderToolbar}>
			<h1>XinYong</h1>
			<h2>{`Wallet balance = ${balance}`}</h2>
		</Page>
	);
}

export default XinYong;
