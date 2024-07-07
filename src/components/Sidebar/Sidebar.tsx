import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import styles from '../../styles/Sidebar.module.css'



const Sidebar:FC = () => {
  const list = useAppSelector(state => state.categories.list)
  const isLoading = useAppSelector(state => state.categories.isLoading)
  return  (
    <section className={styles.sidebar}>
      <div className={styles.title}>Categories</div>
      {isLoading ? <div className={styles.menu}>Loading...</div> : 
      <>
        <nav>
        <ul className={styles.menu}>
          {list.map(category => (
            <li key={Math.floor(Math.random() * 100)}>
              <NavLink
              className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}
              to={`/category/${category}`}>
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" className={styles.link} target='_blank'>
          Help 
        </a>
        <a href="/terms" className={styles.link} target='_blank' style={{textDecoration: 'underline'}}>
          Terms & Conditions
        </a>
      </div>
      </>
      }
    </section>
  )
}

export default Sidebar
