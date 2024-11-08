{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  type CalculateShapeArea = (shape: Shape) => number;

  const calculateShapeArea: CalculateShapeArea = (shape) => {
    let area: number;
    if (shape.shape === "circle") {
      area = Math.PI * shape.radius ** 2;
    } else {
      area = shape.width * shape.height;
    }
    return Number.isInteger(area) ? area : parseFloat(area.toFixed(2));
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  //   console.log(circleArea);
  //   console.log(rectangleArea);
}
