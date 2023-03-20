import _ from 'lodash';

// BEGIN
export default function fill (obj, replace_keys, data) {
    if (replace_keys.length != 0) {
        let newdata = _.pick(data, replace_keys);
        for (let key in newdata) {
            obj[key] = newdata[key];
        }
    }
    else {
        for (let key in data) {
            obj[key] = data[key];
        }
    }
    return obj;
}
// END