import { FC } from 'react'
import Container from '../../commons/components/Container'
import SectionsLayout from '../../layouts/SectionsLayout'
import Banners from './Banners'
import HeroSlider from './HeroSlider'
import Honours from './Honours'
import Club from './Club'

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
  return (
    <div className="bg-[#00091a]">
      <Container>
        <HeroSlider />
        <SectionsLayout>
          <Banners />
          <Club />
          <Honours />
        </SectionsLayout>
      </Container>
    </div>
  )
}

export default HomePage
