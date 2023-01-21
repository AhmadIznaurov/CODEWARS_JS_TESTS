function evenOrOdd(number) {
    if (number % 2 == 0) {
       return "Even"
    } else {
      
    }
      return "Odd"
  }
  evenOrOdd(2,7)




  // Write a function "greet" that returns "hello world!"
function greet() {
    return "hello world!";
  }
   greet();
  
 
   
   function multiply(a, b){
    return a * b
  }
  multiply(3, 4);
  console.log(multiply);


function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}




function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}


function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}




function feast(beast, dish) {
return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}





function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}





function lovefunc(flower1, flower2){
 return flower1 % 2 !== flower2 % 2;
}






function calculate(num1, operation, num2) {
  var ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };
  return (ops[operation] || function() { return null; })(num1, num2);
}





function stringToArray(string){
  return string.split(' ');
}






function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
