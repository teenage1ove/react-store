import { FC } from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import styles from "../../styles/User.module.css"
import UserSignupForm from './UserSignupForm'
import { toggleForm } from '../../features/user/userSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'

const UserForm:FC = () => {
    const showForm = useAppSelector(state => state.user.showForm)
    const dispatch = useAppDispatch()

    const closeForm = () => dispatch(toggleForm(false))
  return (
    showForm ? (
      <>
        <div className={styles.overlay} onClick={closeForm}/>
        <UserSignupForm closeForm={closeForm}/>
      </>
    ) : <></>
    
  )
}

export default UserForm
