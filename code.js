let J = "aA";
let S = "aAAbbbb";

var numJewelsInStones = function(J, S) {
    function uniq(a) { // function that eliminates jewel duplicates
      return a.sort().filter(function(item, pos, ary) {
          return !pos || item != ary[pos - 1];
      })
    }
    jewelsArray = J.split(""); // jewels string to array
    uniqJewels = uniq(jewelsArray); // eliminates jewel duplicates in array

    stonesArray = S.split(""); // stones string to array

    matches = []; // new array for matched stones in jewels array
    stonesArray.forEach(function(stone) { // add each stone that matches a jewel to matches array
      if (uniqJewels.includes(stone)) {
        matches.push(stone);
      }
    });
    return matches.length; // return length of matches found
};

numJewelsInStones(J, S);
