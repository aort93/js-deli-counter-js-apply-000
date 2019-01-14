//katzDeliLine = [];

function takeANumber(line, name) {
  //takes in a line array and a name to input into the end of the array
  line.push(name);

  return "Welcome, " + name + '. You are number ' + line.length + ' in line.'
}

function nowServing(line) {
  //will take in our current line array and returns first person in line and removes
  //them from the array

  if (line.length === 0) {
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
    var person = line[i];
    var position = i + 1;
    newArr.push(`${position}. ${name}`);
  }

  return `The line is currently on: ${newArr.join(', ')}`;
}
