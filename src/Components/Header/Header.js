import styles from './Header.module.scss'
import React, { useState } from 'react';


function Header() {

    const [term, setTerm] = useState('')

    const search = () => {
        console.log('search', term);
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

export default Header