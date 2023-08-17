import { FC } from 'react'
import Section from '../../../commons/components/Section'
import Slider from 'react-slick'
import ClubItem from './ClubItem'
import { Link } from 'react-router-dom'

interface ClubProps {}
const LENGTH = 3

const Club: FC<ClubProps> = () => {
  const settings = {
    // speed: 500,
    infinite: false,
    slidesToShow: 3,
  }

  return (
    <Section title='Club'>
      <Slider {...settings} className="mb-9">
        {[...Array(LENGTH)].map((_, index) => (
          <ClubItem key={index} />
        ))}
      </Slider>
      <Link
        to="/clubs"
        className="bg-[#121f38] hover:bg-[#243047] px-3.5 rounded h-10 font-semibold inline-block leading-10"
      >
        All achievements
      </Link>
    </Section>
  )
}

export default Club
