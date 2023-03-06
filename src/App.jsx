import "./App.css";
import Crud_API from "./crud/Crud_API";
import Custom from "./hooks/customHooks/Custom";
import Crud_1 from "./crud/Crud_1";
import SongSearch from "./songs/SongSearch";
import SelectsAnidados from "./selectAnidados/SelectsAnidados";
import ContactForm from "./components/formularios/forms_mircha/ContactForm";
import Modal from "./components/Portals/Modal";
import Modals from "./components/Portals/Modals";
import AppRouting from "./components/Routing/AppRouting";
import CrudRouting from "./CrudRouting/CrudRouting";
function App() {
  return (
    <div className="App">
      <h3>Los apuntes de Gabo</h3>
      <p>React js</p>
      {/* <Crud_1/> */}
      {/* <Crud_API /> */}
      {/* <SongSearch/> */}
      {/* <SelectsAnidados/> */}
      {/* <ContactForm/> */}
      {/* <Modals/> */}
      {/* <AppRouting/> */}
      <CrudRouting/>
      {/* <Custom/> */}
    </div>
  );
}

export default App;
