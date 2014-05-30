var numbers = process.argv.slice(2);
var sum = 0;
for(var i=0; i<numbers.length; i++){
  sum += parseInt(numbers[i], 10);
}
console.log(sum);
