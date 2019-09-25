import React from 'react';
import {
	Page,
	Toolbar,
	BackButton,
} from 'react-onsenui';

function BetTable(props) {
	console.log('BetTable', props);

	function _renderToolbar() {
		return (
			<Toolbar>
				<div className='left'>
					<BackButton>
						Back
					</BackButton>
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
			Bet Table
		</Page>
	);
}

export default BetTable;
