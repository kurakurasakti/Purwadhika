import React from 'react'
import './../support/css/cssform.css'
//import { fnUbahUser } from './../1.actions';
import {connect} from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import {fnCountWord} from './../1.actions'

class txtarea extends React.Component {
    handleChange = () =>{
       //cuma get value dari textarea
        var kata = this.refs.text.value
        this.props.fnCountWord(kata)
    }
    render() {
      return (
        <div className="container" style={{marginTop:'30px'}}>
            <Form className="col-md-6">
                <FormGroup>
                    <Label for="exampleText" >Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={this.handleChange} ref='text' />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">{this.props.kata} Word</Label>
                </FormGroup>
            </Form>
        </div>
        
      )
    }
}


const mapStateToProps = (state) => {
    return {
        kata : state.jumlah.count
    }
}

export default connect(mapStateToProps,{fnCountWord})(txtarea)
