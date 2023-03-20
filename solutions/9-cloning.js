// BEGIN
const data = {
    key: 'value',
    key2: {
      key: 'innerValue',
      innerKey: {
        anotherKey: 'anotherValue',
      },
    },
  };

export default function cloneShallow (obj) {
        if (!obj || typeof obj !== 'object') 
        return obj;
        let clone = {};
        let entries = Object.entries(obj);
        for (const [key, value] of entries) 
        {
          clone[key] = cloneShallow(value);
        }
        return clone;
      }
      const result = cloneShallow(data);
      console.log(result);
// END
