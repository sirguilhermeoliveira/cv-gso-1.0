import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>Sobre</strong>
          </h6>
          <p className="grey-text">
            Olá, sou Guilherme.
            Faço faculdade de Análise e Desenvolvimento de Sistemas, fiz vários cursos dentro da área de programação FrontEnd e também curso de inglês avançado.
            Os cursos me deram uma base de conhecimento sobre JS, HTML, CSS, React, Angular, Vue, Banco de dados relacional e não relacional, jQUERY, Bootstrap, Gulp, Webpack, node, express, dentre outros.
            Meu foco atualmente é o FrontEnd(com ênfase em JS/HTML/CSS/React).
            Todos os meus projetos estão dentro do meu GitHub(github.com/sirguilhermeoliveira).
            Expandir minhas competências, aprimorar minhas habilidades enquanto busco novas linguagens e tecnologias é a minha meta.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>Informações</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Email:</strong> sirguilhermeoliveira@gmail.com
              </p>
              <p>
                <a href="https://www.github.com/sirguilhermeoliveira"><strong>GitHub</strong></a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/guilherme-oliveira-27080910b/"> <strong>LinkedIn</strong></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
