import fetcher from '@/utils/fetcher'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import typograf, { parser } from '@/utils/typograf';
import Button from '@/components/Button/Button';
import String from '@/blocks/String/String';
import styles from './index.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.body}>
        <String />
        <div className={styles.wrapper}>
          <div className={styles.video_container}>
            <video 
              autoPlay 
              playsInline 
              loop 
              muted 
              width="100%" 
              height="100%"  
              className={styles.video}
              src="/images/show.mp4" />
          </div>

          <div className={styles.footer}>
            <div className={styles.first}>
              <img className={styles.img} src="/images/logo.svg"/>
              <div className={styles.text}>сайт находится в разработке</div>
            </div>
            <Button className={styles.Button}/>
          </div>
        </div>
      </div>
    </>
  )
}

// export async function getStaticProps() {
  // const response = await fetcher('api/page/home', ctx);

  // return {
  //   props: {
  //     ...data,
  //     ...response
  //   },
  //   revalidate: 10
  // }

//   return {
//     props: {
//       attributes: {
//         stories: [
//           {
//             media: '/images/promo/promo-1.png',
//             title: 'Комплексные решения для здравоохранения',
//             info: 'Наш профиль — реализация лекарственных средств и лизинг медицинской техники',
//             story_text: 'Комплексные решения для здравоохранения'
//           },
//           {
//             media: '/images/promo/promo-2.png',
//             title: 'Лизинг медицинского оборудования',
//             info: 'Гибкие условия для сотрудничества',
//             story_text: 'Лизинг медицинского оборудования'
//           },
//           {
//             media: '/images/promo/promo-3.png',
//             title: 'Широкие возможности для развития бизнеса',
//             info: 'Надежное партнерство с медицинскими организациями',
//             story_text: 'Широкие возможности для развития бизнеса '
//           },
//         ],
//         info:
//         {
//           header: 'О компании',
//           text: 'Специализированная лизинговая компания занимается поставками медицинского оборудования и лекарственных средств. Партнерство с крупнейшими производителями делает СПЕЦМЕДЛИЗИНГ надежным и перспективным поставщиком для медицинских организаций по всей стране.'
//         },
//         project: [
//           {
//             title: 'Получатель',
//             subtitle: 'Юридические лица'
//           },
//           {
//             title: 'Предмет лизинга',
//             subtitle: 'Медицинское оборудование'
//           },
//           {
//             title: 'Стоимость оборудования',
//             subtitle: 'От 600 000 рублей'
//           },
//           {
//             title: 'Срок лизинга',
//             subtitle: 'От 12 месяцев с возможностью досрочного погашения'
//           },
//           {
//             title: 'Авансовый платеж',
//             subtitle: 'От 20% до 40%'
//           },
//           {
//             title: 'Лизинговые платежи',
//             subtitle: 'Юридические лица'
//           },
//         ],
//         quote: {
//           img: '/images/quote.png',
//           title: 'Лизинговые платежи',
//           subtitle: 'Юридические лица',
//           discription: 'Компания имеет прямые контракты с фармацевтическими производителями и предлагает своим клиентам изделия медицинского назначения, лекарственную и косметическую продукцию'
//         },
//         advantages: [
//           {
//             img: '/images/advant/advant-1.svg',
//             text: 'Решение комплексных задач для медицинских организаций'
//           },
//           {
//             img: '/images/advant/advant-2.svg',
//             text: 'Высокие этические стандарты ведения бизнеса'
//           },
//           {
//             img: '/images/advant/advant-3.svg',
//             text: 'Доставка продукции в любой регион России'
//           },
//           {
//             img: '/images/advant/advant-4.svg',
//             text: 'Особые условия для постоянных и надежных партнеров'
//           }
//         ],
//         hards: [
//           {
//             img: '/images/hard/hard-1.png',
//             text: 'УЗИ'
//           },
//           {
//             img: '/images/hard/hard-2.png',
//             text: 'Томографы'
//           },
//           {
//             img: '/images/hard/hard-3.png',
//             text: 'Рентгены'
//           },
//           {
//             img: '/images/hard/hard-4.png',
//             text: 'Эндоскопы'
//           },
//           {
//             img: '/images/hard/hard-5.png',
//             text: 'Стоматология'
//           },
//           {
//             img: '/images/hard/hard-6.png',
//             text: 'Другое'
//           },
//         ],
//         sphere: [
//           {
//             img: '/images/sphere/sphere-1.svg',
//             text: 'Индустрия красоты'
//           },
//           {
//             img: '/images/sphere/sphere-2.svg',
//             text: 'Стоматология'
//           },
//           {
//             img: '/images/sphere/sphere-3.svg',
//             text: 'Пищевая промышленность'
//           },
//           {
//             img: '/images/sphere/sphere-4.svg',
//             text: 'Хирургия'
//           },
//           {
//             img: '/images/sphere/sphere-5.svg',
//             text: 'Уход за пациентами'
//           },
//           {
//             img: '/images/sphere/sphere-6.svg',
//             text: 'Лабораторные исследования'
//           },
//           {
//             img: '/images/sphere/sphere-7.svg',
//             text: 'Спортивные учреждения'
//           },
//           {
//             img: '/images/sphere/sphere-8.svg',
//             text: 'Аптеки'
//           }
//         ],
//         documents: [
//           {
//             img: '/images/documents/document-1.png',
//             text: 'Уведомление о предоставлении лицензии',
//             doc: '/pdf/Выписка из реестра лицензий.pdf'
//           },
//           {
//             img: '/images/documents/document-2.png',
//             text: 'Лицензии на деятельность Медспецлизинг',
//             doc: '/pdf/Лицензии на деятельность Медспецлизинг.pdf'
//           },
//           {
//             img: '/images/documents/document-3.png',
//             text: 'Выписка из реестра лицензий',
//             doc: '/pdf/Выписка из реестра лицензий.pdf'
//           },
//           // {
//           //   img: '/images/documents/document-4.png'
//           // },
//         ],
//         main_links: {
//           link: 'Контакт',
//           name: 'krhf'
//         }
//       }
//     }
//   }
// }


