import { FC, useState } from 'react'
import { IProductItem } from '../../features/types'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addItemToCart } from '../../features/user/userSlice'
import styles from '../../styles/Product.module.css'
import { ratingColor } from '../../utils/rating'

const SIZES = [4,4.5,5]

const Product:FC<IProductItem> = (item) => {
    let {image, title, price, description, rating} = item

    // const [curImg, setCurImg] = useState<string>()
    const [curSize, setCurSize] = useState<number>()

    const dispatch = useAppDispatch()

    function addToCart() {
        dispatch(addItemToCart(item))
    }

    function handleClickSize(size: number) {
        setCurSize(size)
    }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current} style={{backgroundImage: `url(${image})`}}> 
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>{price}$</div>
        <div>Rate: <span className={styles.rating} style={ratingColor(rating.rate)}>{rating.rate}</span></div>
        <div>Count: <span className={styles.count}>{rating.count}</span></div>
        <div className={styles.sizes}>
            <span>Sizes:</span>
            <div className={styles.list}>
                {SIZES.map((size, i) => (
                    <div onClick={() => handleClickSize(size)} key={i} className={`${styles.size} ${curSize === size && styles.active}`}>{size}</div>
                ))}
            </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
            <button className={styles.add} onClick={addToCart} disabled={!curSize}>Add to cart</button>
            <button className={styles.favourite} onClick={() => null}>Add to favorites</button>
        </div>
        <div className={styles.bottom}>
            <div className={styles.description}>19 people purchased</div>
            <Link to={ROUTES.home}>Return to store</Link>
        </div>
      </div>
                
      

    </section>
  )
}

export default Product
