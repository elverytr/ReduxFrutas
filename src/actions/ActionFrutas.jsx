import { types } from "../types/type";

export const ActionAgregarFruta = (fruta) => {
  return {
    type: types.agregar,
    payload: fruta,
  };
};

export const BorrarFruta = (id) => {
  return {
    types: types.borrar,
    payload: id,
  };
};
