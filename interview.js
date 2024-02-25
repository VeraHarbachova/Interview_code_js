// 1. Задача 1. Подсчет суммы чисел от 1 до N
// Напишите функцию calculate_sum, которая принимает на вход одно целочисленное значение N и возвращает сумму всех чисел от 1 до N включительно.
// Требования к тестам с использованием pytest:
// Напишите тесты для функции calculate_sum с различными значениями N, включая положительные и отрицательные числа, а также нуль.
// Убедитесь, что функция возвращает корректную сумму для всех входных данных.

// function calculate_sum (n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(calculate_sum(5));
// console.log(calculate_sum(0));
// console.log(calculate_sum(-5));

// Задача 2. Подсчет суммы четных чисел
// Напишите функцию calculate_even_sum, которая принимает на вход список чисел и возвращает сумму всех четных чисел в этом списке.
// function calculate_even_sum (numbers) {
//     let evenSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 == 0) {
//             evenSum = evenSum + numbers[i];
//         }
//     }
//     return evenSum;
// }
// console.log(calculate_even_sum([1, 2, 4, 3, 5, 8, 2, 7, 100]));

// Задача 3. Разделение на подсписки

// Напишите функцию split_into_sublists, которая принимает на вход список элементов и число chunk_size,
// и возвращает список из подсписков, каждый размером chunk_size.
// Если в конце остается менее chunk_size элементов, они также должны быть включены в последний подсписок.

// function split_into_sublists (arr, num) {
//     let newArr = [];
//         for (let i = 0; i < arr.length; i = i + num) {
//             newArr.push(arr.slice(i, i + num));
//         }
//         return newArr;
//     }
// console.log(split_into_sublists([1, 2, 3, 4, 5, 6], 3));

// Задача 4. Подсчет слов в предложении
// Напишите функцию count_words, которая принимает на вход строку, представляющую предложение,
// и возвращает количество слов в этом предложении. Предполагается, что слова разделены пробелами.

// function count_words(str) {
//   return str.split(" ").length;
// }
// console.log(count_words("Welcome to Paris!"));

// Задача 5. Поиск уникальных элементов
// Напишите функцию find_unique, которая принимает на вход список элементов
// и возвращает список из элементов, которые встречаются в исходном списке только один раз.

// function find_unique (arr) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!array.includes(arr[i])) {
//             array.push(arr[i])
//         }
//     }
//     return array;
// }
// console.log(find_unique([1, 2, 2, 3, 4, 5, 2, 6, 7, 1, 8]));

// function find_unique (arr) {
//     return arr.filter((el, i) => i === arr.indexOf(el));
// }
// console.log(find_unique([1, 2, 2, 3, 4, 5, 2, 6, 7, 1, 8]));

// Задача 6. Число-палиндром
// Напишите функцию is_palindrome, которая принимает на вход число и проверяет, является ли оно палиндромом.
// Палиндромом называется число, которое одинаково читается слева направо и справа налево.

// function is_palindrome (num) {
//     let backNum = num.toString().split('').reverse().join('');
//     if (num === Number(backNum)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(is_palindrome(785876));
// console.log(is_palindrome(78587));

// Задача 7. Поиск наименьшего простого делителя
// Напишите функцию smallest_prime_divisor, которая принимает на вход положительное целое число n
// и возвращает наименьший простой делитель этого числа (кроме 1). Если n само является простым числом, функция должна вернуть само n.

// function smallest_prime_divisor (n) {
//     for (let i = 2; i <= n; i++) {
//         if (n % i === 0) {
//             return i;
//         }
//     }
// }
// console.log(smallest_prime_divisor(13));

// Задача 8. Проверка анаграмм
// Напишите функцию are_anagrams, которая принимает на вход две строки и возвращает True, если они являются анаграммами, и False в противном случае.
// Анаграммами называются строки, которые содержат одни и те же буквы, но в разном порядке.

// function are_anagrams (str1, str2) {
//     let sort1 = str1.split('').sort().join('');
//     let sort2 = str2.split('').sort().join('');
// console.log(sort1);
// console.log(sort2);
//     return sort1 === sort2;
// }
// console.log(are_anagrams('qwe', 'epq'));
// console.log(are_anagrams('hello', 'loleh'));

// Задача 9. Объединение списков
// Напишите функцию combine_lists, которая принимает на вход два списка и возвращает новый список,
// содержащий все элементы из обоих входных списков, сохраняя порядок их следования.

// function combine_lists (arr1, arr2) {
//     return arr1.concat(arr2);
// }
// console.log(combine_lists([1, 2, 3], [4, 5, 6]));
// console.log(combine_lists(['a', 'b', 'c'], ['d', 'e', 'f', 'g']));

// Задача 10. Подсчет гласных букв
// Напишите функцию count_vowels, которая принимает на вход строку, состоящую из латинских букв,
// и возвращает количество гласных букв (а именно буквы A, E, I, O, U, a, e, i, o, u) в этой строке.

// function count_vowels (str) {
//     let lowerCase = str.toLowerCase();
//     let count = (lowerCase.match(/[aeiou]/g) || []).length;
//     return count;
// }
// console.log(count_vowels('aeiou'));
// console.log(count_vowels('AEIOU'));
// console.log(count_vowels('5aeiourqw'));
// console.log(count_vowels('hello'));
// console.log(count_vowels('hahaha'));
// console.log(count_vowels(''));
