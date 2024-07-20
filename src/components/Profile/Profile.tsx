import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { IUserSignupForm } from '../User/UserSignupForm'
import { useForm } from 'react-hook-form'
import { updateUser } from '../../features/user/userSlice'
import stylesProfile from '../../styles/Profile.module.css'
import styles from '../../styles/User.module.css'

const Profile:FC = () => {
    const dispatch = useAppDispatch()
	const errorOnSubmit = useAppSelector(state => state.user.error)
    const currentUser = useAppSelector(state => state.user.currentUser)
	const { register, handleSubmit, formState, getValues } =
		useForm<IUserSignupForm>({
			mode: 'onChange',
            defaultValues: {
                email: currentUser?.email,
                name: currentUser?.name,  
            }
		})

	const { errors } = formState

	function submit() {
        let values = getValues()
		dispatch(updateUser(values))
	}
  return (
    <section className={stylesProfile.profile}>
      {!currentUser ? (<span>You need to log in</span>) : (
        <form className={styles.form} onSubmit={handleSubmit(submit)}>
				<div className={styles.group}>
					<input
						type='email'
						placeholder='Email'
						autoComplete='off'
						{...register('email', {
							required: 'This field is required',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address',
                                
							},
						})}
					/>
				</div>

				{errors.email && (
					<div className={styles.error}>{errors.email.message}</div>
				)}

				<div className={styles.group}>
					<input
						type='text'
						placeholder='Name'
						autoComplete='off'
						{...register('name', {
							required: 'This field is required',
							maxLength: 15,
						})}
					/>
				</div>

				{errors.name && (
					<div className={styles.error}>{errors.name.message}</div>
				)}

				<div className={styles.group}>
					<input
						type='password'
						placeholder='Password'
						autoComplete='off'
						{...register('password', {
							required: 'This field is required',
							maxLength: 15,
						})}
					/>
				</div>
				{errors.password && (
					<div className={styles.error}>{errors.password.message}</div>
				)}
				<button type='submit' className={styles.submit}>
					Update profile
				</button>

				{errorOnSubmit ? <div className={styles.error}>{errorOnSubmit}</div> : <></>}
			</form>
      )}
    </section>
  )
}

export default Profile
