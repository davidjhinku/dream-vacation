import { connect } from 'react-redux';
import { fetchATrip } from '../../actions/trip_actions';
import {deleteItem} from '../../actions/itinerary_item_actions';
import {deleteFlightItem} from '../../actions/flight_itinerary_item_actions';
import {deleteLodgingItem} from '../../actions/lodging_itinerary_item_actions';
import {deleteFoodItem} from '../../actions/food_itinerary_item_actions';
import TripPage from './trip_page'

const mSTP = (state, ownProps) => {
    const tripId = ownProps.match.params.tripId
    const trip = state.trips.trip
    debugger
    return {
        tripId: tripId,
        trip: Object.values(trip)[0],
        comments: state.comments,
        itineraryItems: state.trips.trip.itineraryItems,
        flightItineraryItems: state.trips.trip.flightItineraryItems,
        lodgingItineraryItems: state.trips.trip.lodgingItineraryItems,
        foodItineraryItems: state.trips.trip.foodItineraryItems
    }
}

const mDTP = dispatch => {
    return {
        fetchATrip: tripId => dispatch(fetchATrip(tripId)),
        deleteItem: itemId => dispatch(deleteItem(itemId)),
        deleteFlightItem: itemId => dispatch(deleteFlightItem(itemId)),
        deleteLodgingItem: itemId => dispatch(deleteLodgingItem(itemId)),
        deleteFoodItem: itemId => dispatch(deleteFoodItem(itemId))
    }
}

export default connect(mSTP, mDTP)(TripPage);