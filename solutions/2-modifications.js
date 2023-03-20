import _ from 'lodash';
// BEGIN
export default normalize = (obj) => {
  obj.name = _.capitalize(obj.name.toLowerCase());
  obj.description = obj.description.toLowerCase();
  return obj;
}
  // END