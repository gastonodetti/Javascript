const tareasLista = document.getElementById("ul")
const ingreso = document.getElementById("input")
const boton = document.getElementById("button")
const botonBorrar = document.getElementById("borrar")
let arrayTareas = JSON.parse(localStorage.getItem('tareasGuardadas'))

function recuperarTareas(){
  if(!arrayTareas){
    arrayTareas = []
  } 
}

function renderTareas(){

  tareasLista.innerHTML = ""

  arrayTareas.forEach((element,i) => {

    let li = document.createElement("li")
    li.className = "liClass"
    li.id = i
    li.innerText = element

    tareasLista.appendChild(li)


  });
}

boton.addEventListener("click", function(){

  if (ingreso.value.length > 1 ){
    arrayTareas.push(ingreso.value)
  }

  localStorage.setItem('tareasGuardadas', JSON.stringify(arrayTareas))

  renderTareas("liClass")
  ingreso.value = ''

})

botonBorrar.addEventListener("click", function(){
  arrayTareas = []
  localStorage.removeItem('tareasGuardadas')
  tareasLista.innerHTML = ""
})

recuperarTareas()
renderTareas()


tareasLista.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked'); 
  }

}, false);


