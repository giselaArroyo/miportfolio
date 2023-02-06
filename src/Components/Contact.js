import React from "react";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <div id="contactId">
      <div className="divContact">
        <h2>¿Querés saber más sobre mi?</h2>

        <div className="botonsContact">
          <a
            href="https://drive.google.com/file/d/1Kgiiii1SuaqMhfRqMGduDKsLWMK3n_BU/view"
            target="blanck"
            tittle="CV"
          >
            <i class="bi bi-file-earmark-arrow-down-fill"></i> Descargá mi CV
          </a>
          <a
            href="https://github.com/giselaArroyo"
            target="blanck"
            tittle="Github"
          >
            <i class="bi bi-github"></i> Mirá mi GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/giselaa/"
            target="blanck"
            tittle="Linkedin"
          >
            <i class="bi bi-linkedin"></i> Visitá mi linkedin
          </a>
        </div>
        <h2>¿Querés contactarme?</h2>
        <a
          href="mailto:arroyo.galarce@gmail.com"
          target="blanck"
          className="boton"
        >
          <i class="bi bi-envelope-at-fill"></i> Enviame un mail
        </a>
      </div>
      <div className="divFooter">
        <p>© 2023 | Desarrollado por Gisela Arroyo Galarce</p>
      </div>
    </div>
  );
};

export default Contact;
