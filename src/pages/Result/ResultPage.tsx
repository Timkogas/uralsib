import Header from '../../components/Header/Header'
import styles from './ResultPage.module.scss'
import result300 from '../../assets/images/result-300.png'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'

const ResultPage = () => {




    return (
        <div className={styles.page_bg}>

            <div className={styles.page_content}>
                <Header />

                <div>
                    <h2 className={styles.page_content_subtitle}>Вы заработали</h2>
                    <img className={styles.page_content_title} src={result300} />
                    <h2 className={styles.page_content_subtitle}>бонусных рублей</h2>
                    <p className={styles.page_content_text}>
                        Неплохо, вы можете забрать ХХХ бонусных рублей – 
                        но советуем попробовать ещё. Напоминаем,
                        разгадав все картинки, вы получите 1000 бонусных 
                        рублей на карту! Сыграем ещё раз?
                    </p>
                </div>

                <div className={styles.page_content_btns} >
                    <Link to='/'><Button text='Играть еще' className={styles.page_content_btn} big /></Link>
                    <Button text='Забрать выигрыш' className={styles.page_content_btn} big />
                </div>

            </div>
        </div>
    )
}

export default ResultPage