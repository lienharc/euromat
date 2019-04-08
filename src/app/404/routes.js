import FourZeroFour from './components/index'
import i18n from './i18n'

export default [
  {
    path: '*',
    name: '404',
    component: FourZeroFour,
    meta: {
      title: {
        de: i18n.de.fourzerofour.title,
        en: i18n.en.fourzerofour.title
      }
    }
  }
]
