export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function stepChanged(e) {
    return {
        type: 'STEP_CHANGED',
        dados: e.target.value
    }
}