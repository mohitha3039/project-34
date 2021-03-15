class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        
       
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
   show(){
        
        
     
            var pointA = this.sling.bodyA.position;
            var bodyB = this.sling.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, bodyB.x ,bodyB.y);
               
    }
    
}