console.log('App.js is running')
// JSX -javascript XML
// if statement
// tenary operator

 const app ={
     title: "indecison App",
     subtitle: 'Put your life in the hands of a computer',
     options: []
 }
 const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderAppPage()
    }
 }
 const remove = () => {
     app.options.length = 0
     renderAppPage()
 }
 const onMakeDecision = () =>{
     const randomNumber = Math.floor(Math.random() * app.options.length)
     const option = app.options[randomNumber]
     alert(option)
     console.log(randomNumber)
 }

    const appRoot = document.getElementById('app');

    const numbers = [ 55, 101, 1000];

    const renderAppPage = () =>{
        const template = (
            <div>
                <h1>{app.title ? app.title : "Anonymous"}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options':'There is no option' }</p>
                <p>{app.options.length}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do</button>
                <button onClick={remove}>Remove All</button>
        
                {
                   app.options.map((option)=><li key={option}>{option}</li>) 
                }
               <form onSubmit={onFormSubmit}>
                   <input type="text" name="option"/>
                   <button> Add Option</button>
               </form>
            </div>  
            );         
            ReactDOM.render(template, appRoot)
    }
    renderAppPage()