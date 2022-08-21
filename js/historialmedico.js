var medicamentos = document.getElementById("alergiasSi"), medicamentos2 = document.getElementById("alergiasNo")
especifique1 = document.getElementById("espcifique1"), comida = document.getElementById("animalSi"), comida2 = document.getElementById("animalNo"),
especifique2 = document.getElementById("espcifique2"), otro = document.getElementById("otro"),especifique3 = document.getElementById("espcifique3"),
nitro = document.getElementById("nitrog"), gluco = document.getElementById("gluco"),inha = document.getElementById("inha"),
alcohol = document.getElementById("alcoholSi"), alcohol2 = document.getElementById("alcoholNo"), especifique4 = document.getElementById("espcifique4");



//nitro = getElementById("nitrog"), gluco = document.getElementById("gluco"), inha = document.getElementById("inha"); 


medicamentos.addEventListener('click', (e)=> {
    especifique1.classList.add('true');
})

medicamentos2.addEventListener('click', (e)=> {
    especifique1.classList.remove('true');
})


comida.addEventListener('click', (e)=> {
    especifique2.classList.add('true2');
})

comida2.addEventListener('click', (e)=> {
    especifique2.classList.remove('true2');
})


otro.addEventListener('click', (e)=> {
    especifique3.classList.add('true3');
})

nitro.addEventListener('click', (e)=> {
    especifique3.classList.remove('true3');
})

gluco.addEventListener('click', (e)=> {
    especifique3.classList.remove('true3');
})

inha.addEventListener('click', (e)=> {
    especifique3.classList.remove('true3');
})

alcohol.addEventListener('click', (e)=> {
    especifique4.classList.add('true4');
})

alcohol2.addEventListener('click', (e)=> {
    especifique4.classList.remove('true4');
})

