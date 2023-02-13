import React from "react";
import "../assets/styles/about.css";
import foto from "../assets/images/gisela.gif";

const About = () => {
  return (
    <div id="aboutMe">
      <div className="about">
        <div>
          <img src={foto} alt="yo" />
        </div>
        <div className="textAboutMe">
          ¡Hola!👋
          <br />
          Soy Gisela, Desarrolladora Web Full Stack.
          <br />
          <br />
          <div className="destacado">
            Me gusta crear aplicaciones fáciles de usar, pensando en la
            experiencia del usuario y que se destaquen por su diseño
            minimalista, sin dejar de lado la funcionalidad.
          </div>
          <br />
          Comencé a estudiar programación, de forma autónoma, por curiosidad; y
          luego realicé un coding bootcamp en Plataforma 5, de más de 800 horas
          de cursada, donde adquirí muchas habilidades técnicas. Realicé
          proyectos individuales, en pair programing y también en grupo,
          utilizando la metodología Scrum.
          <br />
          <br />
          Además, soy Licenciada en Relaciones Públicas, y trabajé en
          comunicación y marketing digital, lo que fortaleció mis habilidades
          blandas. También tengo experiencia trabajando en equipo, liderando
          grupos de trabajo y trabajando por objetivos. Considero a la
          comunicación efectiva como una herramienta fundamental para trabajar
          en grupo.
        </div>
      </div>
      <div className="techDiv">
        <ul className="ulAbout">
          <li className="liAbout">
            <i class="devicon-css3-plain"></i>
            <span>CSS3</span>
          </li>
          <li className="liAbout">
            <i class="devicon-html5-plain"></i>
            <span>HTML5</span>
          </li>
          <li className="liAbout">
            <i class="devicon-javascript-plain"></i>
            <span>Javascript</span>
          </li>
          <li className="liAbout">
            <i class="devicon-nodejs-plain"></i>
            <span>NodeJS</span>
          </li>
          <li className="liAbout">
            <i class="devicon-postgresql-plain"></i>
            <span>PostgreSQL</span>
          </li>
          <li className="liAbout">
            <i class="devicon-express-original"></i>
            <span>ExpressJS</span>
          </li>
          <li className="liAbout">
            <i class="devicon-sequelize-plain"></i>
            <span>Sequelize</span>
          </li>
          <li className="liAbout">
            <i class="devicon-react-plain"></i>
            <span>React</span>
          </li>
          <li className="liAbout">
            <i class="devicon-redux-plain"></i>
            <span>Redux</span>
          </li>
          <li className="liAbout">
            <i class="devicon-bootstrap-plain"></i>
            <span>Bootstrap</span>
          </li>
          <li className="liAbout">
            <i class="devicon-git-plain"></i>
            <span>Git</span>
          </li>
          <li className="liAbout">
            <i class="devicon-github-plain"></i>
            <span>GitHub</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
