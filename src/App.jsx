import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/MyNav";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav homepage="Home" aboutus="About" browser="Browse" />
      <Welcome
        Brand="Book-Space"
        Slogan="Dream with Reading."
        Message="Alcuni dicono che la tecnologia ha ormai eclissato il mondo dei libri cartacei, noi pensiamo che questa credenza sia errata e che la magia scaturita dalla lettura di un libro e dal suo profumo sia insuperabile. Proprio per questo motivo abbiamo deciso di realizzare questa libreria, in modo che la gente riscopra il piacere di leggere e sognare."
      />
      <hr />
      <AllTheBooks />

      <footer>
        <MyFooter
          Copyright="&copy;Book-Space, Via dello sconforto, Roma."
          Social="Follow us on: Instagram, Facebook & Twitter"
          ChiSiamo="Vendiamo magia e cultura dal 1890!"
        />
      </footer>
    </div>
  );
}

export default App;
