export const counterReducer = (state = { amount: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT': 
        return { ...state, amount: state.amount + action.payload };
        break;
    case 'DECREMENT':
        return { ...state, amount: state.amount - action.payload };
        break;
    default:
        return state;
    };
}