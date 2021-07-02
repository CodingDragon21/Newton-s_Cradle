class Rope{
    constructor(body1,body2, pointA, pointB){
this.pontA=pointA
this.pointB=pointB
        
var options = {
    bodyA: body1,
    bodyB: body2,
    pointB: {x:this.pointA, y:this.pointB},
    stiffness: 0.3
 
   
}
this.rope = Constraint.create(options)
World.add(world,this.rope)
    
    }
    show(){
        var pos = this.body2.position
        var pos2 = this.body1.position
        push()
        stroke("blue")
        strokeWeight(3)
        line(pos.x, pos.y, pos2.x, pos2.y)
        pop()   
    }
}