
//первое кольцо сделал 
    function pressButton1(){
    ctx.clearRect(125, 175, 125, 25)
    ctx.clearRect(275, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (0, 175, 125, 25)
   }
   function pressButton2(){
    ctx.clearRect(0, 175, 125, 25)
    ctx.clearRect(275, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (125, 175, 125, 25)
   }
   function pressButton3(){
    ctx.clearRect(0, 175, 125, 25)
    ctx.clearRect(125, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (275, 175, 125, 25)
   }

//второе кольцо сделал 
function pressButton1Punkt2(){
  ctx.clearRect(285, 150, 95, 25)
  ctx.clearRect(130,150, 95,25)
  ctx.fillStyle='red'
  ctx.fillRect(15, 150, 95, 25)
 }
 function pressButton2Punkt2(){
  ctx.clearRect(15, 150, 95, 25)
  ctx.clearRect(285, 150, 95, 25)
  ctx.fillStyle='red'
  ctx.fillRect (130,150, 95,25)
 }
 function pressButton3Punkt2(){
  ctx.clearRect(15, 150, 95, 25)
  ctx.clearRect(130,150, 95,25)
  ctx.fillStyle='red'
  ctx.fillRect (285, 150, 95, 25)
 }
//третье кольцо
function pressButton1Punkt3(){
  ctx.clearRect(300, 125, 65, 25)
  ctx.clearRect(150, 125, 65, 25)
  ctx.fillStyle='black'
  ctx.fillRect (30, 125, 65, 25)
 }
 function pressButton2Punkt3(){
  ctx.clearRect(30, 125, 65, 25)
  ctx.clearRect(300, 125, 65, 25)
  ctx.fillStyle='black'
  ctx.fillRect (150, 125, 65, 25)
 }
 function pressButton3Punkt3(){
  ctx.clearRect(30, 125, 65, 25)
  ctx.clearRect(150, 125, 65, 25)
  ctx.fillStyle='black'
  ctx.fillRect (300, 125, 65, 25)
 }
 var
   //x, y, w, h
      canvas = document.getElementById('game')
      ctx = canvas.getContext('2d')
//1 столб
      ctx.fillStyle='green'
      ctx.fillRect(50, 0, 15, 200 )
//2 столб
      ctx.fillStyle='green'
      ctx.fillRect(175, 0, 15, 200 )
//3 столб
      ctx.fillStyle='green'
      ctx.fillRect(325, 0, 15, 200 )
//1 square
      ctx.fillStyle='blue'
      ctx.fillRect (0, 175, 125, 25)
//2 square
      ctx.fillStyle='red'
      ctx.fillRect (15, 150, 95, 25)
//3 square
ctx.fillStyle='black'
      ctx.fillRect (30, 125, 65, 25) 


   


