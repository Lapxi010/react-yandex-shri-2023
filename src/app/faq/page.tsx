import {QuestionAnswerBlock} from '@/components/QuestionAnswerBlock/QuestionAnswerBlock';

import styles from './page.module.css'

interface mockT {
    question: string,
    answer: string,
    id: string
}

const mock: mockT[] = [{
    id: 'f289a4df-9800-4e42-b179-f76efd4a1432',
    question: 'Что такое Билетопоиск?',
    answer: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
},
    {
        id: '513e562f-6c02-4f9c-81c2-8c530880c090',
        question: 'Какой компании принадлежит Билетопоиск?',
        answer: 'Билетопоиск принадлежит Яндексу и над ней трудятся студетны ШРИ и других школ Яндекса!'
    },
    {
        id: '39464930-7e26-47f4-a877-068034c95733',
        question: 'Как купить билет на Билетопоиск?',
        answer: 'Очень просто, достаточно выбрать понравившыйся фильм, добавить в коорзину, сделать скриншот корзины и отправить скриншот @Lapxi010 в тг!'
    },
    {
        id: '83f8e9aa-c66a-488d-94b8-e590f1a6113f',
        question: 'Как оставить отзыв на Билетопоиск?',
        answer: 'Если вы хотите оставить положительный отзыв о Билетопоиске, то вам достаточно написать в тг @Lapxi010, а если отрицательный, то ничего не надо оставлять :)'
    }
]

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <h2>Вопросы-ответы</h2>
            </div>
            <div className={styles.content}>
                {mock.length > 0 && mock.map(block =>
                    <QuestionAnswerBlock
                        key={block.id}
                        answer={block.answer}
                        question={block.question}
                    />
                )}
            </div>
        </div>
    )
}