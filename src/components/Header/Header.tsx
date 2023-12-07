import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import logoSmall from '../../assets/images/logo-small.svg'
import Button from '../UI/Button/Button'
import about from '../../assets/images/modal-about-card.png'
import card from '../../assets/images/modal-card.png'
import { useState } from 'react'
import Modal from '../UI/Modal/Modal'
import coin from '../../assets/images/coin.png'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite';
import State from '../../store/State'
import useWindowDimensions from '../../helpers'
import { Link } from 'react-router-dom'
import CloseIcon from '../../assets/images/close.svg'

interface HeaderProps {
    isTest?: boolean
}


const Header = observer(({ isTest }: HeaderProps) => {
    const [modalAbout, setModalAbout] = useState(false)
    const { width, height } = useWindowDimensions();

    const onCloseModalAbout = () => {
        setModalAbout(false)
    }

    const onOpenModalAbout = () => {
        setModalAbout(true)
        window.dataLayer.push({
            event: "gtm.click",
            eventAction: "dk_left_corner",
            eventCategory: "step_1",
            eventLabel: "about_card"
        });
    }

    return (
        <> {isTest ?
            <>
                <div className={styles.header_test}>
                    <div className={styles.header_test_first}>
                        {State.getCurrentQuestions().map((el, i) => {
                            return (
                                <div
                                    key={el.question}
                                    className={classNames(styles.slide,
                                        {
                                            [styles.slide_completed]: i < State.getCurrentQuestion(),
                                            [styles.slide_wrong]: State.getIsCorrect() === false && State.getIsCorrect() !== null && i === State.getCurrentQuestion(),
                                            [styles.slide_correct]: State.getIsCorrect() !== null && State.getIsCorrect() && i === State.getCurrentQuestion()
                                        })
                                    }
                                />
                            )
                        })}
                    </div>

                    <div className={styles.header_test_second}>
                        <Link to='/'><img src={height >= width ? logoSmall : logo} alt='logo' className={styles.logo} /></Link>
                        <p className={styles.header_test_second_progress}> {State.getCurrentQuestion() + 1}/10</p>
                        <div className={styles.header_test_second_coins}>
                            <p className={styles.header_test_second_coins_text}>
                                {State.getCoins()}
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
                    <img className={styles.modal_about_card} src={card} />
                    <ul className={styles.modal_about_text}>
                        <li className={styles.modal_about_text_item}>
                            <b>До&nbsp;13% годовых</b> на&nbsp;остаток для новых клиентов в&nbsp;первые 2&nbsp;месяца
                        </li>
                        <li className={styles.modal_about_text_item}>
                            <b>До&nbsp;3% кешбэк</b> на&nbsp;покупки
                        </li>
                        <li className={styles.modal_about_text_item}>
                            <b>До&nbsp;30% кешбэк</b> у&nbsp;партнёров
                        </li>
                        <li className={styles.modal_about_text_item}>
                            <b> Бесплатное обслуживание</b> на&nbsp;простых условиях
                        </li>
                    </ul>

                    <img src={CloseIcon} className={styles.icon} onClick={onCloseModalAbout} />
                </Modal>


                <div className={styles.header}>
                    <Link to='/'> <img src={logo} alt='logo' className={styles.logo} /> </Link>
                    <Button text='О карте' onClick={onOpenModalAbout} />
                </div>
            </>
        }
        </>

    )
})

export default Header