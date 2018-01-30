//translate new language
export default function platzom(str) {
  let translation = str
  //si la palabra termina en 'ar'
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2)
  }
  //si la palabra inicia con z
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }
  //si la traduccion tiene +10 letras
  if (translation.length >= 10 ) {
    let firsthalf = translation.slice(0, Math.round(translation.length / 2 ))
    let secondhalf = translation.slice( Math.round(translation.length / 2 ))
    translation = `${firsthalf}-${secondhalf}`
  }

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    let translation = ''
    let capitalize = true
    for (var i = 0; i < str.length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }
  //si es palindromo
  if (str == reverse(str)) {
    translation = minMay(str)
  }

  return translation
}
