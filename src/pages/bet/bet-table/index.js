import React from 'react';
import {
	Page,
	Toolbar,
	ToolbarButton,
	Button,
} from 'react-onsenui';

import PageCatalog from '../../page-catalog';

import XinYong from '../xin-yong';

function BetTable({
	navigator,
	innerNavigator,
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

	function _handleClickXinYongButton() {
		innerNavigator.pushPage(
			{
				component: XinYong,
				key: PageCatalog.XIN_YONG,
				passProps: {
					balance: 100,
				}
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
				onClick={_handleClickXinYongButton}
			>
				信用玩法
			</Button>
		</Page>
	);
}

export default BetTable;
