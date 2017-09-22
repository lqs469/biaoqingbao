;(function() {
  function $(id) {
    return document.getElementById(id)
  }

  var imgs = [
    '改不了 这个需求改不了.jpg',
    '说！以后还敢不敢加需求.jpg',
    '又忘了发周报了.jpg',
    '这里没有我这条咸鱼的容身之地.jpg',
    '代码里有毒！.jpg',
    '这周周报就决定你来写了.jpg',
    '歪！请问你有freestyle吗？.jpg',
    '我没说过这句话.jpg',
    '哟 写bug呢.jpg',
    '出月饼 只要998.jpg',
    '害你加班的bug就是我写的.jpg',
    '带上它你将得到力量.jpeg',
    '要坚强.jpg',
    '交个朋友吧.jpg',
    '世风日下道德沦丧.jpg'
  ]
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
