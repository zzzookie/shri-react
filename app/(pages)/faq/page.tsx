import React from 'react'
import Card from '../../components/Card'
import Accordeon from './components/Accordeon'

export default function Faq() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Card title={'Вопросы-ответы'} />
      <Accordeon cards={accordeonCards} />
    </div>
  )
}

const accordeonCards = [
  {
    title: 'Что такое Билетопоиск?',
    description: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
  },
  {
    title: 'Какой компании принадлежит Билетопоиск?',
    description: 'Билетопоиск принадлежит компании Скедня. Мы являемся крупнейшим сервисом о кино в рунете и предоставляем пользователям возможность насладиться просмотром фильмов и сериалов, а также приобрести билеты в кино, узнать рейтинги, интересные факты, оставить отзывы и многое другое.'
  },
  {
    title: 'Как купить билет на Билетопоиск?',
    description: 'Чтобы купить билет на Билетопоиск, вам следует выполнить несколько простых шагов. Сначала выберите фильм или сериал, на который вы хотите пойти. Затем выберите удобное для вас кино- или онлайн-кинотеатр, указав город и дату сеанса. После этого выберите места и оплатите билеты с помощью доступных на сайте способов оплаты. После успешной оплаты вам будет предоставлен электронный билет, который можно распечатать или предъявить на мобильном устройстве в кассе кинотеатра.'
  },
  {
    title: 'Как оставить отзыв на Билетопоиск?',
    description: 'Чтобы оставить отзыв на Билетопоиск, вам необходимо выполнить следующие действия. Войдите на сайт Билетопоиска с помощью своего аккаунта или зарегистрируйтесь, если у вас его еще нет. Затем найдите фильм или сериал, на который вы хотите оставить отзыв, и перейдите на его страницу. Там вы увидите раздел для отзывов или комментариев. Нажмите на кнопку "Оставить отзыв" или "Написать комментарий" и заполните соответствующую форму. После завершения написания отзыва нажмите кнопку "Отправить" или "Опубликовать", и ваш отзыв будет опубликован на сайте Билетопоиска.'
  },
]