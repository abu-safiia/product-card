// Импорт файла comment.js
import { comments } from './comment.js';


// Массив чисел с использованием метода (filter)
const numbers = [1,2,3,4,5,6,7,8,9,10];
const moreThanFive = numbers.filter(number => number>=5);

console.log(moreThanFive);


// Массив чисел с использованием метода (include)
const vegetables = [
    "Potato",
    "Tomato",
    "Carrot",
    "Onion",
    "Cucumber",
    "Cabbage",
];

const hasTomato = vegetables.includes("Tomato");
console.log(hasTomato);


// Функция для "переворота" массива
function reverseArray(arr) {
    return arr.reverse();
}

let array1 = [1, 2, 3, 4, 5];
let array2 = ['яблоко', 'груша', 'банан'];

let reversed1 = reverseArray(array1);
let reversed2 = reverseArray(array2);

console.log(reversed1);
console.log(reversed2);


// Вывод маассива с почтой ".com"
const commentsWithCom = comments.filter(comment => comment.email.includes('.com'));

console.log(commentsWithCom);


// Массив пользователей с id
const updatedComments = comments.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);


// Массив из айди и имени
const reducedComments = comments.map(({ id, name }) => ({ id, name }));

console.log(reducedComments);



// Массив со свойством isInvalid
const newComments = comments.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

console.log(newComments);



// Уменьшение массива с помощью метода map
const emailsWithMap = comments.map(comment => comment.email);
console.log(emailsWithMap);

// с помощью reduce
const emailsWithReduce = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);
console.log(emailsWithReduce);



// Методы toString(), join()
const emails = comments.map(comment => comment.email);

// Приведение массива к строке с помощью toString()
const str1 = emails.toString();
console.log(str1);

// Приведение массива к строке с помощью join()
const str2 = emails.join(', ');
console.log(str2);