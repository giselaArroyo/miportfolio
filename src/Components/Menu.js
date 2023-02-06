import React from "react";

const Menu = () => {
  return (
    <div className="divNavbar">
      <nav>
        <div className="navItems">
          <a href="#aboutMe">Sobre mi</a>
          <a href="#projectId">Proyectos</a>
          <a href="#contactId">Contacto</a>
          <a
            href="https://drive.google.com/file/d/1Kgiiii1SuaqMhfRqMGduDKsLWMK3n_BU/view"
            target="blanck"
            tittle="CV"
          >
            Ver CV
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
