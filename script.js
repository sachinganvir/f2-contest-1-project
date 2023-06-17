/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr
  .filter(arr => arr.profession === "developer")
  .map(arr => arr.name);
console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let developers = [];
  arr.forEach(arr => {
    if (arr.profession === "developer") {
      developers.push(arr.name);
    }
  });
  console.log(developers);
}

function addData() {
  //Write your code here, just console.log
  let newEmp={id:4,name:"susan",age:"20",profession:"intern"}
  arr.push(newEmp)
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.pop(2)
  console.log(changedArray);
}

function concatenateArray() {
  //Write your code here, just console.log
 
  let newArr = [
    {id:5, name:"samit", age:"22", profession:"developer"},
    {id:6, name:"mayank", age:"25", profession:"admin"},
    {id:7, name:"chandan", age:"24", profession:"intern"}
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
