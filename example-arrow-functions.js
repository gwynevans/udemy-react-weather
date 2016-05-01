var names = ['Gwyn', 'Sue', 'Mel', 'Izzy'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log('shortArrow', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Gwyn'));

// var person = {
//   name: 'Gwyn',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + 'says hi to ' + name)
//     });
//   }
// };
//
var person = {
  name: 'Gwyn',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();


// challance
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;


console.log(addExpression(1,3));
console.log(addExpression(9,0));
