var ani = function () {
  var div = document.querySelector('.to')
  var target = document.querySelector('img:nth-child(6)')

  div.removeChild(target)
  var first = document.querySelector('img:nth-child(1)')
  div.insertBefore(target,first)
}
setInterval(ani,1000)
