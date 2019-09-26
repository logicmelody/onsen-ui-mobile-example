import React from 'react';
import {
	Page,
	BackButton,
	Toolbar,
} from 'react-onsenui';

function BankSelection({
	navigator,
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
			<h1>BankSelection</h1>
		</Page>
	);
}

export default BankSelection;
