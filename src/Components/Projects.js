import React from "react";
import "../assets/styles/project.css";

const Projects = () => {
  return (
    <div className="backProjects" id="projectId">
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
              Aplicación web que brinda información detallada sobre películas y
              series. Permite crear tu propio usuario y agregar a favoritos las
              pelis que más te gusten. También posee un buscador donde se puede
              buscar por título, actor o palabra clave.
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
            src="https://www.youtube.com/embed/hqjMQI_awyY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="infoProjects">
            <a
              className="aProjects"
              href="https://github.com/giselaArroyo/netglobal"
              target="blank"
            >
              Net Security <i class="devicon-github-original"></i>
            </a>
            <p className="pInfo">
              App para administrar el personal de seguridad en diferentes
              sucursales, se pueden asignar turnos con una distancia máxima de
              50 km entre la casa del vigilador y la sucursal, posee mapa e
              informes de horas trabajadas. En una segunda app mobile el
              empleado puede fichar horario de ingreso y salida con
              geolocalización.
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
                <i class="devicon-bootstrap-plain icon"></i>
                <span>Bootstrap</span>
              </li>
              <li className="liProjects">
                <span>Nominatim</span>
              </li>
              <li className="liProjects">
                <span>Open Street Map</span>
              </li>
              <li className="liProjects">
                <i class="devicon-react-original icon"></i>
                <span>React Native</span>
              </li>
            </ul>
          </div>
        </article>
        <article className="artProjects">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/pASrcS-iets"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div className="infoProjects">
            <a
              className="aProjects"
              href="https://github.com/giselaArroyo?tab=repositories&q=lio&type=&language=&sort="
              target="blank"
            >
              Al Lio <i class="devicon-github-original"></i>
            </a>
            <p className="pInfo">
              Tienda e-commerce de venta de ropa. Permite crear un usuario,
              buscar productos, ver detalle de productos, agregar al carrito y
              realizar checkout.
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
                <i class="devicon-materialui-plain icon"></i>
                <span>Material UI</span>
              </li>
              <li className="liProjects">
                <i class="devicon-css3-plain icon"></i>
                <span>CSS3</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
