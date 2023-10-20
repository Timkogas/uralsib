import Header from '../../components/Header/Header'
import styles from './TestPage.module.scss'
import img from '../../assets/images/test-img.png'
import CheckBox from '../../components/CheckBox/CheckBox'
import { useEffect } from 'react'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'
import State from '../../store/State'
import { observer } from 'mobx-react-lite'

const TestPage = observer(() => {
    const navigate = useNavigate()

    useEffect(() => {
        State.startGame()
    }, [])

    const onChangeAnswer = (value: number) => {
       
            State.setCurrentAnswer(value)
        
    }

    const onNext = () => {
        if (State.getIsCorrect() !== null) {

            if (State.getCurrentQuestion() === 9) {
                navigate('/result')
            }

            State.setCurrentQuestion(State.getCurrentQuestion() + 1)
            State.setCurrentAnswer(0)
            State.resetIsCorrect()

        } else {
            State.setIsCorrect()
        }
    }

    const question = State.getCurrentQuestions()[State.getCurrentQuestion()]
    const btnText = State.getCurrentQuestion() === 9 ? 'К результату' : State.getIsCorrect() !== null ? 'Следующий вопрос' : 'Ответить'
    return (

        <div className={styles.page_bg}>
            <div className={styles.page_content}>
                <Header isTest />

                <div className={styles.page_content_test}>
                    <img src={question?.img} className={styles.page_content_test_img} />

                    <div className={styles.page_content_test_questions}>
                        <h2 className={styles.page_content_test_questions_question}>{question?.question}</h2>
                        <CheckBox options={question?.answers} onChange={onChangeAnswer} selectedValue={State.getCurrentAnswer()} />
                        <Button text={btnText} big onClick={onNext} disabled={!State.getCurrentAnswer()} />
                    </div>
                </div>

            </div>
        </div>

    )
})

export default TestPage