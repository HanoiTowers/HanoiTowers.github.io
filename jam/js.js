let first = document.querySelector('#first')
let startX
let startY
first.addEventListener('dragstart', function(event){
 
 startX = event.offsetX
 startY = event.offsetY

}) 


first.addEventListener('dragend', function(event){
    
    first.style.top = (event.pageY - startY) + 'px'
    first.style.left = (event.pageX -  startX )+ 'px'
    console.log(event.clientX, event.clientY)
}) 
