class Bob{
    constructor(x,y){
        var options={
        restitution:1,
        friction:0,
        density:0.8
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,45,options);
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS);
    fill ("Pink");
    ellipse(0,0,50,50);
    pop();
        
    }
}