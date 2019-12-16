import React from 'react';
import {
	Page,
} from 'react-onsenui';

function KaiJiang({
	navigator,
}) {
	return (
		<Page
			onInit={() => console.log("KaiJiang onInit")}
			onShow={() => console.log("KaiJiang onShow")}
			onHide={() => console.log("KaiJiang onHide")}
		>
			<h1>KaiJiang</h1>
		</Page>
	);
}

export default KaiJiang;
