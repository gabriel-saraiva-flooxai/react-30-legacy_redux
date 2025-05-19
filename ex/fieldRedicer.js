const INITIAL_STATE = { value: 'Valor Inicial' }

export default function fieldReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.dados }
        default:
            return state
    }
}