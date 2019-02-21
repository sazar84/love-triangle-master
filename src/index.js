/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let length = preferences.length; //длина членов массива
    let count = 0;   
    for (let i = 0; i<length; i++) { 
        let n = preferences[i] - 1; 
        if (n == i) {
          let k = preferences[n] - 1;
          if (n == k) {
            let m = preferences[k] - 1;
            if (m == k) {
              if (m == i) {
                count++;
              }
            } 
          }  
        }
     }
     return count / 3;
  }
