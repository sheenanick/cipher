var userSentence = prompt("Enter a sentence.");

var firstLast = function(statement) {
  return statement.charAt(0).toUpperCase() + statement.charAt(statement.length - 1).toUpperCase();
}

var reverse = function(statement) {
  return statement.charAt(statement.length - 1) + statement.charAt(0);
}

var reverseCaps = function(statement) {
  return userSentence + reverse(firstLast(statement));
}

var divideByTwo = function(statement) {
  return statement.charAt((statement.length - 1) / 2) + reverseCaps(statement);
}

var splitString = function(statement) {
  alert(divideByTwo(statement).split("").reverse().join(""));
}

splitString(userSentence);
