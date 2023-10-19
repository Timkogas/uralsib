import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import Button from '../UI/Button/Button'

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} alt='logo'/>
            <Button text='О карте'/>
        </div>
    )
}

export default Header