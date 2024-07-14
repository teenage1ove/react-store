import { FC } from 'react'
import { toggleForm, toggleFormType } from '../../features/user/userSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import styles from '../../styles/User.module.css'
import UserSignupForm from './UserSignupForm'
import UserLoginForm from './UserLoginForm'

const UserForm: FC = () => {
	const showForm = useAppSelector(state => state.user.showForm)
	const formType = useAppSelector(state => state.user.formType)
	const dispatch = useAppDispatch()
	const toggleCurrentFormType = (type: string) => dispatch(toggleFormType(type))
	const closeForm = () => dispatch(toggleForm(false))
	return showForm ? (
		<>
			<div className={styles.overlay} onClick={closeForm} />
			{formType === 'signup' ?
			(<UserSignupForm
				toggleCurrentFormType={toggleCurrentFormType}
				closeForm={closeForm} />)
			 : 
			(<UserLoginForm
				toggleCurrentFormType={toggleCurrentFormType}
				closeForm={closeForm}/>)}
		</>
	) : (
		<></>
	)
}

export default UserForm
