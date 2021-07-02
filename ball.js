class Ball{
    constructor(x,y,r){
var options = {
    restitution: 0.5 ,
    isStatic: true 
}
this.ball = Bodies.circle(x,y,r,options)
this.r = r
World.add(world,this.ball)

    }
    show(){
        var pos = this.ball.position
        push()
        fill("purple")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.r,this.r)

        pop()

    }
}