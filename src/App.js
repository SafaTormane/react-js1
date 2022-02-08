import "./App.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <div style={{ maxWidth: "100vw" }}>
        <h1 className="title red">Votre nom ici</h1>

        <br />

        <img src="/imageInSrc.jpg" />

        <br />

        <img src="/imageInPublic.jpg" />
      </div>

      <commandes vidéo width="320" height="240" />

      <source src="maVideo.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
