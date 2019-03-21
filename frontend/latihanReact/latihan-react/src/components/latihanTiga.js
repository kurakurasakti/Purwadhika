import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class latihan3 extends React.Component{
    //buat state dulu
    //abis itu bikin function nya terus baru setState satu"
    state = {jumlah : ''}
    handleOnChange = () =>{
        var kata = this.refs.textarea.text.value
        var newOne = kata.replace(/a|i|u|e|o/g, '')
        this.setState({jumlah : newOne})
    }
    
    render(){
        return(
            <div className="container" style={{marginTop:'30px'}}>
            <Form className="col-md-6">
                <FormGroup>
                    <Label for="exampleText" >Enter words</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={this.handleOnChange} ref='text' />
                </FormGroup>
                <FormGroup>
                    <h1>{this.state.jumlah}</h1>
                </FormGroup>
            </Form>
        </div>
        )
    }
}

export default latihan3