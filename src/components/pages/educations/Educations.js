import React from 'react';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>Educação</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Formação</th>
								<th>Data</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Wyden - Análise e Desenvolvimento de Sistemas</td>
								<td>Julho 2020 até Dezembro 2022</td>
							</tr>
							<div className="progress grey lighten-1">
								<div
									className="determinate blue"
									style={{ width: '20%' }}
								></div>
							</div>
						</tbody>
						<tbody>
							<tr>
								<td>Cod3r - Curso Web Moderno</td>
								<td>Agosto 2020</td>
							</tr>
						</tbody>
						<div className="progress grey lighten-1">
							<div
								className="determinate blue"
								style={{ width: '100%' }}
							></div>
						</div>
						<tbody>
							<tr>
								<td>FAETEC - Inglês</td>
								<td>Dezembro 2014</td>
							</tr>
							<div className="progress grey lighten-1">
								<div
									className="determinate blue"
									style={{ width: '100%' }}
								></div>
							</div>
							<tr>
								<td>Fundação Bradesco - Pacote Office</td>
								<td>Fevereiro 2013</td>
							</tr>
							<div className="progress grey lighten-1">
								<div
									className="determinate blue"
									style={{ width: '100%' }}
								></div>
							</div>
							<tbody>
							</tbody>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
