class Particle{
    constructor(radius){
        var options={
            restitution:1,
            friction:0
        }

        this.x = round(random(25,775));
        this.y = -10;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world, this.body);

        this.r = round(random(0,255));
        this.g = round(random(0,255));
        this.b = round(random(0,255));
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.r,this.g,this.b);
        ellipse(0,0,this.radius);
        pop();
    }
}