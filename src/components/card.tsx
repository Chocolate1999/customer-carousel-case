import { clsxm } from '@/utils'
type IProps = {
  idx: number
}

const Card = ({ idx }: IProps) => {
  return (
    <div
      className={clsxm(
        'w-[500px] h-[400px] border-[1px] border-solid	border-black border-opacity-30 rounded-[12px] bg-opacity-70',
        idx === 0 && 'bg-[#747bff]',
        idx === 1 && 'bg-[#89DDFF]',
        idx === 2 && 'bg-[#FFCB6B]',
        idx === 3 && 'bg-[#C3E88D]',
        idx === 4 && 'bg-[#bcc0ff]',
        idx === 5 && 'bg-[#42d392]',
        idx === 6 && 'bg-[#155f3e]'
      )}
    />
  )
}

export default Card
