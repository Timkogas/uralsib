import Header from '../../components/Header/Header'
import styles from './StartPage.module.scss'
import title from '../../assets/images/start-page-title.png'
import Button from '../../components/UI/Button/Button'

const StartPage = () => {
    return (
        <div className={styles.page_bg}>
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
                <Button text='Играть' className={styles.page_content_btn} />

                <span className={styles.page_content_disclaimer}>
                    Общий срок проведения акции с 1 сентября 2023 года по 31 декабря 2023 года. Информация о правилах участия в акции,
                    <br />
                    количестве призов, сроках проведения акции, условиях и тарифах по дебетовой карте «Прибыль» размещена на сайте uralsib.ru.
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