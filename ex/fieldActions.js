export function changeValue(e) {
    return {
        type: 'VALUE_CHANGED',
        dados: e.target.value
    }
}