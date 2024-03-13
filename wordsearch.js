const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    const transpose = function (letters) {
        const transposedArray = [];
        for (let i = 0; i < letters[0].length; i++) {
          transposedArray[i] = [];
          for (let j = 0; j < letters.length; j++) {
            transposedArray[i][j] = letters[j][i];
          }
        }
        return transposedArray;
      };
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (j of verticalJoin) {
        if (j.includes(word)) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch
