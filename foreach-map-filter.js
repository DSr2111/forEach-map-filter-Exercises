function doubleValues(arr) {
  let newArr = [];
  arr.forEach(function (num) {
    newArr.push(num * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (num) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  let newArr = [];

  arr.forEach(function (str) {
    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);

    newArr.push(`${first}${last}`);
  });
  return newArr;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (obj) {
    //changed from val to obj to better represent the obj in the array
    obj[key] = value; //assigns value of 'value' param to key in obj
  });
  return arr;
}

function vowelCount(str) {
  let vowelsCountObj = {};
  const vowels = "aeiou";
  strArr = str.split("");

  strArr.forEach(function (char) {
    let lowerCaseChar = char.toLowerCase();
    if (vowels.indexOf(lowerCaseChar) !== -1) {
      if (vowelsCountObj[lowerCaseChar]) {
        vowelsCountObj[lowerCaseChar]++;
      } else {
        vowelsCountObj[lowerCaseChar] = 1;
      }
    }
  });
  return vowelsCountObj;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (num, idx) {
    console.log(num, idx); // log to visualize -> need to remember that map's parameters are (value, index, arr)
    return num * idx;
  });
}

function extractKey(arr, key) {
  return arr.map(function (obj) {
    return obj[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (obj) {
    return `${obj.first} ${obj.last}`; //backticks ftw
  });
}

function filterByValue(arr, key) {
  return arr.filter(function (obj) {
    if (obj[key] !== undefined) {
      return obj;
    }
  });
}

function find(arr, searchValue) {
  return arr.filter(function (el) {
    return el === searchValue;
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function (obj) {
    return obj[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (char) {
      return vowels.indexOf(char) == -1; // index of -1 means there are no vowel characters in returned string
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (num) {
      //filter for odd numbers first
      return num % 2 !== 0;
    })
    .map(function (num) {
      return num * 2; //map to double values in array
    });
}
