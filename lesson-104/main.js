const user = {
    name: "Egor",
    age: 18,
    admin: true,
    sayHello: function (name) {
        return `Hello "${name}"`;
    }
};
console.log(user.sayHello("Egor"));
const users = [
    { name: "Alice", age: 25, admin: false },
    { name: "Bob", age: 30, admin: true },
    { name: "Charlie", age: 22, admin: false },
    { name: "Diana", age: 28, admin: true },
    { name: "Eve", age: 35, admin: true }
];
let simpleUsersCount = 0;
for (let i = 0; i < users.length; i++) {
    if (!users[i].admin) {
        simpleUsersCount++;
    }
}
console.log("Количество простых пользователей:", simpleUsersCount);