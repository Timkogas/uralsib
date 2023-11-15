import Header from '../../components/Header/Header'
import styles from './StartPage.module.scss'
import title from '../../assets/images/start-page-title.png'
import how from '../../assets/images/modal-how-play.png'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowDimensions from '../../helpers'

const StartPage = () => {

    const [modalHow, setModalHow] = useState(false)
    const { width } = useWindowDimensions();

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
                        Нейросеть сгенерировала 10&nbsp;картинок. Разгадайте, что на&nbsp;них изображено, и&nbsp;выберите ответ.
                    </li>
                    <li className={styles.modal_how_text_item}>
                    Вы&nbsp;можете получить до&nbsp;1&nbsp;000 бонусных рублей, ответив на&nbsp;все 10&nbsp;вопросов.
                    </li>
                    <li className={styles.modal_how_text_item}>
                    Хотите улучшить результат? Сыграйте еще раз, чтобы заработать максимум прибыли&nbsp;&mdash; количество попыток не&nbsp;ограничено.
                    </li>
                </ol>

                <Link to={'/test'} className={styles.modal_how_link}>
                    <Button text='Все ясно' medium={width < 900} big={width > 900} onClick={onCloseModalHow} />

                </Link>
            </Modal>



            <div className={styles.page_content}>
                <Header />


                <img className={styles.page_content_title} src={title} />
                <div>
                    <h2 className={styles.page_content_subtitle}>Человек или нейросеть&nbsp;&mdash; кто кого?</h2>
                    <p className={styles.page_content_text}>
                        {width > 900 ?
                            <>
                                Отгадайте, что изобразила нейросеть и&nbsp;получите<br />

                                до&nbsp;<span className={styles.page_content_text_number}>1</span>&nbsp;000 бонусных рублей на&nbsp;карту «Прибыль».<br />
                                А&nbsp;ещё высокий доход&nbsp;— до&nbsp;13% годовых на&nbsp;остаток*!<br />
                            </>
                            :
                            <>
                                Отгадайте, что изобразила нейросеть и&nbsp;получите
                                <br/>
                                <b>
                                до&nbsp;<span className={styles.page_content_text_number}>1</span>&nbsp;000 бонусных рублей</b><br/> на&nbsp;карту «Прибыль».
                                А&nbsp;ещё высокий доход&nbsp;— до&nbsp;13% годовых на&nbsp;остаток*!
                            </>}
                    </p>
                </div>
                <Button text='Играть' big={width < 900} className={styles.page_content_btn} onClick={onOpenModalHow} />


                <span className={styles.page_content_disclaimer}>
                    {width > 900 ?
                        <>
                            Общий срок проведения акции с&nbsp;1&nbsp;сентября 2023 года по&nbsp;31&nbsp;декабря 2023&nbsp;года. Информация о&nbsp;правилах участия в&nbsp;акции,<br />

                            количестве призов, сроках проведения акции, условиях и&nbsp;тарифах по&nbsp;дебетовой карте &laquo;Прибыль&raquo; размещена на&nbsp;сайте <a href='https://www.uralsib.ru/' target='_blank'>uralsib.ru</a>.<br />

                            Реклама. ПАО &laquo;Банк Уралсиб&raquo;. Генеральная лицензия банка России &#8470;&nbsp;30, выдана 10.09.2015&nbsp;г.<br />

                            *для новых клиентов в&nbsp;первые 2&nbsp;месяца<br />
                        </>
                        :
                        <>
                            Общий срок проведения акции с&nbsp;1&nbsp;сентября 2023 года по&nbsp;31&nbsp;декабря 2023&nbsp;года. Информация о&nbsp;правилах участия в&nbsp;акции, количестве призов, сроках проведения акции, условиях и&nbsp;тарифах по&nbsp;дебетовой карте &laquo;Прибыль&raquo; размещена на&nbsp;сайте  <a href='https://www.uralsib.ru/' target='_blank'>uralsib.ru</a>.
                            Реклама. ПАО &laquo;Банк Уралсиб&raquo;. Генеральная лицензия банка России &#8470;&nbsp;30, выдана 10.09.2015&nbsp;г.
                            *для новых клиентов в&nbsp;первые 2&nbsp;месяца

                        </>}
                </span>

            </div>
        </div>
    )
}

export default StartPage