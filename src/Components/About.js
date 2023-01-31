import React from "react";
import "../assets/styles/about.css";
import foto from "../assets/images/gisela.gif";

const About = () => {
  return (
    <div className="about" id="aboutMe">
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
          experiencia del usuario y que se destaquen por su diseño minimalista.
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
          Considero a la comunicación asertiva como una herramienta fundamental
          para todos los ámbitos de la vida.
        </div>
      </div>
    </div>
  );
};

export default About;
