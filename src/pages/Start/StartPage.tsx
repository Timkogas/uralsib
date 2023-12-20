/* eslint-disable @typescript-eslint/ban-ts-comment */
import Header from '../../components/Header/Header'
import styles from './StartPage.module.scss'
import title from '../../assets/images/start-page-title.png'
import how from '../../assets/images/modal-how-play.png'
import Button from '../../components/UI/Button/Button'
import Modal from '../../components/UI/Modal/Modal'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useWindowDimensions from '../../helpers'
import bird from '../../assets/images/falcon-with-disk.png'
import State from '../../store/State'

const StartPage = () => {

    const [modalHow, setModalHow] = useState(false)
    const { width } = useWindowDimensions();

    const onCloseModalHow = () => {
        setModalHow(false)
    }

    const onOpenModalHow = () => {
        if (State.getDataValue(12)) {
            State.setDataValue(12)
            window.dataLayer.push({
                event: 'gtm.click',
                eventAction: 'play',
                eventCategory: 'star_game',

            });
        }
        setModalHow(true)
    }

    const path = useLocation()
    State.setParams(new URLSearchParams(path.search).toString())

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

                <Link to={'/test'} className={styles.modal_how_link} onClick={
                    () => {
                        if (State.getDataValue(13)) {
                            State.setDataValue(13)
                            window.dataLayer.push({
                                event: 'gtm.click',
                                eventAction: 'play',
                                eventCategory: 'rules'
                            });
                        }
                    }}
                >
                    <Button text='Все ясно' medium={width < 900} big={width > 900} onClick={onCloseModalHow} />

                </Link>
            </Modal>


            <div className={styles.page_content}>
                <Header />


                <img className={styles.page_content_title} src={title} />
                <div>
                    <h2 className={styles.page_content_subtitle}>Человек или нейросеть&nbsp;&mdash; кто кого?</h2>
                    <p className={styles.page_content_text}>
                        {width > 840 ?
                            <>
                                Отгадайте, что изобразила нейросеть и&nbsp;получите<br />
                                до&nbsp;<span className={styles.bold}><span className={styles.page_content_text_number}>1</span>&nbsp;000 бонусных рублей</span> на&nbsp;карту «Прибыль».<br />
                                А&nbsp;ещё высокий доход&nbsp;— до&nbsp;16% годовых на&nbsp;остаток*!<br />
                            </>
                            :
                            <>
                                Отгадайте, что изобразила
                                <br />
                                нейросеть и&nbsp;получите
                                <br />
                                до&nbsp;<span className={styles.bold}><span className={styles.page_content_text_number}>1</span>&nbsp;000 бонусных рублей</span>
                                <br />
                                на&nbsp;карту «Прибыль». А&nbsp;ещё высокий
                                <br />
                                доход&nbsp;— до&nbsp;16% годовых
                                <br />
                                на&nbsp;остаток*!
                            </>}
                    </p>
                </div>
                <Button text='Играть' big={width < 530} className={styles.page_content_btn} onClick={onOpenModalHow} />


                <span className={styles.page_content_disclaimer}>
                    {width > 900 ?
                        <>
                            Акция «Прибыльный нейроквиз» проводится с&nbsp;01.12.2023&nbsp;по&nbsp;30.06.2024 включительно для новых держателей карты «Прибыль». <br/>
                            Информация о&nbsp;правилах участия в&nbsp;акции, количестве призов, сроках проведения акции <a style={{textDecoration: 'underline', color: 'var(--color-primary-b2)'}} target="_blank" href='https://www.uralsib.ru/api/directory-engine/files/rates/usloviya-aktsii-neyrokviz_52txvmyj.pdf'>по&nbsp;ссылке</a>. Условия и тарифы <br/>
                            по&nbsp;дебетовой карте «Прибыль» размещены на&nbsp;сайте uralsib.ru. Реклама. ПАО «БАНК УРАЛСИБ». ИНН 0274062111.<br/>
                            Генеральная лицензия ЦБ РФ № 30 от 10.09.2015 г. 18+ <br/>
                            *для новых клиентов в&nbsp;первые 2 месяца
                        </>
                        :
                        <>
                            Акция «Прибыльный нейроквиз» проводится с&nbsp;01.12.2023&nbsp;по&nbsp;30.06.2024 включительно для новых держателей карты «Прибыль». 
                            Информация о&nbsp;правилах участия в&nbsp;акции, количестве призов, сроках проведения акции  <a style={{textDecoration: 'underline', color: 'var(--color-primary-b2)'}} target="_blank" href='https://www.uralsib.ru/api/directory-engine/files/rates/usloviya-aktsii-neyrokviz_52txvmyj.pdf'>по&nbsp;ссылке</a>. Условия и тарифы 
                            по&nbsp;дебетовой карте «Прибыль» размещены на&nbsp;сайте uralsib.ru. Реклама. ПАО «БАНК УРАЛСИБ». ИНН 0274062111.
                            Генеральная лицензия ЦБ РФ № 30 от 10.09.2015 г. 18+ 
                            *для новых клиентов в&nbsp;первые 2 месяца

                        </>}
                </span>

            </div>

            <img src={bird} className={styles.page_bg_img} />
        </div>
    )
}

export default StartPage