// HW 31
// const age = "16";
// console.log(age);
// const name = "Alina";
// console.log(name);
// const isStudent = true;
// console.log(isStudent);
// const myString = "A person's freedom in the modern world is like the freedom of a person solving a crossword puzzle: theoretically, they can enter any word, although in reality they only have to enter one for the crossword puzzle to be solved.";
// console.log(myString);
// const number = 345;
// const myNumber = number + 10;
// console.log(myNumber);
// const myNull = null;
// console.log(myNull);
// const userName = prompt("Введіть своє ім’я");
// alert(userName);
// console.log(typeof (userName));
// const userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
// console.log(userAnswer);
// const message = "Увага! Дія може бути небезпечною.";
// const warning = confirm("Ви впевнені, що хочете продовжити?");
// alert(message);

// HW 32
// const celsius = 20;
// const fahrenheit = (celsius * 9 / 5) + 32;
// console.log(fahrenheit);
// const daysInMonth = 30;
// const hoursInMonth = daysInMonth * 24;
// console.log(hoursInMonth);
// const minutesInMonth = hoursInMonth * 60;
// console.log(minutesInMonth);
// const health = 100;
// const health2 = health - 40;
// console.log(health2);
// const energy = 500;
// const energy2 = energy - 100;
// console.log(energy2);
// const totalPrice = 500;
// const discount = 10;
// const discountedPrice = totalPrice - ((totalPrice * discount)/100);
// console.log(discountedPrice);
// const floatNumber = 12.78;
// const numbers = Math.floor(floatNumber)
// console.log(numbers);
// const floatString = "45.67";
// const string = parseFloat(floatString);
// console.log(string);
// const intString = "123";
// const parsedInt = parseInt(intString);
// console.log(parsedInt);
// const number = 9;
// const result = Math.sqrt(number);
// console.log(result);
// const integer = 42;
// const convertedString = integer.toString();
// console.log(convertedString);
// const stringNumber = "256";
// const convertedInt = parseInt(stringNumber);
// console.log(convertedInt);

// HW-33
// const result = 5 + 5 + "5";
// console.log(result);
// console.log(typeof(result));
// const email = "alina1807@gmail.com";
// console.log(email.includes("@"));
// console.log(email.length);
// const my = "My";
// const names = "name";
// const is = "is";
// const v = "Viktor";
// const fullName =  my + "," + " " + names + "," + " " + is + " ";
// console.log(fullName + v + ".");
// const userName = "Олександро";
// const payment = 300;
// console.log(alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`));

// HW-34
const a = "Введіть текст";
const b = "Введіть коментар";
if ( a !== null && b !== null) {
    console.log("Обидва поля заповнені");
}else{
    console.log("Не всі поля заповнені");
};

const cost1 = 4;
const cost2 = 5;
const cost = cost1 + cost2;
if (cost > 10){
    console.log("Сума більша за 10");
}else if(cost <= 10){
    console.log("Сума менша або дорівнює 10");
}

const text = "JavaScript hbjhbjhvjhvvhvjhvjhjhhjhgkjkjhkjhkjhk";
if (text.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
}else{
    console.log("Текст не містить слово JavaScript");
    
}

const number = Number(prompt("Введіть число"));
if ( 10 <= number && number <= 20){
    console.log("Число входить в діапазон від 10 до 20");
}else{
    console.log("Число не входить в діапазон від 10 до 20");
}

const name1 = "Filip";
const email = "ckmvkn@.edce";
const password = "32534543543";
if ( name1.length >= 3 && email.includes("@.") && password.length >= 6){
    console.log("Перенаправлення на іншу сторінку");
}else{ console.log("Помилка: неправильне заповнення");
}