/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

    let length = preferences.length; //колличество членов массива
    let count = 0;  //счетчик верных равенств цикла
    for (let i = 0; i<length; i++) { //цикл трех проверок трех соседних элементов
        let n = preferences[i] - 1;
        if (n == i) continue; 
        let k = preferences[n] - 1;
        if (n == k) continue; 
        let m = preferences[k] - 1;
        if (m == k) continue;
        if (m == i) {
            count++; 
        }
     }
     return count / 3; //ответ - кол-во "треугольников"
  }
