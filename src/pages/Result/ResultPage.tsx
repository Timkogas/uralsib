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
import { useState, useEffect, useMemo  } from 'react'

const ResultPage = observer(() => {

    const [text, setText] = useState('')

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
            setText('Если машины восстанут, вам точно несдобровать. Вы правильно ответили всего на 0 вопросов – мы уверены, вы можете лучше. Попробуйте ещё раз!')
        } else if (coins === 100) {
            setText('Если машины восстанут, вам точно несдобровать. Вы правильно ответили всего на 1 вопросов – мы уверены, вы можете лучше. Попробуйте ещё раз!')
        } else if (coins >= 200 && coins <= 400) {
            setText(`Неплохо, вы можете забрать ${coins} бонусных рублей – но советуем попробовать ещё. Напоминаем, разгадав все картинки, вы получите 1000 бонусных рублей на дебетовую карту «Прибыль»! Сыграем ещё раз?`)
        } else if (coins >= 500 && coins <= 700) {
            setText(`Нажали на кнопку – получили результат! Вы ответили правильно на ${coins / 100} вопросов, ${coins} бонусных рублей на дебетовой карте «Прибыль» уже ваши. Пройдите нейроквиз ещё раз, если хотите больше.`)
        } else if (coins >= 800 && coins <= 900) {
            setText(`Это практика или талант? В любом случае впечатляет! До максимального выигрыша в 1000 бонусных рублей, который упадет на карту «Прибыль», не хватило совсем чуть-чуть, давайте попробуем ещё раз?`)
        } else if (coins) {
            setText(`Ого, а вы точно не робот? Поздравляем, вы разгадали все загадки нейросети! Оформите карту «Прибыль» прямо сейчас, чтобы забрать заслуженные 1000 бонусных рублей.`)
        }
    }, [])

    return (
        <div className={styles.page_bg}>

            <div className={styles.page_content}>
                <Header />

                <div className={styles.page_content_block}>
                    <h2 className={styles.page_content_subtitle}>Вы заработали</h2>
                    <img className={styles.page_content_title} src={resultImage} />
                    <h2 className={styles.page_content_subtitle}>бонусных рублей</h2>
                    <p className={styles.page_content_text}>
                        {text}
                    </p>
                </div>

                <div className={styles.page_content_btns} >
                    <Link to='/test'><Button text='Играть еще' className={styles.page_content_btn} big /></Link>
                    <Button text='Забрать выигрыш' className={styles.page_content_btn} big />
                </div>

            </div>
        </div>
    )
})

export default ResultPage