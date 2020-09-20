import React, { Component } from 'react';

/* Barra de navegação superior */

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<div className='brand-logo'>
								Curriculum Vitae
							</div>

						</div>
					</div>
				</nav>
	
			</>
		);
	}
}
