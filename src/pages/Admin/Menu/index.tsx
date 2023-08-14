import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from './constants'

interface IAdminMenuProps {}

const Menu: FC<IAdminMenuProps> = () => {
  return (
    <aside className="px-3 border-r-2 border-r-[#384256]">
      {menu.map((item) => {
        if (item?.submenu) {
          console.log(123)
        }
        return (
          <div className="flex flex-col gap-3 mb-5" key={item.title}>
            <NavLink
              to={item.url}
              className="flex items-center gap-3 p-3 rounded-md hover:bg-primary"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="hidden lg:block">{item.title}</span>
            </NavLink>
          </div>
        )
      })}
    </aside>
  )
}

export default Menu
