export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA';
export const UPDATE_CART_DATA = 'UPDATE_CART_DATA';

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_APPLICATION_DATA:
            return {
                ...state,
                users: action.users,
                //superheros: action.superheros,
                comixs: action.comixs,
                carts: action.carts,
                loading: false,
            };
        default:
            return state;
        case UPDATE_CART_DATA:
            return {
                ...state,
                carts: [...state.carts, action.carts],
                loading: false,
            };
    }
};

export default dataReducer;