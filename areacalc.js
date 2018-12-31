function calculateRectangleArea (length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  }
  else {
    var rectangleArea = length * width;
    return rectangleArea;
  }

}

function calculateTriangleArea (base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  }
  else {
    var triangleArea = base * height / 2;
    return triangleArea;
  }
  }

function calculateCircleArea (radius) {
  if (radius < 0) {
    return undefined;
}
  else {
    var circleArea = Math.PI * radius * radius;
    return circleArea;
  }

}

