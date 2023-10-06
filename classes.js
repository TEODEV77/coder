class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(otherPoint) {
    const xDiff = this.x - otherPoint.x;
    const yDiff = this.y - otherPoint.y;

    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  }
}
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  fullName() {
    return `${this.name} ${this.lastName}`;
  }
}
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  isInStock() {
    return this.quantityInStock > 0;
  }
}
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`I'm driving a ${this.brand} ${this.model}.`);
  }
}