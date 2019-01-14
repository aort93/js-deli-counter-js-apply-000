//katzDeliLine = [];

function takeANumber(line, name) {
  //takes in a line array and a name to input into the end of the array
  line.push(name);

  return "Welcome, " + name + '. You are number ' + line.length + ' in line.'
}

function nowServing(line) {
  //will take in our current line array and returns first person in line and removes
  //them from the array

  if (line.length === 0) {  //when line is empty
    return 'There is nobody waiting to be served!';
  }

  return 'Currently serving ' + line.shift(1) +'.'
}

function currentLine(line) {
  //when no one is on line
  if(line.length === 0) {
    return 'The line is currently empty.';
  }

  //create an array to hold the values and position of a person on line
  var newArr = [];

  for (var i = 0; i < line.length; i++) {
    //Iterate through our line array to access all the people in line and assign
    //them a position and add it the the newArr
    var person = line[i];
    var position = i + 1;
    newArr.push(`${position}. ${person}`);
  }

  return `The line is currently: ${newArr.join(', ')}`;
}
