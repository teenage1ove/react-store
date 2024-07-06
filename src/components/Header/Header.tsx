import {FC} from 'react'
import styles from '../../styles/Header.module.css'
import {Link} from 'react-router-dom'
import {ROUTES} from '../../utils/routes'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.jpg'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { toggleForm } from '../../features/user/userSlice'

const Header: FC = () => {
    const cart = useAppSelector(state => state.user.cart)
    const currentUser = useAppSelector(state => state.user.currentUser)
    const dispatch = useAppDispatch()
    function handleClick() {
        if (!currentUser) return dispatch(toggleForm(true))
        

    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.home}>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div
                        className={styles.avatar}
                        style={{
                            backgroundImage: `url(${avatar})`
                        }}/>
                    <div className={styles.username}>Guest</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.icon}>
                        <FaSearch />
                    </div>
                    <div className={styles.input}>
                        <input
                            type="search"
                            placeholder='Search'
                            autoComplete='off'
                            onChange={() => null}/>
                    </div>

                    {false && <div className={styles.box}></div>}
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.home} className={styles.favourites}>
                        <FaHeart />
                    </Link>

                    <Link to={ROUTES.cart} className={styles.cart}>
                        <FaCartShopping />
                        <span className={styles.count}>{cart.length}</span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Header
