import {
  faHandshake,
  faHouse,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { IMenu } from './interfaces'

export const menu: IMenu[] = [
  {
    title: 'Homepage',
    url: '/admin',
    icon: faHouse,
  },
  {
    title: 'Club',
    url: '/admin/club',
    icon: faUsers,
    submenu: [
      {
        title: 'Club',
        url: '/admin/club',
        icon: faUsers,
      },
      {
        title: 'Club',
        url: '/admin/club',
        icon: faUsers,
      },
      {
        title: 'Club',
        url: '/admin/club',
        icon: faUsers,
      },
    ],
  },
  {
    title: 'Partners',
    url: '/admin/partners',
    icon: faHandshake,
  },
]
