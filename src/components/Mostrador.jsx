import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalAgregar from "./ModalAgregar";
import {BorrarFruta} from "../actions/ActionFrutas"

const Mostrador = () => {
  const productos = useSelector((state) => state.frutas);

  const dispatch = useDispatch();

  console.log(productos);

  return (
    <div className="container-fluid">
      <table className="table">
        <thead className="bg-secondary text-light text-center align-middle">
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col"><ModalAgregar/></th>
          </tr>
        </thead>
        <tbody className="fs-5">

        {productos.frutas.map((fruta) => (
          <tr key={fruta.id} className="bg-info text-light fw-bold">
            <td className="col-2">
              <img
                className="col-12"
                src={fruta.foto}
              />
            </td>
            <td className="col-4 align-middle text-center">{fruta.nombre}</td>
            <td className="col-3 align-middle text-center">{fruta.precio}</td>
            <td className="col-1 align-middle text-center">
              <button
                type="button align-middle"
                className="btn btn-danger fs-5"
                onClick={()=> dispatch(BorrarFruta(fruta.id))}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mostrador;
