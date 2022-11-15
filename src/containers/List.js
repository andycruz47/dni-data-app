import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const API = process.env.API;

const List = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    firstName: "",
    lastName: "",
    error: "",
  });

  const getperson = async () => {
    // search
    const res = await fetch(`${API}s`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: [],
        loading: false,
        error: "",
      });
    }
  };

  useEffect(() => {
    getperson();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.firstName === "" || state.lastName === "") {
    return setState({ ...state, error: "Please write a valid text" });
    }
    
    const response = await fetch(`${API}/firstname/${state.firstName}/lastname/${state.lastName}`);
    const dataJson = await response.json();
    const person = JSON.parse(dataJson.contents)

    if (person.message==='person not found'){
      return setState({ ...state, error: "There are no results." });   
    }else{
      return setState({
        data: [person],
        firstName: "",
        lastName: "",
        error: "",
      });
    }
  
  };

  const { data, loading } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Nombres"
              onChange={(e) => setState({...state, firstName: e.target.value })}
              value={state.firstName}
              autoFocus
            />
          </form>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos"
              onChange={(e) => setState({...state, lastName: e.target.value })}
              value={state.lastName}
              />
          </form>
          <p className="text-white">{state.error ? state.error : ""}</p>
        </div>
      </div>
      <div className="row justify-content-center">
      
        {data.map((person, id) => (
          <Card person={person} key={id} />
        ))}
      </div>
    </>
    
  );
};

export default List;
