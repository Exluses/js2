import _ from 'lodash';

// BEGIN
export default function countWords (line) {
    const obj = {};
    let arrLong = _.words(line.toLowerCase())
    for(let var1 of arrLong) {
        if (var1 in obj) {
            obj[var1] = obj[var1] + 1;
          } 
          else 
          {
            obj[var1] = 1;
          }
    }
    return obj;
}
// END