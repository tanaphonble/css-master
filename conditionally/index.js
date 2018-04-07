(function () {
  const isLandScape = matchMedia('(orientation: landscape)')

  const toggleClass = (mq) => {
    if (mq.matches) {
      document.body.style.background = '#fff'
    } else {
      document.body.style.background = '#000'
    }
  }

  isLandScape.addListener(toggleClass)
})()