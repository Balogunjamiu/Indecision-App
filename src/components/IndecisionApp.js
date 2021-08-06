import React from 'react'
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal'
 export default class IndecisionApp extends React.Component{
     state = {
         options : [],
         selectedOption :undefined
     }
    ClearSelectedOption=()=>{
        this.setState(()=>({
            selectedOption: undefined
        }))
        //console.log(this.state.options)
    }
    handleDeleteOptions=()=>{
        this.setState(()=>({options:[]}))
    }
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({options: prevState.options.filter((option)=>optionToRemove !== option)}))
    }
    handlepick=()=>{
           const  MathRandom = Math.floor(Math.random() * this.state.options.length)
            const Option = this.state.options[MathRandom]
            this.setState(()=>({selectedOption:Option}))
            
    
    }
    handleAddOption =(option)=>{
        if(!option){
            return `Enter valid value to add item`
        }else if(this.state.options.indexOf(option)> -1){
            return 'This option already exist'
        }
        this.setState((prevState)=>({options: prevState.options.concat([option])}))
    }
    componentDidMount(){    
        try{        
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
            if(options){
                this.setState(()=>({options}))
            }
        }catch(e){
            // do nothing at all
        }
    }
        componentDidUpdate (preProps, prevState){
            if (prevState.options.length !==  this.state.options.length){
                const json = JSON.stringify(this.state.options)
                localStorage.setItem('options', json)
                console.log('Saving Data')           
            }
        }
        componentWillUnmount(){
            console.log('component will unmount')
        }
        
    render(){
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle}/>
            <div className ="container">
            <Action hasOptions = {this.state.options.length > 0} handlepick = {this.handlepick}/>
            <div className="widget">
            <Options options={this.state.options} 
            handleDeleteOptions = {this.handleDeleteOptions} 
            handleDeleteOption = {this.handleDeleteOption}/>
            <AddOptions 
            handleAddOption={this.handleAddOption}/>
            </div>
            <OptionModal
            selectedOption= {this.state.selectedOption}
            ClearSelectedOption={this.ClearSelectedOption}
            />
              </div>
            
            </div>
        )
    }
}