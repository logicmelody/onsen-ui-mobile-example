import React from 'react';
import {
	Page,
	Toolbar,
	ToolbarButton,
} from 'react-onsenui';

function BetTable({
	navigator,
	balance,
}) {
	function _renderToolbar() {
		return (
			<Toolbar>
				<div className='left'>
					<ToolbarButton onClick={() => navigator.popPage()}>
							關閉
					</ToolbarButton>
				</div>

				<div className="center">
					Bet Table
				</div>
			</Toolbar>
		);
	}

	return (
		<Page
			renderToolbar={_renderToolbar}
		>
			<h1>
				{`Wallet balance = ${balance}`}
			</h1>
		</Page>
	);
}

export default BetTable;
