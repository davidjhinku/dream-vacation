import React from 'react'
import {withRouter} from 'react-router-dom'

class CreateTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            start_date: '',
            end_date: '',
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors})
    }

    handleChange(field) {
        return e => {
            this.setState({[field]: e.target.value});
            this.props.clearErrors([]);
        }
    }

    
    handleSubmit(e) {
        e.preventDefault();
        let trip = {
            location: this.state.location,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        };
        this.props.createTrip(trip)
        .then(this.props.history.push(`/trips/${trip.id}`))
    }
    
    componentWillUnmount() {
        this.props.clearErrors([])
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, idx) => (
                    <li className='create-trip-errors-element' key={`err-${idx}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }

    render() {

        return (
            <div className='create-trip-container'>
                <h3>Create a Trip!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className='create-trip-subcontainer'>
                        <div>
                            <input className='create-trip-input-element'
                                type="text"
                                value={this.state.location}    
                                onChange={this.handleChange('location')}
                                placeholder='Location'
                            />
                            <br/>
                        </div>

                        <div>
                            <input className='create-trip-date-element'
                                type="date"
                                value={this.state.start_date}
                                onChange={this.handleChange('start_date')}
                            />
                        </div>
                            <input className='create-trip-date-element'
                                type="date"
                                value={this.state.end_date}
                                onChange={this.handleChange('end_date')}
                            />
                        <div>

                        </div>

                        <div className="create-trip-errors">
                            {this.renderErrors()}
                        </div>

                        <div className="create-trip-submit-btn">
                            <input className="create-trip-submit-text" type="submit" value="Create Trip" />
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(CreateTrip);