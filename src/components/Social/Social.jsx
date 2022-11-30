import React from 'react';
import './social.scss';
import linkedin from '../../assets/img/linkedinicon.svg';
import instagram from '../../assets/img/instagramicon.svg';
import github from '../../assets/img/github.svg';

const LINKS = [{
	href: 'https://github.com/maksimsolokha',
	img: github,
},
{
	href: 'https://www.linkedin.com/in/maksim-solokha-270933254/',
	img: linkedin,
},
{
	href: 'https://www.instagram.com/solokha.m_/',
	img: instagram,
}];

function Social() {
	return (
		<div className="social">
			<ul className="social__list">
				{LINKS.map((link) => (
					<li key={link.href} className="social__list__item">
						<a href={link.href} target="_blank" rel="noreferrer">
							<img src={link.img} alt="" />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Social;
