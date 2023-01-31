import Menu from "./Components/Menu";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="fondo">
        <div className="portada">
          <h1 className="name">Gisela Arroyo Galarce</h1>
          <p className="titlePortada">
            Full Stack Developer <strong>&</strong> Lic. en Relaciones Públicas
          </p>
        </div>
        <Menu />
      </div>
      <About />
    </>
  );
}

export default App;
