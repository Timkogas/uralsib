import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import Button from '../UI/Button/Button'
import about from '../../assets/images/modal-about-card.png'
import card from '../../assets/images/modal-card.png'
import { useState } from 'react'
import Modal from '../UI/Modal/Modal'

const Header = () => {
    const [modalAbout, setModalAbout] = useState(false)

    const onCloseModalAbout = () => {
        setModalAbout(false)
    }

    const onOpenModalAbout = () => {
        setModalAbout(true)
    }

    return (<>
        <Modal isOpen={modalAbout} classNameContent={styles.modal_about} onClose={onCloseModalAbout}>
            <img className={styles.modal_about_title} src={about} />
            <img className={styles.modal_about_card} src={card} />
            <ul className={styles.modal_about_text}>
                <li className={styles.modal_about_text_item}>
                    До 13% годовых на остаток для новых клиентов в первые 2 месяца
                </li>
                <li className={styles.modal_about_text_item}>
                    До 3% кешбэк на покупки
                </li>
                <li className={styles.modal_about_text_item}>
                    До 30% кешбэк у партнёров
                </li>
                <li className={styles.modal_about_text_item}>
                    Бесплатное обслуживание на простых условиях
                </li>
            </ul>

            <Button text='Все ясно' big className={styles.page_content_btn} onClick={onCloseModalAbout} />
        </Modal>


        <div className={styles.header}>
            <img src={logo} alt='logo' />
            <Button text='О карте' onClick={onOpenModalAbout} />
        </div>
    </>)
}

export default Header