import styles from './page.module.css'

const mock: string[] = ['Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
    'был запущен в 2003 году. Портал предоставляет пользователям информацию о фильмах и их создателях, новости\n' +
    '                кино, интервью с актерами и другими знаменитостями, рецензии пользователей, расписание сеансов в\n' +
    '                кинотеатрах, ТВ-программу и другие разделы.', 'Сайт был создан 7 ноября 2003 года, его основатели — Виталий Таций и Дмитрий Суханов. Владельцем проекта\n' +
    '                являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её\n' +
    '                совладельцу — французской компании ООО AlloCiné. 15 октября 2013 года сервис купила компания «Яндекс»\n' +
    '                (размер сделки — $80 млн, около 2,6 млрд рублей на то время).'
]

export default function Page() {
    return (
        <div className={styles.about}>
            <h2 className={styles.title}>О нас</h2>
            {mock.length > 0 && mock.map((element, id) => <p key={id}>{element}</p>)}
        </div>
    )
}