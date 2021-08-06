let trueDisk 
let trueTower



function whatTow(numTow) {
  trueTower=numTow
  console.log(trueTower)
}

function whatDisk(numDisk) {

  trueDisk=numDisk
  switch(trueDisk){
    case 1:
      switch(trueTower){
        case 1:
          alert('первый диск на первую башню')
        break
        case 2:
          alert('первый диск на 2 башню')
        break
        case 3:
          alert('первый диск на 3 башню')
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
  




