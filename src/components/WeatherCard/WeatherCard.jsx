import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './weathercard.scss';
import cloud from '../../assets/img/Clouds.svg';
import sunny from '../../assets/img/sunny.svg';

function WeatherCard({ data }) {
	return (
		<div className="weather__card">
			{data.name ? (
				<h2 className="weather__card__city">
					Weather in
					{' '}
					{data.name || <Skeleton count={1} />}
				</h2>
			) : ' '}
			{data.main ? (
				<h1 className="weather__card__degrees">
					{Math.round(data.main.temp - 273.15)}
					{' '}
					°C
				</h1>
			) : null}
			<div className="weather__card__info">
				{data.weather ? (
					<span className="weather__card__info-cloudiness">
						<img src={data.weather[0].main === 'Clouds' ? cloud : sunny} alt="" />
						{' '}
						{data.weather[0].main}
					</span>
				) : null}
				{data.main ? (
					<span className="weather__card__info-humidity">
						Humidity:
						{' '}
						{data.main.humidity}
						%
					</span>
				) : null}
				{data.wind ? (
					<span className="weather__card__info-wind">
						Wind speed:
						{' '}
						{Math.round(data.wind.speed * 3.6)}
						{' '}
						km/hr
					</span>
				) : null}
			</div>
		</div>
	);
}

export default WeatherCard;
