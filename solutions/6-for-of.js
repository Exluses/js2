// BEGIN
export default function pick (obj, params) {
    let newObj = {};
    for (let key in obj) {
        if(params.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
// END