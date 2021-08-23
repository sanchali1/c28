class SlingShot
{
    constructor(bodyA,pointB)    //create chain
    {
var opt={
    bodyA:bodyA,pointB:pointB,length:10,stiffness:0.05
}
    
    this.chain=Constraint.create(opt)
    World.add(world,this.chain)
}
fly()
{
    this.chain.bodyA=null     //null =blank
}
display(){   //dispplay
    if(this.chain.bodyA){
   var pointb=this.chain.pointB
    strokeWeight(9)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        pointb.x,pointb.y)
}
}

}