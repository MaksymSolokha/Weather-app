import React, { useState } from 'react';
import axios from 'axios';
import './search.scss';
import search from '../../assets/img/search.svg';
import WeatherCard from '../WeatherCard/WeatherCard';
import Loading from '../Loading/Loading';

function Search() {
	const [location, setLocation] = useState('Ґ');
	const [data, setData] = useState({});
	const [isLoading, setIsloading] = useState(false);
	const [isError, setIsError] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=20e48164ba2d3c013d422df5297f3530
	`;
	const getlocation = () => {
		setIsloading(true);
		axios.get(url).catch((error) => {
			if (error.response) {
				setIsloading(false);
				setIsError(true);
				setData({});
			}
		}).then((response) => {
			setData(response.data);
			setIsloading(true);
			setIsError(false);
			setLocation('');
			setIsloading(false);
		});
	};

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			getlocation();
			setIsError(false);
			setData({});
		}
	};

	return (
		<div className="search">
			<div className="search__form" action="">
				<input
					className="search__form__input"
					type="search"
					placeholder="Search city"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					onKeyDown={searchLocation}
				/>
				<button
					className="search__form__button"
					type="button"
					onClick={getlocation}
				>
					<img src={search} alt="search" />
				</button>
			</div>
			{isError ? (
				<div style={{ display: 'block' }} className="search__error">
					The city name was
					{' '}
					<br />
					{' '}
					entered incorrectly
				</div>
			) : <div style={{ display: 'none' }} />}

			{isLoading ? <Loading /> : <WeatherCard error={isError} data={data} />}

		</div>
	);
}

export default Search;
