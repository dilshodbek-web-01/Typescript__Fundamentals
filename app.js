// function add() {
//   let a: string = "text";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user = new User("Eshmat", 23);
console.log(user.getName());
console.log(user.getAge());
console.log(user.getName());
