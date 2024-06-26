import { FC } from 'react'
import styles from "../../styles/Products.module.css"
import { Link } from 'react-router-dom'
import { ICategoryItem } from '../../features/categories/categoriesSlice'

export interface IProductsItem extends ICategoryItem {
    title: string
    price: number
    images: string[]
    id: number
    category: {name: string}

} 

interface IProps {
    title: string
    style?: object
    amount: number
    products: IProductsItem[]
}

const Products:FC<IProps> = ({title,style, amount, products = []}) => {

    const list = products.filter((_,i) => i < amount)
    return (
    <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}

        <div className={styles.list}>
            {list.map(({id, images, title, category: {name: cat}, price}) => (
                <Link to={`/products/${id}`} className={styles.product} key={id}>
                    <div className={styles.image} style={{backgroundImage: `url(${images[0]})`}}/>

                    <div className={styles.wrapper}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.cat}>{cat}</div>
                        <div className={styles.info}>
                            <div className={styles.prices}>
                                <div className={styles.price}>{price}$</div>
                                <div className={styles.oldPrice}>{Math.floor(price * 0.8)}$</div>
                            </div>
                            <div className={styles.purchases}>
                                {Math.floor(Math.random() * 20 + 1)} purchased
                            </div>
                        </div>
                    </div>

                </Link>
            ))}
        </div>

    
    </section>
  )
}

export default Products
