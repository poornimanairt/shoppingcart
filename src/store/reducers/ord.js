const initialState = {
    cart: [],
    count: 0,
};

const ord = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CART":
            return {
                ...state,
                cart: action.cart,
                count: action.count,
            };
        default: // need this for default case
            return state;
    }
};

export default ord;
