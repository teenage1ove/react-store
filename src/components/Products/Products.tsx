import { FC } from 'react'
import styles from "../../styles/Products.module.css"
import { Link } from 'react-router-dom'

export interface IProductsItem  {
    title: string
    price: number
    image: string
    id: number
    category: string
} 

interface IProps {
    title: string
    style?: object
    amount: number
    products: IProductsItem[]
    isLoading?: boolean
}

const Products:FC<IProps> = ({title,style, amount, products, isLoading}) => {
    if (!products.length) return
    const list:IProductsItem[] = products.filter((_,i) => i < amount)
    return (
    <section className={styles.products} style={style}>
        {title && <h2>{title}</h2>}

        <div className={styles.list}>
            {
            isLoading
            ? <div>Loading...</div>
        : (list.map(({id, image, title, category: cat, price}) => (<Link to={`/products/${id}`} className={styles.product} key={id}>
            <div className={styles.image} style={{
                    backgroundImage: `url(${image})`
                }}/>

            <div className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.cat}>{cat}</div>
                <div className={styles.info}>
                    <div className={styles.prices}>
                        <div className={styles.price}>{price}$</div>
                        <div className={styles.oldPrice}>{Math.floor(price / 0.8)}$</div>
                    </div>
                    <div className={styles.purchases}>
                        {Math.floor(Math.random() * 20 + 1)}
                        purchased
                    </div>
                </div>
            </div>

        </Link>)))
}
            
        </div>
    </section>
  )
}

export default Products
