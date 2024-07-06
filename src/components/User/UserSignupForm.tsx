import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IoClose } from 'react-icons/io5'
import styles from '../../styles/User.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { createUser } from '../../features/user/userSlice'

export interface IUserSignupForm {
    email: string
    name: string
    password: string
}

interface IProps {
    closeForm: () => {}
}

const UserSignupForm:FC<IProps> = ({closeForm}) => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, formState, getValues} = useForm<IUserSignupForm>({
        mode: 'onChange',
    })
    
    const {errors} = formState
    
    function submit() {
        console.log(getValues())
        dispatch(createUser(getValues()))
    }

  return (
    <div className={styles.wrapper}>
        <div className={styles.close} onClick={closeForm}>
            <IoClose />
        </div>

        <div className={styles.title}>
            Sign Up
        </div>

        <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <div className={styles.group}>
                <input type="email" placeholder='Email' autoComplete='off' {...register('email', {
                    required: 'This field is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                    }
                })}/>
            </div>

            {errors.email && <div className={styles.error}>{errors.email.message}</div>}

            <div className={styles.group}>
                <input type="text" placeholder='Name' autoComplete='off' {...register('name', {
                    required: 'This field is required',
                    maxLength: 15
                })}/>
            </div>

            {errors.name && <div className={styles.error}>{errors.name.message}</div>}

            <div className={styles.group}>
                <input type="password" placeholder='Password' autoComplete='off' {...register('password', {
                    required:'This field is required',
                    maxLength: 15
                })}/>
            </div>
            {errors.password && <div className={styles.error}>{errors.password.message}</div>}
            <div className={styles.link}>
                I already have an account.
            </div>

            <button type='submit' className={styles.submit}>Create an account</button>
        </form>
    </div>
  )
}

export default UserSignupForm
