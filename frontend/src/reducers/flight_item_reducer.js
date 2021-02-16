import {
    RECEIVE_ALL_FLIGHT_ITINERARY_ITEMS,
    RECEIVE_FLIGHT_ITINERARY_ITEM,
    RECEIVE_NEW_FLIGHT_ITINERARY_ITEM,
    REMOVE_ITEM
} from '../actions/flight_itinerary_item_actions'
import { RECEIVE_A_TRIP } from '../actions/trip_actions';

const defaultState = {
    flightItem: {},
    new: undefined
}

const FlightItemsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_A_TRIP:
            
            const brandNewState = {};
            Object.values(action.trip.data)[0].itineraryItems
                .forEach(ii => { brandNewState[ii._id] = ii });
            return brandNewState;

        case RECEIVE_ALL_FLIGHT_ITINERARY_ITEMS:
            return action.trip.data.flightItineraryItems
        case RECEIVE_FLIGHT_ITINERARY_ITEM:
            return action.trip.data.flightItineraryItems;
        case RECEIVE_NEW_FLIGHT_ITINERARY_ITEM:
            newState[action.item.data._id] = action.item.data;
            return newState;
        case REMOVE_ITEM:
            delete newState[action.itemId]
            return newState;
        default:
            return state;
    }
}

export default FlightItemsReducer;