import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './commponents/header';
import Form from './commponents/form';
//import Footer from './commponents/footer';
//import Button from 'reactstrap';


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
          <Footer nama='seto' warna='red' > Mahasiswa </Footer> */}
          <Form/>
      </div>
     
     
    );
  }
}

export default App;

