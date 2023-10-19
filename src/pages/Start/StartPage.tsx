import Header from '../../components/Header/Header'
import styles from './StartPage.module.scss'
import title from '../../assets/images/start-page-title.png'
import how from '../../assets/images/modal-how-play.png'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import { useState } from 'react'

const StartPage = () => {

    const [modalHow, setModalHow] = useState(false)
   

    const onCloseModalHow = () => {
        setModalHow(false)
    }

    const onOpenModalHow = () => {
        setModalHow(true)
    }



    return (
        <div className={styles.page_bg}>

            <Modal isOpen={modalHow} classNameContent={styles.modal_how} onClose={onCloseModalHow}>
                <img className={styles.modal_how_title} src={how} />

                <ol className={styles.modal_how_text}>
                    <li className={styles.modal_how_text_item}>
                        Нейросеть сгенерировала 10 картинок. Разгадайте, <br />что на них изображено, и выберите ответ.<br />

                    </li>
                    <li className={styles.modal_how_text_item}>
                        Вы можете получить до 1 000 бонусных рублей,<br /> ответив на все 10 вопросов.<br />
                    </li>
                    <li className={styles.modal_how_text_item}>
                        Хотите улучшить результат? Сыграйте еще раз,  <br />  чтобы заработать максимум прибыли – количество <br />попыток не ограничено.<br />
                    </li>
                </ol>

                <Button text='Все ясно' big className={styles.page_content_btn} onClick={onCloseModalHow} />
            </Modal>


            <div className={styles.page_content}>
                <Header />

                <img className={styles.page_content_title} src={title} />
                <div>
                    <h2 className={styles.page_content_subtitle}>Человек или нейросеть — кто кого?</h2>
                    <p className={styles.page_content_text}>
                        Отгадайте, что изобразила нейросеть и получите
                        <br />
                        до <span className={styles.page_content_text_number}>1</span>000 бонусных рублей на карту «Прибыль».
                        <br />А ещё высокий доход — до 13% годовых на остаток*!
                    </p>
                </div>
                <Button text='Играть' className={styles.page_content_btn} onClick={onOpenModalHow} />

                <span className={styles.page_content_disclaimer}>
                    Общий срок проведения акции с 1 сентября 2023 года по 31 декабря 2023 года. Информация о правилах участия в акции,
                    <br />
                    количестве призов, сроках проведения акции, условиях и тарифах по дебетовой карте «Прибыль» размещена на сайте <a href='https://www.uralsib.ru/' target='_blank'>uralsib.ru</a>.
                    <br />
                    Реклама. ПАО «Банк Уралсиб». Генеральная лицензия банка России № 30, выдана 10.09.2015 г.
                    <br />
                    *для новых клиентов в первые 2 месяца
                </span>

            </div>
        </div>
    )
}

export default StartPage