import { FC, useState } from 'react'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { toggleForm } from '../../features/user/userSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { ROUTES } from '../../utils/routes'
import avatar from '../../images/avatar_user.png'
import logo from '../../images/logo.svg'
import styles from '../../styles/Header.module.css'
import { useGetProductsQuery } from '../../features/api/apiSlice'

const Header: FC = () => {
	const [searchValue, setSearchValue] = useState('')
	const {data, isLoading} = useGetProductsQuery(searchValue)
	const [filteredData, setFilteredData] = useState(data)
	const navigate = useNavigate()
	const cart = useAppSelector(state => state.user.cart)
	const currentUser = useAppSelector(state => state.user.currentUser)
	const dispatch = useAppDispatch()
	function handleClick() {
		if (!currentUser) return dispatch(toggleForm(true))
		navigate(ROUTES.profile)
	}

	
	function handleSearch({target: {value}} : {target: HTMLInputElement}) {
		setSearchValue(value)
		setFilteredData(data?.filter(item => item.title?.toLowerCase().includes(value.toLowerCase())))
		console.log(filteredData)
	}

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.home}>
					<img src={logo} alt='logo' />
				</Link>
			</div>

			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div
						className={styles.avatar}
						style={{
							backgroundImage: `url(${avatar})`,
						}}
					/>
					<div className={styles.username}>{currentUser ? currentUser?.name : 'Guest'}</div>
				</div>

				<form className={styles.form}>
					<div className={styles.icon}>
						<FaSearch />
					</div>
					<div className={styles.input}>
						<input
							type='search'
							placeholder='Search'
							autoComplete='off'
							onChange={handleSearch}
						/>
					</div>

					{searchValue && <div className={styles.box}>
						{isLoading ? 'Loading' : !filteredData?.length ? 'Not results' : filteredData?.map(item => (
							<Link key={item.id} onClick={() => setSearchValue('')} to={`/products/${item.id}`} className={styles.item}>
								<div className={styles.image} style={{backgroundImage: `url(${item.image})`}}>
								</div>
								<div>{item.title}</div>
							</Link >
						))}
					</div>}
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
