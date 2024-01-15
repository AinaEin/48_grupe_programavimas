function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else {
    if (current === 'yellow') {
      return 'red';
    } else {
      if (current === 'red') {
        return 'green';
      }
    }
  }
}
console.log(updateLight('green'));

const x = [1, 2, 3];

function grow(x){
  const multi = x.reduce((t, n) => t * n, 0);
  return multi;
};

const marks = [1, 5, 87, 45, 8, 8];

function getAverage(marks) {
  const sum = marks.reduce((t, mark) => t + mark, 0);
  const average = sum / marks.length;
  return Math.floor(average);
}
console.log(getAverage(marks));


