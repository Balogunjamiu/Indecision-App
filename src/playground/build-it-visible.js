class VisibilityToggle extends React.Component{
  constructor(props){
      super(props)
      this.handleVisibiltyToggle = this.handleVisibiltyToggle.bind(this)
      this.state = {
        visibility : false
      }
  }
  handleVisibiltyToggle(){
    this.setState((prevState)=>{
      return{
        visibility : !prevState.visibility
      }
    })
    
    
    console.log(this.state.visibility)
    
  }
  render(){
    return(
      <div>
        <h1>VisibilityToggle</h1>
        <button onClick={this.handleVisibiltyToggle}>{this.state.visibility? "Hide details" : "Show details"}</button>
       {/* <p>{Visibility? "Their are more content here":""}</p> */}
              {this.state.visibility &&(
                <div>
                  <p>Their are more content here</p>
                </div>
              )}

      </div>
    )
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


//       const app = document.getElementById("app")
//     let Visibility = false

//   const showDetail = () =>{
//       Visibility =! Visibility 
//     render()
//   }

//     const render = ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//              <button onClick={showDetail}>{ Visibility ? "Hide Details": "Toggle"}</button>
//              {/* <p>{Visibility? "Their are more content here":""}</p> */}
//              {Visibility &&(
//                <div>
//                  <p>Their are more content here</p>
//                </div>
//              )}
//         </div>
//     )
//     ReactDOM.render(template, app)
// } 
// render()

