import LoaderFactory from './loaderFactory'
import registerStore from './registerStore'
import PageLoader from './components/page-loader'

const install = (Vue, store) => {
  Vue.component('PageLoader', PageLoader)

  registerStore(store)

  Object.defineProperty(Vue.prototype, '$loader', {
    get () {
      console.log(this)
      return LoaderFactory(this)
    }
  })
}

export default { install }
