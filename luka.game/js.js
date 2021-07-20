  function pressButton1(){
    ctx.clearRect(0, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (125, 175, 125, 25)
    ctx.fillStyle='green' 
    ctx.fillRect (50,175, 25,25)
   }
   function pressButton2(){
    ctx.clearRect(0, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (125, 175, 125, 25)
    ctx.fillStyle='green' 
    ctx.fillRect (50,175, 25,25)
   }
   function pressButton3(){
    ctx.clearRect(0, 175, 125, 25)
    ctx.fillStyle='blue'
    ctx.fillRect (275, 175, 125, 25)
    ctx.fillStyle='green' 
    ctx.fillRect (50,175, 25,25)
   }
   
 var
   //x, y, w, h
      canvas = document.getElementById('game')
      ctx = canvas.getContext('2d')
      //1 столб
      ctx.fillStyle='green'
      ctx.fillRect(50, 0, 25, 200 )
      //2 столб
      ctx.fillStyle='green'
      ctx.fillRect(175, 0, 25, 200 )
      //3 столб
      ctx.fillStyle='green'
      ctx.fillRect(325, 0, 25, 200 )
      //1 square
      ctx.fillStyle='blue'
      ctx.fillRect (0, 175, 125, 25) 
   


