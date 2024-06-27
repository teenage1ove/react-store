import { FC, useEffect, useState } from 'react'
import { IProductItem } from '../../features/types'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import styles from '../../styles/Product.module.css'
import { addItemToCart } from '../../features/user/userSlice'

const SIZES = [4,4.5,5]

const Product:FC<IProductItem> = (item) => {
    const {images, title, price, description} = item

    const [curImg, setCurImg] = useState<string>()
    const [curSize, setCurSize] = useState<number>()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!images?.length) return

        setCurImg(images![0])
    }, [images])

    function addToCart() {
        dispatch(addItemToCart(item))
    }

    function handleClickImage(image: string) {
        setCurImg(image)
    }

    function handleClickSize(size: number) {
        setCurSize(size)
    }

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div className={styles.current} style={{backgroundImage: `url(${curImg})`}}> 
        </div>
        <div className={styles['images-list']}>
            {images && images!.map((image, i) => (
                <div key={i} className={styles.image} style={{backgroundImage: `url(${image})`}} onClick={() => handleClickImage(image)} /> 
            ))}
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>{price}$</div>
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
