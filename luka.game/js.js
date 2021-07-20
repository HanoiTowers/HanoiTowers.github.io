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
      
let x = 0
 document.onkeypress = function(event){
   console.log(event)
   //button1
   if(event.code=='Digit1')
   {
    let codeNumber = Number(prompt('куда переместить 1 кольцо'))
   }
   
   if (codeNumber = 2){
     ctx.clearRect(0, 175, 125, 25)
     ctx.fillRect (125, 175, 125, 25)
     ctx.fillStyle='green' 
     ctx.fillRect (50,175, 25,25)
   }
 }



