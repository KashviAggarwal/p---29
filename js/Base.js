class Base {
    constructor(x,y,w,h){
      let options = {
          isStatic =true
      };
      this.Bodies = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      World.add( world, this.body)
    }     
    show(){
        let pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        pop()
    }
}