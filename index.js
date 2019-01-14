//katzDeliLine = [];

function takeANumber(line, name) {
  //takes in a line array and a name to input into the end of the array
  line.push(name);

  return "Welcome, " + name + '. You are number ' + line.length + ' in line.'
}
