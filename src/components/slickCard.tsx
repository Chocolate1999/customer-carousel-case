import { useMemo, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from './style.module.css'
import { clsxm } from '@/utils'
import Card from './card'

const SwiperCard = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const settings = useMemo(() => {
    return {
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      centerMode: true,
      className: 'center',
      infinite: true,
      arrows: false,
      centerPadding: '40px',
      slidesToShow: 3,
      autoplay: true,
      focusOnSelect: true,
      speed: 500,
      autoplaySpeeds: 2000,
      beforeChange: (_: number, index: number) => {
        setActiveIndex(index)
      },
      customPaging: (id: number) => {
        return (
          <p
            className={clsxm(
              style.card_title,
              'text-black opacity-30',
              id === activeIndex && style.isShow,
              style.filter_gray
            )}
          >
            Logo {id}
          </p>
        )
      },
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            centerPadding: '-190px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 834,
          settings: {
            centerPadding: '20px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    }
  }, [activeIndex])

  const slickData = [
    { id: 1, text: 1 },
    { id: 2, text: 2 },
    { id: 3, text: 3 },
    { id: 4, text: 4 },
    { id: 5, text: 5 },
    { id: 6, text: 6 },
    { id: 7, text: 7 }
  ]

  return (
    <Slider
      {...settings}
      className={clsxm(style.slider_wrapper, 'mx-auto mt-[200px]')}
    >
      {slickData.map((_, index) => {
        return (
          <div
            className={clsxm(
              'relative flex h-full',
              style.card_container,
              index === activeIndex && style.scale_card
            )}
            key={index}
          >
            <div className="z-1 h-full">
              <Card idx={index} key={_.id}/>
            </div>
            <section className="absolute top-0 right-0 left-0 bottom-0 z-10 h-full w-full p-8">
              <div className="relative flex h-full w-full flex-col items-start justify-end">
                <div className="h-[72px]">
                  <p className={clsxm(style.card_title, 'text-white')}>
                    Logo {index}
                  </p>
                </div>
                <p className={clsxm('mt-6', style.card_title, 'text-white')}>
                  客户 {index} 标题
                </p>
                <p className={clsxm('mt-4', style.card_desc)}>
                  客户 {index}{' '}
                  描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述
                </p>
                <button className={clsxm('mt-[40px]', style.card_button)}>
                  <a
                    href={'/'}
                    className={clsxm(style.button_text, 'cursor-pointer')}
                  >
                    了解更多
                  </a>
                </button>
              </div>
            </section>
          </div>
        )
      })}
    </Slider>
  )
}

export default SwiperCard
