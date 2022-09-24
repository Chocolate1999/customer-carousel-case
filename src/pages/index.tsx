import SwiperCard from '@/components/swiperCard'
import { clsxm } from '@/utils'
import style from './style.module.css'

const Home = () => {
  return (
    <div className={clsxm('h-[100vh]')}>
      <p className={clsxm('text-center pt-12', style.title_bg)}>
        customer carousel case
      </p>
      <SwiperCard />
    </div>
  )
}

export default Home
