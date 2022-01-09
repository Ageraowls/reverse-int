module.exports = function reverse(n) {
    const posNum = n < 0 ? n * -1 : n;
    const numberOfString = posNum.toString();
    const stringOfArray = numberOfString.split("");
    return +stringOfArray.reverse().join("");
};
// function reverse(n) {
//     const posNum = n < 0 ? n * -1 : n;
//     const numberOfString = posNum.toString();
//     const stringOfArray = numberOfString.split("");
//     return +stringOfArray.reverse().join("");
// }

// console.log(reverse(-3124124));
