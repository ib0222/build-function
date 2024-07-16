function buildFunction() {
  var arr = [];

  for (var index = 0; index < 3; index++) {
    arr.push(function () {
      console.log(index);
    });
  }
  return arr;
}

var fs = buildFunction();

fs[0]()
fs[1]()
fs[2]()

function buildFunction2() {
  var arr = [];

  for (var index = 0; index < 3; index++) {
    arr.push(
      (function (index) {
        console.log(index);
      })(index)
    );
  }

  return arr;
}

const fs1 = buildFunction2();

fs1[0];
fs1[1];
fs1[2];