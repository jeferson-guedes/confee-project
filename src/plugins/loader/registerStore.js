const registerStore = store => {
  store.registerModule('LOADER', {
    state: {
      show: false
    }
  })
}

export default registerStore
