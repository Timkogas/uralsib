import Header from '../../components/Header/Header'
import styles from './TestPage.module.scss'

import coin1 from '../../assets/images/correct-coin-1.png'
import coin2 from '../../assets/images/correct-coin-2.png'
import coin3 from '../../assets/images/correct-coin-3.png'

import CheckBox from '../../components/CheckBox/CheckBox'
import { useEffect, useState, useRef } from 'react'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import State from '../../store/State'
import { observer } from 'mobx-react-lite'


const TestPage = observer(() => {
    const navigate = useNavigate()

    const [coins, setCoins] = useState<{ id: number, left: number, coin: number, deg: number, size: number, dur: number }[]>([]);

    const counterRef = useRef(0);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const timeoutsRef = useRef<any[]>([]);

    const addCoin = () => {
        if (counterRef.current >= 25) return

        const randomLeft = Math.random() * window.innerWidth - 30;
        const randomSize = Math.random() * (1 - 0.5) + 0.5;
        const randomDeg = Math.random() * 360;
        const randomCoin = Math.floor(Math.random() * 3) + 1;
        const randomDuration = Math.floor(Math.random() * (5 - 3 + 1)) + 3

        setCoins(prevCoins => [
            ...prevCoins,
            { id: Date.now(), left: randomLeft, size: randomSize, deg: randomDeg, coin: randomCoin, dur: randomDuration }
        ]);

        counterRef.current++;


        timeoutsRef.current.push(setTimeout(addCoin, 30));
    }

    const clearAllTimeouts = () => {
        timeoutsRef.current.forEach(timeoutId => clearTimeout(timeoutId));
        timeoutsRef.current = [];
    }

    useEffect(() => {
        State.startGame()
        setCoins([])
        counterRef.current = 0
        clearAllTimeouts()
    }, [])

    const onChangeAnswer = (value: number) => {
        if (State.getIsCorrect() !== null) return
        State.setCurrentAnswer(value)
    }

    const onNext = () => {
        if (!State.getCurrentAnswer()) return
        if (State.getIsCorrect() !== null) {

            if (State.getCurrentQuestion() === 9) {
                navigate('/result')
            }

            State.setCurrentQuestion(State.getCurrentQuestion() + 1)
            State.setCurrentAnswer(0)

            State.resetIsCorrect()

            setCoins([])
            counterRef.current = 0
            clearAllTimeouts()

        } else {
            State.setIsCorrect()
            addCoin()
            timeoutsRef.current.push(setTimeout(() => {
                if (State.getCurrentQuestion() === 9) {
                    navigate('/result')
                }

                State.setCurrentQuestion(State.getCurrentQuestion() + 1)
                State.setCurrentAnswer(0)

                State.resetIsCorrect()

                setCoins([])
                counterRef.current = 0
                clearAllTimeouts()
            }, 4500))
        }
    }

    const question = State.getCurrentQuestions()[State.getCurrentQuestion()]
    const nextQuestion = State.getCurrentQuestion() === 9 ? { img: '' } : State.getCurrentQuestions()[State.getCurrentQuestion() + 1]
    const btnText = State.getCurrentQuestion() === 9 && State.getIsCorrect() !== null ? 'К результату' : State.getIsCorrect() !== null ? 'Следующий вопрос' : 'Ответить'
    return (

        <div className={styles.page_bg}>
            <div className={styles.page_content}>
                <Header isTest />

                <div className={styles.page_content_test}>
                    <div className={styles.page_content_test_img_wrapper}>
                        <img src={question?.img} className={styles.page_content_test_img} rel='preload' />
                        <img src={nextQuestion?.img} style={{ display: 'none' }} rel='preload' />
                    </div>

                    <div className={styles.page_content_test_questions}>
                        <h2 className={styles.page_content_test_questions_question}><div dangerouslySetInnerHTML={{ __html: question?.question }} /></h2>
                        <CheckBox options={question?.answers} onChange={onChangeAnswer} selectedValue={State.getCurrentAnswer()} />
                        <Button text={btnText} big onClick={onNext} disabled={!State.getCurrentAnswer()} className={styles.page_content_test_questions_question_btn} />
                    </div>
                </div>

            </div>

            <div className={styles.coin_rain_container} style={{ display: State.getIsCorrect() ? 'block' : 'none' }}>
                {coins.map(coin => {
                    return (
                        <img
                            key={coin.id}
                            className={styles.coin}
                            src={coin.coin === 1 ? coin1 : coin.coin === 2 ? coin2 : coin3}
                            style={{
                                top: '-55vh',
                                animationDuration: `${coin.dur}s`,
                                left: `${coin.left}px`,
                            }}
                        />
                    );
                })}
            </div>
        </div>

    )
})

export default TestPage