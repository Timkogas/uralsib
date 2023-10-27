import { makeAutoObservable } from 'mobx';
import img1 from '../assets/images/test/1.png'
import img2 from '../assets/images/test/2.png'
import img3 from '../assets/images/test/3.png'
import img4 from '../assets/images/test/4.png'
import img5 from '../assets/images/test/5.png'
import img6 from '../assets/images/test/6.png'
import img7 from '../assets/images/test/7.png'
import img8 from '../assets/images/test/8.png'
import img9 from '../assets/images/test/9.png'
import img10 from '../assets/images/test/10.png'
import img11 from '../assets/images/test/11.png'
import img12 from '../assets/images/test/12.png'
import img13 from '../assets/images/test/13.png'
import img14 from '../assets/images/test/14.png'
import img15 from '../assets/images/test/15.png'
import img16 from '../assets/images/test/16.png'
import img17 from '../assets/images/test/17.png'
import img18 from '../assets/images/test/18.png'
import img19 from '../assets/images/test/19.png'
import img20 from '../assets/images/test/20.png'
import img21 from '../assets/images/test/21.png'
import img22 from '../assets/images/test/22.png'
import img23 from '../assets/images/test/23.png'
import img24 from '../assets/images/test/24.png'
import img25 from '../assets/images/test/25.png'
import img26 from '../assets/images/test/26.png'
import img27 from '../assets/images/test/27.png'
import img28 from '../assets/images/test/28.png'
import img29 from '../assets/images/test/29.png'
import img30 from '../assets/images/test/30.png'
import img31 from '../assets/images/test/31.png'
import img32 from '../assets/images/test/32.png'
import img33 from '../assets/images/test/33.png'
import img34 from '../assets/images/test/34.png'
import img35 from '../assets/images/test/35.png'
import img36 from '../assets/images/test/36.png'
import img37 from '../assets/images/test/37.png'
import img38 from '../assets/images/test/38.png'
import img39 from '../assets/images/test/39.png'


interface IQuestion {
    img: string;
    question: string;
    answers: { value: number, text: string }[];
    correctAnswer: number;
}

