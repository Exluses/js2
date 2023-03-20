// BEGIN
export default function getSortedNames (arr) {
    let value = [];
    for (let {name: name} of arr) {
        value.push(name);
    }
    return value.sort();
}
// END