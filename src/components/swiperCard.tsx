import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import style from './style.module.css'
import { clsxm } from '@/utils'

const SwiperCard = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>'
    }
  } as any

  const map = [
    { text: 1 },
    { text: 2 },
    { text: 3 },
    { text: 4 },
    { text: 5 },
    { text: 6 }
  ]

  return (
    <div className={clsxm('mt-[160px]')}>
      <Swiper
        pagination={pagination}
        loop={true}
        loopedSlides={6}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={50}
        onClick={(swiper) => {
          swiper.slideTo(swiper.clickedIndex)
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className={clsxm(style.swiper)}
      >
        {map.map((item, index) => {
          return (
            <SwiperSlide
              className={clsxm(
                style.swiper_slide,
                'text-center flex items-center justify-center'
              )}
              key={index}
            >
              {(_) => {
                return <p>{item.text}</p>
              }}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperCard
