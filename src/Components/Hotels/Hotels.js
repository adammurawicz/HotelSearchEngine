import React, { Component } from 'react'
import styles from './Hotels.module.scss'
import Hotel from './Hotel/Hotel'
import PropTypes from 'prop-types'

const propTypes = {
    hotels: PropTypes.array.isRequired
}

class Hotels extends Component {

    render() {
        return (
            <div className={`${styles.hotels} wrapper`}>
                <h2>Best offers:</h2>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
            </div>
        )
    }
}

Hotels.propTypes = propTypes

export default Hotels