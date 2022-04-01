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

  if (ingreso.value.length > 2 ){
    arrayTareas.push(ingreso.value)
  }

  localStorage.setItem('tareasGuardadas', JSON.stringify(arrayTareas))

  renderTareas()

})



botonBorrar.addEventListener("click", function(){
  localStorage.removeItem('tareasGuardadas')
  tareasLista.innerHTML = ""
})


recuperarTareas()
renderTareas()


let lis = document.getElementsByTagName('li');

[].forEach.call(lis, element => {
  element.addEventListener('click', () => {
     element.className = "checked"
  });
});