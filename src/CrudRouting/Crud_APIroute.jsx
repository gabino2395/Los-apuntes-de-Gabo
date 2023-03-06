import { useState, useEffect } from "react";
import { helpHttp } from "../crud/helpers/helpHttp";
// import CrudForm from "../crud/components/CrudForm";
// import CrudTable from "../crud/components/CrudTable";
import Loader from "../crud/components/Loader/Loader";
import Message from "../crud/components/Message/Message";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import CrudForm from "./CrudFormRout";
import CrudTable from "./CrudTableRoute";
//levantar server: json-server --watch src/crud/api/db.json
const Crud_API = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:3000/players";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <HashRouter>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            home
          </NavLink>
          <NavLink
            to="/Agregar"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Agregar
          </NavLink>

          <NavLink
            to="/no-existe"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Error 404
          </NavLink>
        </nav>
        <article className="grid-1-2">
          <Routes>
            <Route
              exact
              path="/"
              element={
                loading ? (
                  <Loader />
                ) : db ? (
                  <CrudTable
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                  />
                ) : (
                  <Message
                    msg={`Error ${error.status}: ${error.statusText}`}
                    bgColor={"#dc3545"}
                  />
                )
              }
            />

            <Route
              exact
              path="/agregar"
              element={
                <CrudForm
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />

            <Route exact path="/editar/:id" element={ <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />}/>
             

            {/* <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            /> */}
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default Crud_API;
