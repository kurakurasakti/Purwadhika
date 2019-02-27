import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './commponents/header';
import Form from './commponents/form';
import {Route} from 'react-router-dom'
import Footer from './commponents/footer';
//import Button from 'reactstrap';
import Homepage from './commponents/homePage'


class App extends Component {
  btnClick = () => {
    alert('masuk')
}
  render() {
    return (
      <div>
        <Navbar/>        
          {/* <Form fn={this.btnClick}/>
          {/* <Button color="primary"></Button> 
          <h1>Hello World</h1>
          <Footer nama='seto' warna='red' > Mahasiswa </Footer> 
          <Form/>*/}
        <div className='container'>
        <Route path='/' component={Homepage} exact />
        <Route path='/form' component={Form} />
        
        </div>
        <Footer />
      </div>
     
     
    );
  }
}

export default App;

