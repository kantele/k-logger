var color = require('ansi-color').set;

module.exports = {
  write: function(data) {
    console.log(green(data.type), data.chunk);
  }
};


function bold(value) {
  return color(value, 'bold');
}
function red(value) {
  return color(value, 'red+bold');
}
function green(value) {
  return color(value, 'green+bold');
}
function yellow(value) {
  return color(value, 'yellow+bold');
}
function blue(value) {
  return color(value, 'blue+bold');
}
function magenta(value) {
  return color(value, 'magenta+bold');
}
function cyan(value) {
  return color(value, 'cyan+bold');
}
function white(value) {
  return color(value, 'white+bold');
}
