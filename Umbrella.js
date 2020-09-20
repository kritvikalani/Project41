class umbrella{
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, this.radius, options);
        this.radius = 50;
        this.image = loadImage("Batman.png")

        World.add(world, this.body)
    }
    display() {
        imageMode(RADIUS)
        image(this.body.position.x, this.body.position.y, this.radius);
    }
}