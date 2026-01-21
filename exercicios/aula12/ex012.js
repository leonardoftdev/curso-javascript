var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}h.`)
if (hora >= 6 && hora < 12) {
    console.log('Bom dia, Ja é de manhã!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde, Ja é de tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite, Ja é de noite!')
} else if (hora >= 0 && hora < 6) {
    console.log('Vai dormir que ja está tarde, ja é de madrugada!')
}