import React from 'react'; 
import './TipBox.css';

class ToolTip extends React.Component{ 
    render(){ 
        return(  
            <div style={{opacity:this.props.show?"0.8":"0"}}
             className= {"tool-tip-box tool-tip-box-" + this.props.type} >
                {this.props.value}
            </div>
        );
    }
}

export default class TipBox extends React.Component{
    constructor(){
        super(); 
        this.state={
            show:false
        }
    }

    handlClick=()=>{
        if(this.props.showEvent==='click'){
            this.setState(
                {show:!this.state.show}
            ); 
        } 
    }

    handlMouseOver=()=>{
        if(this.props.showEvent==='hover'){
            this.setState(
                {show:true}
            ); 
        } 
    }

    handlMouseOut=()=>{
        if(this.props.showEvent==='hover'){
            this.setState(
                {show:false}
            ); 
        } 
    }

    render(){ 
        return(
            <div className="box" onClick={this.handlClick} 
                     onMouseOver ={this.handlMouseOver} onMouseOut={this.handlMouseOut}>
                <div >
                    {this.props.title}
                </div>
                <ToolTip value={this.props.value} type={this.props.tiptype} show={this.state.show}/>
            </div>
        );
    }
}