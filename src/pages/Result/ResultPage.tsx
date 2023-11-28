import Header from '../../components/Header/Header'
import styles from './ResultPage.module.scss'

import result0 from '../../assets/images/result-0.png'
import result100 from '../../assets/images/result-100.png'
import result200 from '../../assets/images/result-200.png'
import result300 from '../../assets/images/result-300.png'
import result400 from '../../assets/images/result-400.png'
import result500 from '../../assets/images/result-500.png'
import result600 from '../../assets/images/result-600.png'
import result700 from '../../assets/images/result-700.png'
import result800 from '../../assets/images/result-800.png'
import result900 from '../../assets/images/result-900.png'
import result1000 from '../../assets/images/result-1000.png'

import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import State from '../../store/State'
import { useState, useEffect, useMemo } from 'react'
import classNames from 'classnames'
import bird from '../../assets/images/falcon-with-disk.png'
import Modal from '../../components/UI/Modal/Modal'

const ResultPage = observer(() => {

    const [text, setText] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const coins = State.getCoins()
    const resultImage = useMemo(() => {
        switch (coins) {
            case 0:
                return result0;
            case 100:
                return result100;
            case 200:
                return result200;
            case 300:
                return result300;
            case 400:
                return result400;
            case 500:
                return result500;
            case 600:
                return result600;
            case 700:
                return result700;
            case 800:
                return result800;
            case 900:
                return result900;
            case 1000:
                return result1000;
            default:
                return result100;
        }
    }, [coins]);

    useEffect(() => {
        if (coins === 0) {
            setText('Если машины восстанут, вам точно несдобровать. Вы&nbsp;правильно ответили всего на&nbsp;0&nbsp;вопросов&nbsp;&mdash; мы&nbsp;уверены, вы&nbsp;можете лучше. Попробуйте ещё раз!')
        } else if (coins === 100) {
            setText('Если машины восстанут, вам точно несдобровать. Вы&nbsp;правильно ответили всего на&nbsp;1&nbsp;вопрос&nbsp;&mdash; мы&nbsp;уверены, вы&nbsp;можете лучше. Попробуйте ещё раз!')
        } else if (coins >= 200 && coins <= 400) {
            setText(`Неплохо, вы&nbsp;можете забрать ${coins} бонусных рублей&nbsp;&mdash; но&nbsp;советуем попробовать ещё. Напоминаем, разгадав все картинки, вы&nbsp;получите 1000 бонусных рублей на&nbsp;дебетовую карту &laquo;Прибыль&raquo;! Сыграем ещё раз?`)
        } else if (coins >= 500 && coins <= 700) {
            setText(`Нажали на&nbsp;кнопку&nbsp;&mdash; получили результат! Вы&nbsp;ответили правильно на&nbsp;${coins / 100} вопросов, ${coins} бонусных рублей на&nbsp;дебетовой карте &laquo;Прибыль&raquo; уже ваши. Пройдите нейроквиз ещё раз, если хотите больше.`)
        } else if (coins >= 800 && coins <= 900) {
            setText(`Это практика или талант? В&nbsp;любом случае впечатляет! До&nbsp;максимального выигрыша в&nbsp;1000 бонусных рублей, который упадет на&nbsp;карту &laquo;Прибыль&raquo;, не&nbsp;хватило совсем чуть-чуть, давайте попробуем ещё раз?`)
        } else if (coins) {
            setText(`Ого, а&nbsp;вы&nbsp;точно не&nbsp;робот? Поздравляем, вы&nbsp;разгадали все загадки нейросети! Оформите карту &laquo;Прибыль&raquo; прямо сейчас, чтобы забрать заслуженные 1000 бонусных рублей.`)
        }
    }, [])

    const onCloseModal = () => {
        setIsOpen(false)
    }

    const onOpenModal= () => {
        setIsOpen(true)
    }
    console.log(State.getParams())
    return (
        <>
            <Modal isOpen={isOpen} classNameContent={styles.modal_bank} onClose={onCloseModal} white>
                <iframe
                    src={`https://www.uralsib.ru/forms/pribyl?utm_content=smit_${State.getCoins()}&${State.getParams()}`}
                    style={{ border: 'none', overflow: 'auto', width: '100%', height: "80vh" }}
                    className="popup__frame js-final-frame">
                </iframe>
            </Modal>


            <div className={styles.page_bg}>

                <div className={styles.page_content}>
                    <Header />

                    <div className={styles.page_content_block}>
                        <h2 className={styles.page_content_subtitle}>Вы&nbsp;заработали</h2>
                        <img className={styles.page_content_title} src={resultImage} />
                        <h2 className={classNames(styles.page_content_subtitle, styles.page_content_subtitle_second)}>бонусных рублей</h2>
                        <p className={styles.page_content_text}>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </p>
                    </div>

                    <div className={styles.page_content_btns} >
                        <Link to='/test'><Button text='Играть еще' className={styles.page_content_btn} big /></Link>
                        <Button text='Забрать выигрыш' className={styles.page_content_btn} big onClick={onOpenModal} />
                    </div>

                </div>
                <img src={bird} className={styles.page_bg_img} />
            </div>
        </>
    )
})

export default ResultPage