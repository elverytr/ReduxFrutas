import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { ActionAgregarFruta } from "../actions/ActionFrutas";
import uuid from "react-uuid";
import ValidarAction from "../actions/FormAction";

const ModalAgregar = () => {
  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    precio: "",
    foto: "",
  });

  const { nombre, precio, foto } = formValues;

  const dispatch = useDispatch();

  const AgregarFruta = (fruta) => {
    dispatch(ActionAgregarFruta(fruta));
  };

  const validarFormulario = (estado) => {
    dispatch(ValidarAction(estado));
  };

  const error = useSelector((state) => state.error);

  //console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Limpar campos
    reset();
    //Validar campo
    if (nombre.trim() === "" || precio.trim() === "" || foto.trim() === "") {
      validarFormulario(true);
      return;
    }

    validarFormulario(false);

    AgregarFruta({
      id: uuid(),
      nombre,
      precio,
      foto,
    });
  };

  return (
    <>
      <button
        type="button align-middle"
        className="btn btn-success fs-5 col-12"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Agregar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="staticBackdropLabel">
                Agregar Otra Fruta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {/* Recibe el nombre de la fruta */}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Fruta
                  </span>
                  <input
                    name="nombre"
                    type="text"
                    className="form-control"
                    placeholder="ejemplo: Papaya"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={nombre}
                    onChange={handleInputChange}
                  />
                </div>

                {/** Recibe el precio de la fruta */}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Precio
                  </span>
                  <input
                    name="precio"
                    type="text"
                    className="form-control"
                    placeholder="$$$"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={precio}
                    onChange={handleInputChange}
                  />
                </div>

                {/**Recibe el enlace de la foto de la fruta */}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Foto
                  </span>
                  <input
                    name="foto"
                    type="text"
                    className="form-control"
                    placeholder="https://pixabay.com/fotos/papaya.png"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={foto}
                    onChange={handleInputChange}
                  />
                </div>

                {error.error ? (
                  <div className="alert alert-danger text-center p2 col-12">
                    Todos los campos son obligatorios
                  </div>
                ) : null}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Volver
                </button>
                <button type="submit" className="btn btn-success">
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAgregar;
