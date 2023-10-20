import Header from '../../components/Header/Header'
import styles from './TestPage.module.scss'
import img from '../../assets/images/test-img.png'
import CheckBox from '../../components/CheckBox/CheckBox'
import { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import { useNavigate } from 'react-router-dom'

const TestPage = () => {
    const navigate = useNavigate()
    const [answer, setAnswer] = useState<number | null>(null)
    const onChangeAnswer = (value: number) => {
        setAnswer(value)
    }

    const onNext = () => {
        navigate('/result')
    }

    return (

        <div className={styles.page_bg}>
            <div className={styles.page_content}>
                <Header isTest />

                <div className={styles.page_content_test}>
                    <img src={img} className={styles.page_content_test_img} />

                    <div className={styles.page_content_test_questions}>
                        <h2 className={styles.page_content_test_questions_question}>Какая народная пословица зашифрована на картинке?</h2>
                        <CheckBox options={[{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }]} onChange={onChangeAnswer} selectedValue={answer} />
                        <Button text='Ответить' big onClick={onNext} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default TestPage