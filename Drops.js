class drops{
    constructor(x,y, angle) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        this.rain = Bodies.circle(x, y, this.radius, options);
        this.radius = 20;

        World.add(world, this.rain)
    }
    update() {
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,600), y:random(0,600)});
        }
    }
    display() {
        var angle = this.rain.angle;
        push();
        translate(this.rain.position.x, this.rain.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(this.rain.position.x, this.rain.position.y, this.radius);
        pop();
    }
}