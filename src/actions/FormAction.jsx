import {types} from '../types/type'

const ValidarAction = (estado) => {
    return {
        type: types.validar,
        payload: estado
    }
}
export default ValidarAction
