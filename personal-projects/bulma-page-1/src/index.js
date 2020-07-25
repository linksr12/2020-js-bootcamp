import './sass/mybulma.scss' //Import is readeable by webpack, if we have some sintax unknown, we have to use babel
import './sass/styles.scss'//We import all sass extensions for its use
//import 'bulma/bulma.sass no use this because this is not funtional to personalize'
import '@fortawesome/fontawesome-free/js/all'//We import fontawesome framework

const sayHello = 'Getting started with bulma' //using const to add a text into variable
console.log(sayHello)//Shows in console the result.