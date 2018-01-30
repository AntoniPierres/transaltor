const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

  it('si la palabra termina con ar', function () {
    const translation = platzom('programar')
    expect(translation).to.equal('program')
  })
  it('si la palabra empieza con z', function () {
    const translation = platzom('zorro')
    expect(translation).to.equal('zorrope')
  })
  it('si la palabra traducida es mayor a 10 letras', function () {
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })
  it('si es palindromo ', function () {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')

  })

})
