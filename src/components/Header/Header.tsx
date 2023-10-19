import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import Button from '../UI/Button/Button'
import about from '../../assets/images/modal-about-card.png'
import card from '../../assets/images/modal-card.png'
import { useState } from 'react'
import Modal from '../UI/Modal/Modal'
import coin from '../../assets/images/coin.png'
import classNames from 'classnames'

interface HeaderProps {
    isTest?: boolean
}


const Header = ({ isTest }: HeaderProps) => {
    const [modalAbout, setModalAbout] = useState(false)

    const onCloseModalAbout = () => {
        setModalAbout(false)
    }

    const onOpenModalAbout = () => {
        setModalAbout(true)
    }



    return (
        <> {isTest ?
            <>
                <div className={styles.header_test}>
                    <div className={styles.header_test_first}>
                        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, i) => {
                            return(
                                <div key={i} className={classNames(styles.slide)}></div>
                            )
                        })}
                    </div>

                    <div className={styles.header_test_second}>
                        <img src={logo} alt='logo' className={styles.logo} />
                        <p className={styles.header_test_second_progress}>2/10</p>
                        <div className={styles.header_test_second_coins}>
                            <p className={styles.header_test_second_coins_text}>
                                600
                            </p>
                            <img src={coin} alt='logo' />
                        </div>
                    </div>
                </div>
            </>
            :
            <>
                <Modal isOpen={modalAbout} classNameContent={styles.modal_about} onClose={onCloseModalAbout}>
                    <img className={styles.modal_about_title} src={about} />
                    <img className={styles.modal_about_card} src={card}/>
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

                    <Button text='Оформить' big className={styles.page_content_btn} onClick={onCloseModalAbout} />
                </Modal>


                <div className={styles.header}>
                    <img src={logo} alt='logo' className={styles.logo} />
                    <Button text='О карте' onClick={onOpenModalAbout} />
                </div>
            </>
        }
        </>

    )
}

export default Header