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

console.log("-----------------------------");

function abbrevName(name) {
  return name1
    .split(" ")
    .map((name) => name[0])
    .join(".")
    .toUpperCase();
}

const num = 123;
const a = num.toString();
console.log(a)


function getDrinkByProfession(param){
  if (param === "Jabroni") {
    return "Patron Tequila";
  } else if (param === "School Counselor") {
      return "Anything with Alcohol";
    } else if (param === "Programmer") {
        return 	"Hipster Craft Beer";
        } else if (param  === "Bike Gang Member") {
            return "Moonshine";
            } else if (param  === "Politician") {
                return "Your tax dollars";
               } else if (param  === "Rapper") {
                   return "Cristal";
                 } else {
                   return "Beer";
  }
};

console.log(getDrinkByProfession('Jabroni'));
console.log(getDrinkByProfession('Bike Gang Member'));


const number = [3];

function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(number));



// kaip paversti reiksme i objekta
function wrap(value) {
  return { value : value };
}

const max = "Max Headroom";
function getMax1(max) {
  return max;
}
console.log(getMax1(max));

function getMax2(max) {
  return max;
}

const e = [3, 2, 5];
const b = [1, 4, 4];

function findDifference(e) {
  let number1 = 1;
  for (let i = 0; i < e.length; i++) {
    number1 *= e[i];
    return number1;
  }
};
console.log(findDifference[3, 2, 5]);

