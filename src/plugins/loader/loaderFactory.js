const loaderFactory = context => {
  return {
    show () {
      console.log({show: context})
    },
    hide () {
      console.log({hide: context})
    }

  }
}

export default loaderFactory
