
function addPromise (a, b) {
  return new Promise( function (resolve, reject) {
    if ((typeof a === 'number') && (typeof b === 'number')) {
      resolve( a + b );
    } else {
      reject('Not a number');
    }
  });
}

addPromise("one", 2).then( function (val) {
    console.log("OK, value = ", val);
  }, function (err) {
    console.log("Error: ", err);
  }
);

addPromise(99, "two").then( function (val) {
    console.log("OK, value = ", val);
  }, function (err) {
    console.log("Error: ", err);
  }
);

addPromise(1234, 5678).then( function (val) {
    console.log("OK, value = ", val);
  }, function (err) {
    console.log("Error: ", err);
  }
);
