import React from "react";
import "../assets/styles/project.css";

const Projects = () => {
  return (
    <div className="fondoProjects">
      <h1 className="titleProjects">Mis proyectos</h1>
      <div className="divprojects">
        <article className="artProjects">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/dlkbb7VR8xY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="infoProjects">
            <a
              className="aProjects"
              href="https://github.com/giselaArroyo/TMDB"
              target="blank"
            >
              The Movie Database <i class="devicon-github-original"></i>
            </a>
            <p className="pInfo">
              Es una aplicación web que brinda información detallada sobre
              películas y series. Permite crear tu propio usuario y agregar a
              favoritos las pelis que más te gusten. También posee un buscador
              donde se puede buscar por título, actor o palabra clave.
            </p>

            <ul className="ulProjects">
              <li className="liProjects">
                <i class="devicon-nodejs-plain icon"></i>
                <span>NodeJS</span>
              </li>
              <li className="liProjects">
                <i class="devicon-express-original icon"></i>
                <span>ExpressJS</span>
              </li>
              <li className="liProjects">
                <i class="devicon-react-original icon"></i>
                <span>React</span>
              </li>
              <li className="liProjects">
                <i class="devicon-redux-original icon"></i>
                <span>Redux</span>
              </li>
              <li className="liProjects">
                <i class="devicon-postgresql-plain icon"></i>
                <span>PostgreSQL</span>
              </li>
              <li className="liProjects">
                <i class="devicon-sequelize-plain icon"></i>
                <span>Sequelize</span>
              </li>
              <li className="liProjects">
                <i class="devicon-bulma-plain icon"></i>
                <span>Bulma</span>
              </li>
            </ul>
          </div>
        </article>
        <article className="artProjects">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/dlkbb7VR8xY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="infoProjects">
            <h4 className="titleInfo">The Movie Database</h4>
            <p className="pInfo">
              Es una aplicación web que brinda información detallada sobre
              películas y series. Permite crear tu propio usuario y agregar a
              favoritos las pelis que más te gusten. También posee un buscador
              donde se puede buscar por título, actor o palabra clave.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
