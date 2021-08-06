let trueDisk 
let trueTower



function whatTow(numTow) {
  trueTower=numTow
  console.log(trueTower)
}

function whatDisk(numDisk) {
let ob1 = document.getElementById('ob1')
  trueDisk=numDisk
  switch(trueDisk){
    case 1:
      switch(trueTower){
        case 1:
          alert('первый диск на первую башню')
          
          ob1.style.left = 125 +"px"
          ob1.style.top = 190 +"px" 
        break
        case 2:
          alert('первый диск на 2 башню')
          
          ob1.style.left = 225 +"px"
          ob1.style.top = 190 +"px" 
        break
        case 3:
          alert('первый диск на 3 башню')
          
          ob1.style.left = 325 +"px"
          ob1.style.top = 190 +"px" 
        break
      } 
    break
    case 2:
      switch(trueTower){
        case 1:
          alert('2 диск на 1 башню')
        break
        case 2:
          alert('2 диск на 2 башню')
        break
        case 3:
          alert('2 диск на 3 башню')
        break
      } 
    break
    case 3:
      switch(trueTower){
        case 1:
          alert('3 диск на 1 башню')
        break
        case 2:
          alert('3 диск на 2 башню')
        break
        case 3:
          alert('3 диск на 3 башню')
        break
      } 
    break
  } 
  console.log(trueDisk)
}
function cord(event){
  console.log(event.pageX, event.pageY)
}
