export const obtenerStateStorage = () => {
    const frutasStorage = localStorage.getItem("frutas")
    if(frutasStorage === null){
        return undefined
    }
    return JSON.parse(frutasStorage)
}

export const guardarStateStorage = state => {
    const frutasState = JSON.stringify(state)
    localStorage.setItem("frutas",frutasState)
}