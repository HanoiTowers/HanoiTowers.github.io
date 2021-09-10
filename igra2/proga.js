class Tower{
    num = 0;
    selected = false;
    disks = [];
    elem = null;
    span = null;
    constructor(elem){
      this.elem = elem;
      this.span = document.createElement("span");
      this.span.innerText="";
      this.elem.appendChild(this.span); 
    }
     Show(num, disks) {
       this.num = num;
       this.disks = disks;
       this.span.innerText = " disks:"+this.disks.join(",");
       //this.span.style = "text-decoration:bold;";
        console.log("Show " + this.num); 
     }   
     Select() {
       this.selected = true;
       this.span.style.fontWeight = "bold"; 
       console.log("selected: " + this.num); 
    }
    Unselect(){
      this.selected = false;
      this.span.style.fontWeight = "normal"; 
      console.log("unselected: " + this.num); 
    }
    Push(disk){
     
      this.disks.push(disk)
      this.span.innerText = " disks:"+this.disks.join(",");
      console.log("push " + this.num);
    }
     Pop(){
       //if(this.disks.length = 0  ){
       //  throw ("you have mail er")
       //}
       var d = this.disks.pop();
       this.span.innerText = " disks:"+this.disks.join(",");
       console.log("pop " + this.num);
       this.Unselect()
       return d;
     
    }
    isSelected(){
      console.log("is sel " + this.num);
      return this.selected;
    }
    

}
