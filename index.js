import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Player from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard';

const store = createStore(
	Player,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<Scoreboard />
	</Provider>,
	document.getElementById('root')
);