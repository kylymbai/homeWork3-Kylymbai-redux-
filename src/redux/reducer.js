
const initialState = {
    num: 0
}


export function reducer (state = initialState, action) {
    
   
    if(action.type === 'MINUS' && state.num > 0) {
        return {num: state.num - 1}
    }
    else if(action.type === 'PLUS') {
        return {num: state.num + 1}
    }
    

    return state
}