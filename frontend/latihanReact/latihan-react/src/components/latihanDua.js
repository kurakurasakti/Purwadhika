import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class latihan2 extends React.Component{
    //buat state dulu
    //abis itu bikin function nya terus baru setState satu"

    handleOnchange = (props) =>{
        
    }
    btnMin = () =>{

    }
    btnPlus = () =>{

    }
    render(){
        return(
            <div>
                <FormGroup className='col-sm-12 col-md-6 offset-md-3' style={{marginTop:'50px'}}>
                    <Input type="email" name="email" id="total" placeholder="harga" onChange={this.handleOnchange} ref='angka'/>
                    <br/>
                    <Button color="primary" size="sm" onClick={this.setState}>+</Button>
                    <h1>0</h1>
                    <Button color="primary" size="sm">-</Button>
                    <h1>Rp </h1>
                </FormGroup>
                
            </div>
        )
    }
}

export default latihan2