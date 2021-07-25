let numDisk

var diskDrag = false
let startX
let startY

function mouseDown1(event){
  startX= event.offsetX
  startY= event.offsetY
  diskDrag = !diskDrag
   numDisk = 1
  
}
function mouseDown2(event){
  startX= event.offsetX
  startY= event.offsetY
  diskDrag = !diskDrag
   numDisk = 2
}
function mouseDown3(event){
  startX= event.offsetX
  startY= event.offsetY
  diskDrag = !diskDrag
   numDisk = 3  
}
 function mouseUp(event){
   diskDrag = !diskDrag
   console.log(ob1.style.left, ob1.style.top )
   console.log(event.pageX, event.pageY)
   if(ob1.style.left<=150 || ob1.style.left>=100){
    ob1.style.left= 127 +'px'
    ob2.style.top = 223 + 'px'
    diskDrag = !diskDrag
   }

 }
 
 
function mouseMove(event){
  if(!diskDrag){
    return;
  }
  if(numDisk == 1){
    let ob1 = document.getElementById('ob1')
    ob1.style.position='absolute'
    ob1.style.left = (event.pageX - 6 - startX) + 'px'
    ob1.style.top = (event.pageY - 6 - startY ) + 'px'
  }
  if(numDisk == 2){
    let ob2 = document.getElementById('ob2')
    ob2.style.position='absolute'
    ob2.style.left = (event.pageX - 6 - startX) + 'px'
    ob2.style.top = (event.pageY - 6 - startY ) + 'px'
  }
  if(numDisk == 3){
    let ob3 = document.getElementById('ob3')
    ob3.style.position='absolute'
    ob3.style.left = (event.pageX - 6 - startX) + 'px'
    ob3.style.top = (event.pageY - 6 - startY ) + 'px'
  }
}
function mouseUp(event){
  diskDrag = !diskDrag
  
  console.log(event.pageX, event.pageY)
  let ob1 = document.getElementById('ob1')
  if(ob1.style.left<=150 || ob1.style.left>=100){
   ob1.style.left= 127 +'px'
   ob2.style.top = 223 + 'px'
   diskDrag = !diskDrag
  }

}
