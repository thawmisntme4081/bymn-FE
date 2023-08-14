import { FC } from 'react'
import useTitle from '../../commons/hooks/useTitle'

interface HonoursProps {}

const Honours: FC<HonoursProps> = () => {
  useTitle('title.HONOURS')
  return <p>Honours nè</p>
}

export default Honours
