;(function() {
  function $(id) {
    return document.getElementById(id)
  }

  var imgs = ['出月饼 只要998.jpg', '害你加班的bug就是我写的.png', '带上它你将得到力量.jpeg', '要坚强.png', '交个朋友吧.png', '世风日下道德沦丧.png']
  var cvs = $('cvs')
  var btn = $('btn')
  var left = $('left')
  var right = $('right')
  var input = $('input')
  var preview = $('preview')
  var imageContainer = $('image')
  var defaultText = imgs[0]
  var current = Math.floor(Math.random() * 100 % imgs.length)
  console.log(current)
  var img

  preview.crossOrigin = 'anonymous'


  for (var i = 0; i < imgs.length; i++) {
      img = document.createElement('img')
      img.src = './' + imgs[i]
      img.id = 'img' + i
      imageContainer.appendChild(img)
  }

  img.onload = function() {
    convert ()
  }

  function renderImage (src) {
    ctx = cvs.getContext('2d')
    ctx.clearRect(0, 0, 300, 300)
    var cur = $('img' + current)
    ctx.drawImage(cur, 0, 0, cur.width, cur.height)
    ctx.font = 'bold 20px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'red'
    ctx.fillText(src.replace(/.\//,'').replace(/\.[\d\D]+/,''), cvs.width / 2, cvs.height - 10, cur.width)
    preview.src = cvs.toDataURL('image/png')
  }

  btn.addEventListener('click', function(e) {
      e.preventDefault()
      var value = input.value
      if (value) {
        renderImage(value)
      }
    }, false
  )

  right.addEventListener( 'click', function(e) {
      e.preventDefault()
      if (current === imgs.length - 1) {
        current = 0
      } else {
        current++
      }
      convert()
    }, false
  )

  left.addEventListener( 'click', function(e) {
      e.preventDefault()
      if (current < 1) {
        current = imgs.length - 1
      } else {
        current--
      }
      convert()
    }, false
  )

  function convert () {
    defaultText = imgs[current]

    renderImage('./' + defaultText)
    input.value = defaultText.replace(/\.[\d\D]+/,'')
  }
})()
