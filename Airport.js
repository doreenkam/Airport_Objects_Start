class Airport {
  constructor(name) {
    this.name = name;
    this.planes = [];
  }

  addPlane(plane) {
    return this.planes.push(plane);
  }
}

module.exports = Airport;
