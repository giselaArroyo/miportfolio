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
          Soy Gisela, Desarrolladora Web Full Stack y Licenciada en Relaciones
          Públicas.
          <br />
          <br />
          <div className="destacado">
            Me gusta crear aplicaciones fáciles de usar, orientadas a la
            experiencia del usuario y que se destaquen por su diseño
            minimalista.
          </div>
          <br />
          Comencé a estudiar programación, de forma autónoma, por curiosidad; y
          encontré una profesión que me encantó porque me permite ser creativa.
          <br />
          Realicé un coding bootcamp en Plataforma 5, de más de 800 horas de
          cursada, donde adquirí muchas hábilidades técnicas. Trabajé haciendo
          pair programing y realicé proyectos en grupo utilizando la metodología
          Scrum.
          <br />
          <br />
          Además, trabajé más de 10 años en comunicación, eventos y marketing
          digital. Tengo experiencia trabajando en equipo, liderando grupos de
          trabajo y en el cumplimiento de objetivos.
          <br />
          <br />
          <div className="destacado">
            Considero a la comunicación asertiva como una herramienta
            fundamental para todos los ámbitos de la vida.
          </div>
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
