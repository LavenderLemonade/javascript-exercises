const add = function(num1, num2) 
{
	return num1 + num2
};

const subtract = function(num1, num2) 
{
	return num1 - num2
};

const sum = function(stuff) 
{
	let holder;
  for(i = 0; i < stuff.length; i++)
  {
    holder += stuff[i];
  }

  return holder;

};

const multiply = function(num1, num2) 
{
  return num1 * num2;
};

const power = function(num1, num2) 
{
  return Math.pow(num1, num2);
};

const factorial = function() 
{
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
