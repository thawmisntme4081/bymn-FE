import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface IMenu {
  title: string
  url: string
  icon: IconDefinition
  submenu?: IMenu[]
}
