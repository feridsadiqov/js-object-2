// const user={
//     firstName : "Jhon",
//     lastName : "Doe"
// };
// for(const key in user){
//     delete user[key];
// }
// console.log(user);

// const user2={}

// Object.setPrototypeOf(user2,user)
// console.log(user2)

//////////////////////////////////////

// Number.prototype.mathadd=function(num) {
//     return this+num}
//     Number.prototype.mathsubstrack=function(num) {
//     return this-num
// }
// Number.prototype.mathdivide=function(num) {
//     return this/num
// }
// Number.prototype.mathmultiply=function(num) {
//     return this*num
// }

// console.log((5).mathadd(2).mathdivide(2).mathmultiply(4).mathsubstrack(5))

////////////////////////////////////////////////

// const work = {};

// Object.defineProperties(work, length, {
//   value: 0,
//   writable: true,
// });
// work.push = function (kross) {
//   this[this.lenght] = kross;
//   this.lenght++;
// };

// work.pop = function () {
//   if (this.lenght === 0) {
//     return undefined;
//   }

//   const newWork = this[this.length - 1];
//   this.length--;
//   return newWork;
// };

// work.push("first");
// work.push("second");
// const newWork = work.pop();

// console.log(work);
// console.log("new Work:",work);
