// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pendulum

// A Simple Pendulum Class

// This constructor could be improved to allow a greater variety of pendulums
class Pendulum {

  constructor(x, y, r) {
    // Fill all variables
    this.pivot = createVector(x, y);
    this.bob = createVector();
    this.r = r;
    this.angle = PI / 4;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995; // Arbitrary damping
    this.ballr = 24.0;    // Arbitrary ball radius
  }

  // Function to update position
  update() {
    let gravity = 0.4; // Arbitrary constant
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle); // Calculate acceleration (see: http://www.myphysicslab.com/pendulum1.html)

    this.aVelocity += this.aAcceleration; // Increment velocity
    this.angle += this.aVelocity; // Increment angle
    
    this.aVelocity *= this.damping; // Apply some damping
  }

  show() {
    this.bob.set(this.r * sin(this.angle), this.r * cos(this.angle), 0); // Polar to cartesian conversion
    this.bob.add(this.pivot); // Make sure the position is relative to the pendulum's origin

    stroke(0);
    strokeWeight(2);
    // Draw the arm
    line(this.pivot.x, this.pivot.y, this.bob.x, this.bob.y);
    fill(127);
    // Draw the ball
    circle(this.bob.x, this.bob.y, this.ballr * 2);
  }
}