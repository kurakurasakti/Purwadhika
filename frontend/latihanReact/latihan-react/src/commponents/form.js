//#region gagal
// import React from 'react'
// import './../support/css/cssForm.css'

// class Form extends React.Component{
//     state = {nama: ''}
//     handleButton = () =>{
//         var username = this.refs.username.value
//         alert(username)
//         this.state({nama:username})
//     }
//     render(){
//         //var hidden = {color:'white', fontSize:'30px'}
//         return(
//             // <div className='container' style={{border:'1px solid'}}>
//             //nambahin inline css
//             <div className='container'>
//                 <div class='row justify-content-center'>
//                     <div class="form-row col-md-6">
//                         <div className="form-group">
//                             <label htmlFor="exampleInputEmail1" class="merah">Email address</label>
//                             <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama" refs='username' />
//                             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                         </div>
//                         <div className="form-group">
//                              <label htmlFor="exampleInputPassword1">Password</label>
//                             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//                         </div>
//                         <div className="form-group">
//                             {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
//                             <input type="button" className="btn btn-primary" onClick={this.handleButton}>Submit</input>

//                         </div>
//                         <div className='col-md-6'>
//                             <h1>{this.state.nama}</h1>
//                         </div>
//                     </div>   
//                 </div>
//             </div>
//         )
//     }
// }

// export default Form
//#endregion
import React from 'react';
import { Col, Button, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='justify-content-center'>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}></Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={2}></Label>
              <Col sm={10}>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
        </div>
        
      </div>
    );
  }
}



