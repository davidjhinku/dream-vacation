import { RECEIVE_A_TRIP } from '../actions/trip_actions';
import {
    ADD_USER,
    REMOVE_USER
} from '../actions/users_actions';

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_A_TRIP:
            // debugger
            const _newState = {}; // All previous users need to be deleted.
            Object.values(action.trip.data)[0].users
                .forEach(user => { _newState[user._id] = user });
            return _newState;
        case ADD_USER:
            // debugger
            return action.user.data
        case REMOVE_USER:
            delete newState[action.userId]
            return newState
        default:
            return state;
    }
}

export default UsersReducer