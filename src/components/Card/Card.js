import React from "react";
import PropTypes from "prop-types";

const Card = ({ person }) => (
  <div className="col-md-6">
    <div className="card animated fadeInUp">
      <img
        src={person.foto}
        alt={person.nombres}
        className="card-img-top"
        width="100"
      />
      <div className="card-body">
        <h2>{`${person.dni}-${person.digVerif}`}</h2>
        <p>{`Nombres: ${person.nombres}`}</p>
        <p>{`Apellidos: ${person.apellidos}`}</p>
        <p>{`Fecha Nacimiento: ${person.fechNac}`}</p>
        <p>{`Facebook: ${person.fb}`}</p>
        <p>{`Sexo: ${person.csexo}`}</p>
        <p>{`Direccion: ${person.direccion}`}</p>
        <p>{`Distrito: ${person.cdistrito}`}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  person: PropTypes.shape({
    dni: PropTypes.string,
    digVerif: PropTypes.string,
    nombres: PropTypes.string,
    apellidos: PropTypes.string,
    fechNac: PropTypes.string,
    fb: PropTypes.string,
    csexo: PropTypes.string,
    direccion: PropTypes.string,
    cdistrito: PropTypes.string,
    foto: PropTypes.string,
  }).isRequired,
};

export default Card;
