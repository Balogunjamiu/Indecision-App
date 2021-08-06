import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))

// class Oldsyntax {
//     constructor(){
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting(){
//         return ` Hi, My name  is ${this.name}`
//     }
// }
// const oldsyntax = new Oldsyntax()
// const getGreeting = oldsyntax.getGreeting
// console.log(getGreeting())

// class NewSyntax {
//     name = "balogun"
//     getGreeting = () =>{
//         return ` Hi, My name  is ${this.name}`
//     }
// }
// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting
// console.log(newGetGreeting())