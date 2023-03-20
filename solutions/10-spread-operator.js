// BEGIN
export default make = (str, data = {}) => {
    let obj1 = {
        name: str,
        state:"moderating"
    };
    return {...obj1, ...data, createdAt: Date.now() };
}
// END