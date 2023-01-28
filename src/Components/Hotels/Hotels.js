import React, { Component } from 'react'
import styles from './Hotels.module.scss'
import Hotel from './Hotel/Hotel'


class Hotels extends Component {
    render() {
        return (
            <div className={`${styles.hotels} wrapper`}>
                <h2>Best offers:</h2>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
                <Hotel/>
                <Hotel/>
            </div>
        )
    }
}


export default Hotels