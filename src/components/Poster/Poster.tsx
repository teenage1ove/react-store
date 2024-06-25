import {FC} from 'react'
import img from '../../images/computer.png'
import styles from '../../styles/Home.module.css'
const Poster: FC = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 35%</div>
            <div className={styles.product}>
                <div>
                    <div className={styles.subtitle}>the bestseller of 2024</div>
                    <h1 className={styles.head}>LENON R456 with NVIDIA 5090 TI</h1>
                    <button >Shop now</button>
                </div>
                <div className={styles.image}>
                    <img src={img} alt="computer"/>
                </div>
            </div>
        </section>
    )
}

export default Poster
