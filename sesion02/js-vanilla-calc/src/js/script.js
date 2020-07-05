//Comenzamos escuchadores de eventos
const n1 = document.querySelector('#primer_numero')//Existe la posibilidad de seleccionar valores de las etiquetas y clases.
const n2 = document.querySelector('#segundo_numero')//Asignamos una variable al valor de la etiqueta.
const sumButton = document.querySelector("#sum-button")//Asignamos a una constante todos los botones de las operaciones.
const resButton = document.querySelector("#res-button")
const proButton = document.querySelector("#mul-button")
const divButton = document.querySelector("#div-button")
const resultNode = document.querySelector('#result')//Tambien podemos agregar etiquetas 'h2' por ejemplo sin #.

//suma operacion
sumButton.addEventListener('click', function () {//Asignamos un escuchador de eventos para cuando demos click en el boton.
    //Numeros tranformados a enteros
    const n1Int = parseInt(n1.value)//Asignamos cambio de tipo de string a entero y lo guardamos en la variable.
    const n2Int = parseInt(n2.value)

    //operacion 
    const result = n1Int + n2Int//La operacion de ambos valores se asigna a otra variable
    console.log(result)//Muestra en consola un mensaje para el usuario

    //creacion de nodo<span>{resultado}<span>
    const textContent = document.createTextNode(result)//Creamos un nodo de texto para el resultado
    const spanElement = document.createElement('span')//Le decimos al cuerpo que agregue un <span>
    spanElement.appendChild(textContent)//

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {//Debemos checar cuantos nodos hijos tiene para asignar una limitacion en este caso es 3
        resultNode.removeChild(resultNode.childNodes[3])//Removemos el resultado cada vez que se ejecuta
    }
    resultNode.appendChild(spanElement)
    return result//Regresamos el valor para decirle que acabo la ejecucion.
})

//resta
resButton.addEventListener('click', function () {
    //Numeros tranformados a enteros
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    //operacion 
    const result = n1Int - n2Int
    console.log(result)

    //creacion de nodo<span>{resultado}<span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})
//multiplicacion 
//resta
proButton.addEventListener('click', function () {
    //Numeros tranformados a enteros
    const n1Int = parseInt(n1.value)
    const n2Int = parseInt(n2.value)

    //operacion 
    const result = n1Int * n2Int
    console.log(result)

    //creacion de nodo<span>{resultado}<span>
    const textContent = document.createTextNode(result)
    const spanElement = document.createElement('span')
    spanElement.appendChild(textContent)

    //eliminamos resultado previo
    if (resultNode.childNodes.length > 3) {
        resultNode.removeChild(resultNode.childNodes[3])
    }
    resultNode.appendChild(spanElement)
    return result
})
//division
divButton.addEventListener('click', function () {
    const numero1=parseInt(n1.value)
    const numero2=parseInt(n2.value)
    
    if(n1===null){
        console.log("no respondo")
    }
})
