console.log('Start this app');
function add(n1, n2) {
    return n1 + n2;
}
var number1 = '5';
var number2 = 2.8;
var number3 = 5.2;
// 這會出錯，typescript可思考成一個type system(幫助你的development)
// before the code gets compiled to javascript code
// 編寫階段就可以發現錯誤，不用等到執行run time時候的logical error難以trace
// const result = add(number1, number2);
var result = add(number2, number3);
console.log(result);
