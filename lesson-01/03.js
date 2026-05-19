/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/



import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})


// your code
let sum = 0;
let i = 0;
while (i <= 20) {
    if (i % 2 === 1) {
        sum = sum + i
    }
    i = i + 1;
}

console.log(sum);