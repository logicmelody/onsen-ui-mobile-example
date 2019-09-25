import React from 'react';
import {
	Page,
	Toolbar,
	ToolbarButton,
	Icon,
} from 'react-onsenui';
import OnsenUi from 'onsenui';

function Home({
	navigator,
}) {
	function _renderToolbar() {
		return (
			<Toolbar>
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

	return (
		<Page
			renderToolbar={_renderToolbar}
		>
		</Page>
	);
}

export default Home;
