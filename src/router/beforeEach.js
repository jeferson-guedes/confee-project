import store from '../vuex'

const isAuthRouter = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  if (!isAuthRouter(to) && !isLogged()) {
    next('/auth')
  } else {
    next()
  }
}
