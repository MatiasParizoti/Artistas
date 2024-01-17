window.revelar = ScrollReveal({reset:true})

// DARK MODE

let trilho =document.getElementById('trilho')
let body =document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

//conteudo
revelar.reveal('.efeito-R', {
    duration: 2000,
    delay: 7500,
})
//video
revelar.reveal('.efeito-video', {
    duration: 2000,
    delay: 7500,
})
//audio
revelar.reveal('.efeito-audio', {
    duration: 2000,
    delay: 8500
})
//retrato1
revelar.reveal('.efeito-retrato1', {
    duration: 2000,
    distance:'90px',
    delay: 1500,
    origin:'top'
})
//retrato2
revelar.reveal('.efeito-retrato2', {
    duration: 2000,
    distance:'180px',
    delay: 2500,
    origin:'top'
})
//retrato3
revelar.reveal('.efeito-retrato3', {
    duration: 2000,
    distance:'90px',
    delay: 4500,
    origin:'top'
})
//retrato4
revelar.reveal('.efeito-retrato4', {
    duration: 2000,
    distance:'180px',
    delay: 5500,
    origin:'top'
})
//retrato5
revelar.reveal('.efeito-retrato5', {
    duration: 2000,
    distance:'270px',
    delay: 3500,
    origin:'top'
})
revelar.reveal('.efeito-retrato6', {
    duration: 2000,
    distance:'270px',
    delay: 6500,
    origin:'top'
})
revelar.reveal('.efeito-pessoa', {
    duration: 2000,
    delay: 8500
})