const questions: IQuestion[] = [
    {
        img: img1,
        question: 'Ой, а это, случайно, не вы на картинке? Догадаетесь, какую профессию изобразила нейросеть?',
        answers: [{ text: 'Программист', value: 1 }, { text: 'Маркетолог', value: 2 }, { text: 'Копирайтер', value: 3 }, { text: 'Дизайнер', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img2,
        question: 'Вспоминаем уроки музыки: что это за инструмент?',
        answers: [{ text: 'Виолончель', value: 1 }, { text: 'Контрабас', value: 2 }, { text: 'Гитара', value: 3 }, { text: 'Скрипка', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img3,
        question: 'С каким городом у вас ассоциируется эта сочная картинка?',
        answers: [{ text: 'Армавир', value: 1 }, { text: 'Астрахань', value: 2 }, { text: 'Архангельск', value: 3 }, { text: 'Архыз', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img4,
        question: 'Какой банковский продукт нейросеть видит вот так?',
        answers: [{ text: 'Ипотека', value: 1 }, { text: 'Вклад', value: 2 }, { text: 'Карта рассрочки', value: 3 }, { text: 'Дебетовая карта', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img5,
        question: 'Золотые огни и муки сердца… Какой город изобразила нейросеть?',
        answers: [{ text: 'Самара', value: 1 }, { text: 'Саранск', value: 2 }, { text: 'Саратов', value: 3 }, { text: 'Сызрань', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img6,
        question: 'Поговорим о прекрасном: что за сказочную красавицу изобразила нейросеть?',
        answers: [{ text: 'Русалочка', value: 1 }, { text: 'Царевна-Несмеяна', value: 2 }, { text: 'Варвара-краса', value: 3 }, { text: 'Василиса Премудрая', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img7,
        question: 'Прихорашиваемся! Какой предмет косметики предлагает использовать нейросеть?',
        answers: [{ text: 'Тушь', value: 1 }, { text: 'Помада', value: 2 }, { text: 'Хайлайтер', value: 3 }, { text: 'Консилер', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img8,
        question: 'Проверим, успешный ли вы инвестор? Какой рыночный тренд изобразила нейросеть?',
        answers: [{ text: 'Нисходящий', value: 1 }, { text: 'Восходящий', value: 2 }, { text: 'Боковой', value: 3 }, { text: 'Краткосрочный', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img9,
        question: 'Колитесь, что у вас было по химии в школе? Угадаете изображенный химический элемент?',
        answers: [{ text: 'Кальций', value: 1 }, { text: 'Серебро', value: 2 }, { text: 'Углерод', value: 3 }, { text: 'Магний', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img10,
        question: '30 лет назад мы могли об этом только в книжках прочитать, а сейчас это реальность!',
        answers: [{ text: 'Умный дом', value: 1 }, { text: 'Робот-пылесос', value: 2 }, { text: 'Умная колонка', value: 3 }, { text: 'Социальный робот', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img11,
        question: 'Вы только посмотрите, какую красоту сгенерировала нейросеть! Мы уже знаем, какой город имела в виду нейросеть, а вы?',
        answers: [{ text: 'Калининград', value: 1 }, { text: 'Мурманск', value: 2 }, { text: 'Адлер', value: 3 }, { text: 'Иркутск', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img12,
        question: 'Знаете, какой у нашей нейросети любимый тренд в развитии технологий? Тогда смотрите на картинку и все поймете!',
        answers: [{ text: 'Кибербезопасность', value: 1 }, { text: 'Метавселенная', value: 2 }, { text: '3D-печать', value: 3 }, { text: 'Виртуальный инфлюенсер', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img13,
        question: 'Ну это совсем легко! Нейросеть показала новый тренд в бизнесе и жизни. Что же это?',
        answers: [{ text: 'Экосистемность', value: 1 }, { text: 'Экологичность', value: 2 }, { text: 'Экономичность', value: 3 }, { text: 'Экотоксичность', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img14,
        question: 'Какой жанр музыки обожает нейросеть?',
        answers: [{ text: 'Поп', value: 1 }, { text: 'Фолк', value: 2 }, { text: 'Рок', value: 3 }, { text: 'Блюз', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img15,
        question: '«Скоро начнется белая полоса!» — фраза, которую иногда так хочется услышать… Нейросеть изобразила профессию человека, с которым можно обсудить будущее.',
        answers: [{ text: 'Нумеролог', value: 1 }, { text: 'Таролог', value: 2 }, { text: 'Астролог', value: 3 }, { text: 'Хиромант', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img16,
        question: 'Нейросеть предлагает попробовать новые летние хобби, запоминайте!',
        answers: [{ text: 'Серфинг', value: 1 }, { text: 'Вейкбординг', value: 2 }, { text: 'Сапсерфинг', value: 3 }, { text: 'Вейксерфинг', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img17,
        question: 'Это любимая фраза учителей! Догадались какая?',
        answers: [{ text: 'Закрываем учебники, достаем двойные листочки…', value: 1 }, { text: 'Лес рук…', value: 2 }, { text: 'К доске пойдет…', value: 3 }, { text: 'Звонок для учителя!', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img18,
        question: 'Подбираем модный лук! На какой популярный стиль предлагает обратить внимание нейросеть?',
        answers: [{ text: 'Оверсайз', value: 1 }, { text: 'Монохром', value: 2 }, { text: 'Футуризм', value: 3 }, { text: 'Анимализм', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img19,
        question: 'С каким городом у вас ассоциируется картинка от нейросети?',
        answers: [{ text: 'Иваново', value: 1 }, { text: 'Саратов', value: 2 }, { text: 'Краснодар', value: 3 }, { text: 'Пермь', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img20,
        question: 'Какой удобный сервис изобразила нейросеть?',
        answers: [{ text: 'Онлайн-шоппинг', value: 1 }, { text: 'Голосовой ассистент', value: 2 }, { text: 'Доставка продуктов', value: 3 }, { text: 'Электронная почта', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img21,
        question: 'Ох уж эти мемы с именами… Кого изобразила нейросеть?',
        answers: [{ text: 'Мы уронили вообще все, Наташ, честно!', value: 1 }, { text: 'Галя, отмена!', value: 2 }, { text: 'Даша путешественница', value: 3 }, { text: 'А мы в Домодедово, Зарина', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img22,
        question: 'Итак, перед вами студент одной очень интересной специальности! Какой?',
        answers: [{ text: 'Информационная безопасность', value: 1 }, { text: 'Биоинженерия', value: 2 }, { text: 'Астрономия', value: 3 }, { text: 'Прикладная физика', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img23,
        question: 'Как у вас с орнитологией? Какую птицу изобразила нейросеть?',
        answers: [{ text: 'Орёл', value: 1 }, { text: 'Сапсан', value: 2 }, { text: 'Сокол', value: 3 }, { text: 'Сова', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img24,
        question: 'Каждый мечтает побывать в этом месте. Догадались в каком?',
        answers: [{ text: 'Бора-Бора', value: 1 }, { text: 'Санторини', value: 2 }, { text: 'Мачу-Пикчу', value: 3 }, { text: 'Каппадокия', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img25,
        question: 'Следите за трендами? Тогда вы точно угадаете, какую валюту изобразила нейросеть.',
        answers: [{ text: 'Цифровой рубль', value: 1 }, { text: 'Биткоин ', value: 2 }, { text: 'Евро', value: 3 }, { text: 'Доллар', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img26,
        question: 'Как думаете, сюжет какой пословицы изобразила нейросеть?',
        answers: [{ text: 'Сделал дело — гуляй смело', value: 1 }, { text: 'Не откладывай на завтра то, что можешь сделать сегодня', value: 2 }, { text: 'Ни к селу ни к городу', value: 3 }, { text: 'Нет дыма без огня', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img27,
        question: 'Ох уж этот ретроградный меркурий… Нейросеть показала, какому знаку зодиака в этом месяце крупно повезет!',
        answers: [{ text: 'Дева', value: 1 }, { text: 'Лев', value: 2 }, { text: 'Стрелец', value: 3 }, { text: 'Весы', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img28,
        question: 'Вопрос для модников. Какой фэшн-мастхэв для девушек изобразила нейросеть?',
        answers: [{ text: 'Бананы', value: 1 }, { text: 'Карго', value: 2 }, { text: 'Велосипедки', value: 3 }, { text: 'Бермуды', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img29,
        question: 'Проверим, как хорошо вы знаете города России и чем они славятся. С каким городом у вас ассоциируется это лакомство?',
        answers: [{ text: 'Коломна', value: 1 }, { text: 'Казань', value: 2 }, { text: 'Ярославль', value: 3 }, { text: 'Тула', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img30,
        question: 'Барбизация интернета продолжается! Какого героя из сказок А. С. Пушкина в розовом обличии изобразила нейросеть?',
        answers: [{ text: 'Сватья баба Бабариха', value: 1 }, { text: 'Людмила', value: 2 }, { text: 'Шамаханская царица', value: 3 }, { text: 'Царевна Лебедь', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img31,
        question: 'Спорим, что вы не знаете все новые виды спорта? Угадайте, какой изобразила нейросеть?',
        answers: [{ text: 'Стритбол', value: 1 }, { text: 'Боссабол', value: 2 }, { text: 'Хоббихорсинг', value: 3 }, { text: 'Паддл', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img32,
        question: 'Вопрос для любителей спокойного досуга: какое хобби здесь изображено?',
        answers: [{ text: 'Вышивание', value: 1 }, { text: 'Вязание', value: 2 }, { text: 'Бисероплетение', value: 3 }, { text: 'Скрапбукинг', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img33,
        question: 'Достаем телескопы! Какую планету показала нейросеть?',
        answers: [{ text: 'Марс', value: 1 }, { text: 'Земля', value: 2 }, { text: 'Сатурн', value: 3 }, { text: 'Юпитер', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img34,
        question: 'Вспоминаем бабушкины сказки. Какого персонажа создала нейросеть?',
        answers: [{ text: 'Леший', value: 1 }, { text: 'Водяной', value: 2 }, { text: 'Чудо-юдо', value: 3 }, { text: 'Конек-Горбунок', value: 4 }],
        correctAnswer: 3

    },
    {
        img: img35,
        question: 'Эх, разгуляй! Догадаетесь, что здесь происходит?',
        answers: [{ text: 'День рождения', value: 1 }, { text: 'Свадьба', value: 2 }, { text: 'Новый год', value: 3 }, { text: 'Международный женский день', value: 4 }],
        correctAnswer: 2

    },
    {
        img: img36,
        question: 'Вопрос любителям домашних животных! В какую игру нейросеть предлагает сыграть с вашим питомцем?',
        answers: [{ text: 'Полоса препятствий', value: 1 }, { text: 'Догонялки', value: 2 }, { text: 'Прятки', value: 3 }, { text: 'Фрисби', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img37,
        question: 'Что танцуют на этой нейрокартине? ',
        answers: [{ text: 'Балет', value: 1 }, { text: 'Сальса', value: 2 }, { text: 'Танго', value: 3 }, { text: 'Вальс', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img38,
        question: 'Какой термин изобразила нейросеть?',
        answers: [{ text: 'Анонимность', value: 1 }, { text: 'Шифрование', value: 2 }, { text: 'Аутентификация', value: 3 }, { text: 'Блокчейн ', value: 4 }],
        correctAnswer: 4

    },
    {
        img: img39,
        question: 'Нейросеть поговорила с HR и показала, какое качество хотят видеть работодатели в сотрудниках. Догадались?',
        answers: [{ text: 'Внимательность', value: 1 }, { text: 'Коммуникабельность', value: 2 }, { text: 'Инициативность', value: 3 }, { text: 'Пунктуальность', value: 4 }],
        correctAnswer: 1
    }

]



class State {
    constructor() {
        makeAutoObservable(this);
    }

    private _questions: IQuestion[] = questions;
    private _currentQuestions: IQuestion[] = []
    private _usedQuestions: IQuestion[] = []
    private _currentQuestion: number = 0
    private _currentAnswer: number = 0
    private _coins: number = 0
    private _isCorrect: boolean | null = null

    public startGame() {
        this._currentQuestion = 0
        this._currentAnswer = 0
        this._coins = 0
        this._isCorrect = null
        if (this._usedQuestions.length === this._questions.length) {
            this._usedQuestions = []
        }
        
        const unusedQuestions = this._questions.filter(question => !this._usedQuestions.includes(question));
        const randomQuestions = unusedQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
        this._currentQuestions = randomQuestions;
        this._usedQuestions = [...this._usedQuestions, ...randomQuestions];

        if (this._currentQuestions.length === 9) {
            this._currentQuestions.push(this._usedQuestions[0]);
        }

    }

    public getCurrentQuestions(): IQuestion[] {
        return this._currentQuestions
    }

    public getCurrentQuestion(): number {
        return this._currentQuestion
    }

    public setCurrentQuestion(number: number): void {
        this._currentQuestion = number
    }

    public getCurrentAnswer(): number {
        return this._currentAnswer
    }

    public setCurrentAnswer(number: number): void {
        this._currentAnswer = number
    }

    public setCoins(number: number): void {
        this._coins = number
    }

    public getCoins(): number {
        return this._coins
    }

    public getIsCorrect(): boolean | null {
        return this._isCorrect
    }

    public setIsCorrect(): void {
        this._isCorrect = this._currentAnswer === this._currentQuestions[this._currentQuestion].correctAnswer
    }

    public resetIsCorrect(): void {
        this._isCorrect = null
    }
}

export default new State();