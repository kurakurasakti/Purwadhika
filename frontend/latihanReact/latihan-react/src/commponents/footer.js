import React, { Component } from 'react'


class Footer extends Component{
    state = {number : 1}
    handleState = () =>{
        this.setState({number : this.state.value+1})
        
    }
    render(){
        return(
            <div>
                {/* <h1 style="{{color:this.props.warna}}">ini Footer {this.props.nama}</h1> */}
                <h2>{this.state.number}</h2>
                <input type='button' value='coba' onClick={this.handleState}/>
            </div>
        )
    }
}

export default Footer