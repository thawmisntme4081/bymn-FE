import { FC, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

interface ClubItemProps {}

const ClubItem: FC<ClubItemProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link to={'/clubs'}>
      <div
        className={`bg-[#121f38] m-2 flex-col-between transition ease-in-out delay-200 hover:bg-[#243047] hover:shadow-[rgb(0,0,0)_0px_4px_16px]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`${isHovered ? 'hover:scale-105' : ''}`}>
          <LazyLoadImage
              src="https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_600,c_fill/q_auto/cms/public/images/fcbayern-com/media/images/homepage/fans/fans_ima_280312.jpg"
              alt="Club showcase"
            />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold">MEMBERSHIP</p>
          <p className="mt-1 text-xl font-bold">33</p>
        </div>
      </div>
    </Link>
  )
}

export default ClubItem
