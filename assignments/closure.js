// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function drivecar(drivingAge){
  var a = ' years until you can drive!';
  return function(yearOfBirth){
    var age = 2019 - yearOfBirth;

    if (age >= drivingAge){
      console.log('nice u can drive');
    } else{
      console.log((16 - age) + ' years until you can drive!')
    }
  }
}

drivecar(16)(1996);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (function(x) {
  return function(){
    x += 1;
    return x;
  }
}(0));
console.log(counter());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
