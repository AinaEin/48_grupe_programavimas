// koks klases pazymiu vidurkis?
// kokia yra klases pazymiu mediana? vidurine reikmse, skirianti mažesnę ir didesnę imties puses
// koks yra maziausias pazymys?
// koks yra didziausias pazymys?
// koks yra skirtumas tarp didziausio ir maziausio pazymiu?
// koks yra vardas studento, kuris turi maziausia pazymi?
// koks yra vardas studento, kuris turi geriausia pazymi?
// koks yra vardas studento, kuris turi geriausia pazymu vidurki?
// koks yra vardas studento, kuris turi prasciausia pazymu vidurki?
// koks yra vardas studento, kuris turi maziausiai pazymiu?
// koks yra vardas studento, kuris turi daugiausiai pazymiu?
// grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki
// (didejimo tvarka).
// grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki
// (mazejimo tvarka).

const students = [
  {
    name: "Jonas",
    marks: [2],
  },
  {
    name: "Maryte",
    marks: [9, 8, 7],
  },
  {
    name: "Petras",
    marks: [10, 10],
  },
  {
    name: "Ona",
    marks: [7, 7, 7, 7, 7],
  },
];


// koks klases pazymiu vidurkis?
// Klases vidurkis = susumuojame kiekvieno studento vidurki
// 1) 10 -> 10
// 2) 1
// (10+1) / 2 = 5.5
const classAverage =
  students
    .map((student) => student.marks)
    .map((marks) => marks.reduce((t, mark) => t + mark, 0) / marks.length)
    .reduce((t, average) => t + average, 0) / students.length;

console.log(classAverage);

console.log("---------------------------------");

// kokia yra klases pazymiu mediana?

const classAllGrades = students
  .map((student) => student.marks)
  .reduce((previousValue, currentValue) => previousValue.concat(currentValue));
 // .sort((a, b) => a - b);

  const classSortedMarks = classAllGrades.sort((a, b) => a - b);

  function findMediana(array) {
    // check for even case
    if (array.length % 2 != 0) {
      const resultSort = [Math.floor(array.length / 2)];
      return resultSort;
    }
    return (array[Math.floor((array.length - 1) / 2)] + array[array.length / 2]) / 2
  };


console.log(findMediana(classSortedMarks));

console.log("---------------------------------");

// koks yra maziausias pazymys?

const classLowMark = classSortedMarks[0]; 

console.log(classLowMark);

console.log("---------------------------------");

// koks yra didziausias pazymys?

const classBigMark = classSortedMarks[classSortedMarks.length - 1];

console.log(classBigMark);

console.log("---------------------------------");

// koks yra skirtumas tarp didziausio ir maziausio pazymiu?

const markGap = classBigMark - classLowMark;

console.log(markGap);

console.log("---------------------------------");

// koks yra vardas studento, kuris turi maziausia pazymi?

function findLowestGrade(students) {
  let name = null;
  let lowestGrade = null;

  students.forEach((student) => {
    const minMark = Math.min(...student.marks);

    if (minMark < lowestGrade || lowestGrade === null) {
      name = student.name;
      lowestGrade = minMark;
    }
  });

  return name;
}
console.log("findLowestGrade(students)");
console.log(findLowestGrade(students));

console.log("---------------------------------");
// koks yra vardas studento, kuris turi geriausia pazymi?

function findHighestGrade(students) {
  let name = null;
  let highestGrade = null;

  students.forEach((student) => {
    const maxMark = Math.max(...student.marks);

    if (maxMark > highestGrade || highestGrade === null) {
      name = student.name;
      highestGrade = maxMark;
    }
  });
  return name;
}
console.log("findHighestGrade(students)");
console.log(findHighestGrade(students));

console.log('---------------------------------');

// koks yra vardas studento, kuris turi geriausia pazymiu vidurki?

function studentAverage(marks) {
  const sum = marks.reduce((t, mark) => t + mark, 0); 
  return sum / marks.length;
}

function bestStudentAverage(students) {
  let bestStudent = null;
  let bestAverage = 0;

  students.forEach((student) => {
    const average = studentAverage(student.marks);

      if (average > bestAverage) {
        bestAverage = average;
        bestStudent = student.name;
      }
  })

  return bestStudent;
}

console.log('bestStudentAverage');
console.log(bestStudentAverage(students));

console.log("---------------------------------");

// koks yra vardas studento, kuris turi prasciausia pazymu vidurki?

function worstStudentAverage(students) {
  let worstStudent = null;
  let worstAverage = 11;

  students.forEach((student) => {
    const average = studentAverage(student.marks);

    if (average < worstAverage) {
      worstAverage = average;
      worstStudent = student.name;
    }
  });

  return worstStudent;
}

console.log('worstStudentAverage');
console.log(worstStudentAverage(students));

console.log("---------------------------------");

// koks yra vardas studento, kuris turi maziausiai pazymiu?

function leastMarks(students) {
  let name = null;
  let leastMarksCount = null;

  students.forEach((student) =>{
    const marksCount = student.marks.length;

    if ( marksCount < leastMarksCount || leastMarksCount === null) {
      name = student.name;
      leastMarksCount = marksCount; 
    }
  })

  return name;
}

console.log('leastMarks');
console.log(leastMarks(students));

console.log("---------------------------------");

// koks yra vardas studento, kuris turi daugiausiai pazymiu?

function mostMarks(students) {
  let name = null;
  let mostMarksCount = null;

  students.forEach((student) => {
    const marksCount = student.marks.length;

    if (marksCount > mostMarksCount || mostMarksCount === null) {
      name = student.name;
      mostMarksCount = marksCount;
    }
  });

  return name;
}

console.log('mostMarks');
console.log(mostMarks(students));

console.log("---------------------------------");

// grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki
// (didejimo tvarka).

// grazinti studentu vardu masyva, kuris yra isrikiuotas pagal ju vidurki
// (mazejimo tvarka).

function sortStudentsByAverage(students, callback) {
  const studentsWithAverage = students.map((student) => {
    const average = studentAverage(student.marks);
    return {
      ...student,
     average,
    }
  })
  const sortedStudentsAverage = studentsWithAverage.sort(callback);
  return sortedStudentsAverage;
}

console.log(sortStudentsByAverage(students, (a, b) => a.average - b.average));
console.log(sortStudentsByAverage(students, (a, b) => b.average - a.average));


