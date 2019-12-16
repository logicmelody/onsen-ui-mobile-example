import React from 'react';
import {
	Page,
	Toolbar,
	BackButton,
} from 'react-onsenui';

function OddsTable({
	navigator,
	lottery,
}) {
	function _renderToolbar() {
		return (
			<Toolbar>
				<div className='left'>
					<BackButton>
						關閉
					</BackButton>
				</div>

				<div className="center">
					賠率表
				</div>
			</Toolbar>
		);
	}

	return (
		<Page renderToolbar={_renderToolbar}>
			<h2>{`這是 ${lottery.name} 的賠率表`}</h2>
		</Page>
	);
}

export default OddsTable;
