import styles from './Hotel.module.scss'

function Hotel (props) {
    return(
        <div className={styles.hotel}>
            
            <div className={styles.imgWrapper}>
                <img src={require('../../../Asset/hotelOne.jpg')} alt='hotel picture'></img>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.mainWrapper}>
                    <p className={styles.name}>{props.name}</p>
                    <p className={styles.city}>{props.city}</p>
                </div>

                <div className={styles.gradeWrapper}>
                    <p className={styles.grade}>Grade: <span>{props.grade}</span></p>
                    <button className={styles.showBtn}>Show</button>
                </div>
            </div>

            <div className={styles.contentWrapper}>
                <p className={styles.content}>{props.description}</p>
            </div>

        </div>
    )
}

export default Hotel