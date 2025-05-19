export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUE_CHNANGED',
        dados: e.target.value
    }
}