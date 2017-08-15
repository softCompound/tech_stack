import { SELECT_LIBRARY } from '../actions';

/**
 * For the case when all the reducers run for the first time
 * instead of returning an undefined state by the default case, we 
 * use an ES6 syntax to allocate a null value for the state to avoid
 * unwanted behaviour from this program.
 */
export default (state = null, action) => {
    switch (action.type) {
        case SELECT_LIBRARY:
            console.log(action);
            return action.payload;

        default:
            return state;
    }
};
