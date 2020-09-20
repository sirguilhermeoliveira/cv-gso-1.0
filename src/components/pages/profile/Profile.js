import React from 'react';
import ImgProfile from '../../../images/guilherme.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
			{/* 	Elementos de img precisam ter um alt */}
					<img className='activator' src={ImgProfile} alt='Guilherme Oliveira' />
				</div>
				<div className='card-content'>
					<span className='card-title grey-text text-darken-4'>
						Guilherme
					</span>
					<p>Desenvolvedor FrontEnd</p>
				</div>
			</div>
		</div>
	);
}
