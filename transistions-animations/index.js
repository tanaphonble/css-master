
(function () {

  const changeBgButton = document.getElementById('change-bg')
  const playAnimButton = document.getElementById('play-anim')



  document.body.addEventListener('transitionend', function () {
    console.log('transition end')
  })

  changeBgButton.addEventListener('click', function () {
    document.body.classList.toggle('change')
  })

  playAnimButton.addEventListener('click', function () {
    document.getElementById('anim').classList.add('running')
  })
})()

