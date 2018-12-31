function range (start, end, step) {
  if (start > end && step > 0) {
    return []
  }

else if (start < end && step < 0) {
  return []
}

else if (start === end) {
  return []
}

else {
  var num = start;
  var array = [num];

  while (num <= end - step) {
    array.push (num + step);
    num = num + step;
  }
  return array

}

}
