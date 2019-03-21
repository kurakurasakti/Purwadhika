import React, { Component } from 'react';
import Footer from './components/footer'
import Navbar from './components/header'
import Form from './components/form'
import Homepage from './components/homepage'
import Product from './components/product'
import TxtArea from './components/txtarea';
import LatihanDua from './components/latihanDua';
import LatihanTiga from './components/latihanTiga';
import LatihanEmpat from './components/latihan4';

import {Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  btnClick = () => {
    alert('Masuk')
  }


  render() {
    return (
      <div>
        <Navbar/>
        <div className='container'>
          <Route path='/form' component={Form} />
          <Route path='/products' component={Product} />
          <Route path='/' component={Homepage} exact />
          <Route path='/txtArea' component={TxtArea}/>
          <Route path='/latihandua' component={LatihanDua}/>
          <Route path='/latihantiga' component={LatihanTiga}/>
          <Route path='/latihanemapt' component={LatihanEmpat}/>
        </div>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
