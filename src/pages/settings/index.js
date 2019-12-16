import React from 'react';
import {
	Page,
} from 'react-onsenui';

function Settings({
	navigator,
}) {
	return (
		<Page
			onInit={() => console.log("Settings onInit")}
			onShow={() => console.log("Settings onShow")}
			onHide={() => console.log("Settings onHide")}
		>
			<h1>Settings</h1>
		</Page>
	);
}

export default Settings;
