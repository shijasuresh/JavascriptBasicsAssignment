let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

console.log(shoppingList);

console.log("First item");
console.log(shoppingList[0]);

shoppingList.push("Carrots");
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList[4].splice(1, 1, "Cucumbers");
shoppingList[4].splice(2, 1, "Bell Peppers");
console.log(shoppingList);


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

console.log(student);

console.log(student.name);

student.phone = "123-456-7890";
console.log(student);

delete student.grade;
console.log(student);

student.age = 21;
console.log(student);


let num = 10;
if (num > 0) {
    console.log("Positive");
}
else if (num < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

let score = 60;
if (score >=90 && score <= 100) {
    console.log("A");
}
else if (score >= 80 && score <= 89) {
    console.log("B");
}
else if (score >= 70 && score <= 79) {
    console.log("C");
}
else if (score >= 60 && score <= 69) {
    console.log("D");
}
else if (score < 60 && score >= 0) {
    console.log("F");
}
else
{
    console.log("Not a valid score")
}


let a = "String";
if (a)
{
    console.log("Truthy");
}
else {
    console.log("Falsy");
}