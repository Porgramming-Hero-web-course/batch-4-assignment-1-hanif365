{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    getCarAge(): number {
      const currentYear: number = new Date().getFullYear();
      return currentYear - this.year;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  const carAge: number = car.getCarAge();

  //   console.log(carAge);
}
