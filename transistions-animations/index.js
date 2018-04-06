
(function () {
  const button = document.getElementById('button')

  document.body.addEventListener('transitionend', function () {
    console.log('transition end')
  })

  document.body.addEventListener

  button.addEventListener('click', function () {
    document.body.classList.toggle('change')
  })
})()

