import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import logo from '../../images/logo.svg'
import styles from '../../styles/Footer.module.css'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
const Footer:FC = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.home}>
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by <a href='https://t.me/strsstnk' target='_blank'>Kirill Starostenko</a>
      </div>

      <div className={styles.socials}>
        <a href="https://www.instagram.com/starostnk?igsh=cnc3MHBwcGp4Z2Yz&utm_source=qr" target='_blank'>
          <FaInstagram />
        </a>

        <a href="https://www.youtube.com/channel/UC_RMaxYuz9n_PEjhgcU26zQ" target='_blank'>
          <FaYoutube />
        </a>

        <a href="https://github.com/teenage1ove" target='_blank'>
          <FaGithub />
        </a>
      </div>

      
    </section>
  )
}

export default Footer
