var diskDrag = false
let startX
let startY
 function mouseDown(event){
  startX= event.offsetX
  startY= event.offsetY
   diskDrag = !diskDrag
   console.log(diskDrag)
   console.log( startX, startY )
 }
 
 
  function mouseMove(event){
    if(!diskDrag)
    return;
    let home = document.getElementById('home')
    
    let x = home.style.padding = "1px" 
    console.log(x)
    let boy = document.getElementById('boy')
    boy.style.position='absolute'

    boy.style.left = (event.pageX - 6 - startX) + 'px'
    boy.style.top = (event.pageY - 6 - startY ) + 'px'
  }
