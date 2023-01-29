import styles from './Header.module.scss'
import React, { useState } from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function Header(props) {

    const [term, setTerm] = useState('')

    const search = () => {
       props.onSearch(term)
    }

    return (
        <div className={styles.header}>
            <h1>Hotel Search Engine</h1>
            <div className={styles.searchWrapper}>
            <input
                value = {term} 
                onChange={e => setTerm(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? search() : null}
                className={styles.input} 
                placeholder='Type city...'
                type='text'>
                </input>
            <button 
                className={styles.searchBtn}
                onClick={search}
                >Search</button>
            </div>
            <div className={styles.darkness}></div>
        </div>
    )
}

Header.propTypes = propTypes

export default Header