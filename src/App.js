import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";
import logo from "./assets/img/laptop-wave.png";

function App() {
  return (
    <div className="App">
      <Helmet>
          <title>Sai Cett</title>
          <link rel="icon" type="image/jpg" href={logo}/>
        </Helmet>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
