import Header from '../../components/Header/Header'
import styles from './ResultPage.module.scss'
import result300 from '../../assets/images/result-300.png'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import State from '../../store/State'
import { useState, useEffect } from 'react'

const ResultPage = observer(() => {

    const [text, setText] = useState('')

    useEffect(() => {
        if (State.getCoins() === 0) {
            setText('Если машины восстанут, вам точно несдобровать. Вы правильно ответили всего на 0 вопросов – мы уверены, вы можете лучше. Попробуйте ещё раз!')
        } else if (State.getCoins() === 100) {
            setText('Если машины восстанут, вам точно несдобровать. Вы правильно ответили всего на 1 вопросов – мы уверены, вы можете лучше. Попробуйте ещё раз!')
        } else if (State.getCoins() >= 200 && State.getCoins() <= 400) {
            setText(`Неплохо, вы можете забрать ${State.getCoins()} бонусных рублей – но советуем попробовать ещё. Напоминаем, разгадав все картинки, вы получите 1000 бонусных рублей на дебетовую карту «Прибыль»! Сыграем ещё раз?`)
        } else if (State.getCoins() >= 500 && State.getCoins() <= 700) {
            setText(`Нажали на кнопку – получили результат! Вы ответили правильно на ${State.getCoins() / 100} вопросов, ${State.getCoins()} бонусных рублей на дебетовой карте «Прибыль» уже ваши. Пройдите нейроквиз ещё раз, если хотите больше.`)
        } else if (State.getCoins() >= 800 && State.getCoins() <= 900) {
            setText(`Это практика или талант? В любом случае впечатляет! До максимального выигрыша в 1000 бонусных рублей, который упадет на карту «Прибыль», не хватило совсем чуть-чуть, давайте попробуем ещё раз?`)
        } else if (State.getCoins()) {
            setText(`Ого, а вы точно не робот? Поздравляем, вы разгадали все загадки нейросети! Оформите карту «Прибыль» прямо сейчас, чтобы забрать заслуженные 1000 бонусных рублей.`)
        }
    }, [])

    return (
        <div className={styles.page_bg}>

            <div className={styles.page_content}>
                <Header />

                <div>
                    <h2 className={styles.page_content_subtitle}>Вы заработали</h2>
                    <img className={styles.page_content_title} src={result300} />
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