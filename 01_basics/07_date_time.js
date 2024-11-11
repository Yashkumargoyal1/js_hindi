//  data is a object
let mydate=new Date();
//console.log(mydate);
// it is vary painfull
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());

let mycreateddate=new Date(2023,0,23);
//console.log(mycreateddate.toDateString());

let newdate=new Date("2024-12-04");
//console.log(newdate.toString());
let date=new Date(2080, 4, 6, 9, 3, 2, 34);
console.log(date.toLocaleString());
console.log(date.toString());

 let yr=date.getFullYear();
 console.log(yr);

  yr=date.getMonth();
  console.log(yr);

  // for setting a date
  date.setDate(7);
  date.setFullYear(2081);
  
  console.log(Date.now());
  console.log(newdate.getTime());
  /*
  let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
  */

  
  



