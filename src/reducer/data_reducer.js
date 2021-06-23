export const SET_APPLICATION_DATA = 'SET_APPLICATION_DATA'

const dataReducer = (state, action) => {
    switch (action.type) {
        case SET_APPLICATION_DATA:
            return {
                ...state,
                tests: action.tests,
                loading: false,
            };
    }
};

export default dataReducer;
