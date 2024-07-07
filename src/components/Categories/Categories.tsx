import { FC } from 'react'

import styles from '../../styles/Categories.module.css'
import { Link } from 'react-router-dom'
import { categoryImage } from '../../utils/category'
interface IProps {
  title: string
  products: string[]
  amount: number
  isLoading?: boolean
}

const Categories: FC<IProps> = ({title, products, amount, isLoading}) => {
  const list = products.filter((_,i) => i < amount)

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {isLoading ? <div>Loading...</div> : (
          list.map(category => (
            <Link to={`/category/${category}`} key={Math.floor(Math.random() * 100)} className={styles.item}>
              <div className={styles.image} style={{backgroundImage: `url(${categoryImage(category)})`}}/>
              <h3 className={styles.title}>{category.toUpperCase()}</h3>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}

export default Categories
