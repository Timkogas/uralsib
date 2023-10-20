import { makeAutoObservable } from 'mobx';
import img from '../assets/images/test-img.png'


interface IQuestion {
    img: string;
    question: string;
    answers: { value: number, text: string }[];
    correctAnswer: number;
}

const questions: IQuestion[] = [
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?1',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1

    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?2',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?3',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?4',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?5',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?6',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?7',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?8',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?9',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?10',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?11',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?12',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?13',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?14',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?15',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?16',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?17',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?18',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?19',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
        correctAnswer: 1
    },
    {
        img: img,
        question: 'Какая народная пословица зашифрована на картинке?20',
        answers: [{ text: 'Поспешишь — людей насмешишь', value: 1 }, { text: 'Нет дыма без огня', value: 2 }, { text: 'Тише едешь — дальше будешь', value: 3 }, { text: 'Глаза — зеркало души', value: 4 }],
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
        
        const unusedQuestions = this._questions.filter(question => !this._usedQuestions.includes(question));
        const randomQuestions = unusedQuestions.sort(() => Math.random() - 0.5).slice(0, 10);
        this._currentQuestions = randomQuestions;
        this._usedQuestions = [...this._usedQuestions, ...randomQuestions];

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
        console.log(this._isCorrect)
    }

    public resetIsCorrect(): void {
        this._isCorrect = null
    }
}

export default new State();