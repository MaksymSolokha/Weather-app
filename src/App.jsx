import React from 'react';
import './app.scss';
import Search from './components/Search/Search';
import Social from './components/Social/Social';

function App() {
	return (
		<div className="weather">
			<div className="weather-block">
				<Search />
				<Social />
			</div>
		</div>
	);
}

export default App;
