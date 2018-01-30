'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
//translate new language
function platzom(str) {
  var translation = str;
  //si la palabra termina en 'ar'
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }
  //si la palabra inicia con z
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe';
  }
  //si la traduccion tiene +10 letras
  if (translation.length >= 10) {
    var firsthalf = translation.slice(0, Math.round(translation.length / 2));
    var secondhalf = translation.slice(Math.round(translation.length / 2));
    translation = firsthalf + '-' + secondhalf;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  //si es palindromo
  if (str == reverse(str)) {
    translation = minMay(str);
  }

  return translation;
}