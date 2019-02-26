import React from 'react'
import './../support/css/cssForm.css'

class Form extends React.Component{
    state = {nama: ''}
    handleButton = () =>{
        var username = this.refs.username.value
        alert(username)
        this.state({nama:username})
    }
    render(){
        var hidden = {color:'white', fontSize:'30px'}
        return(
            // <div className='container' style={{border:'1px solid'}}>
            //nambahin inline css
            <div className='container'>
                <form>
                    <div class="form-row col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" class="merah">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nama" refs='username' />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                             <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
                            <input style={hidden} type="button" className="btn btn-primary" onClick={this.handleButton}>Submit</input>

                        </div>
                    </div>
                    
                    <div className='col-md-6'>
                        <h1>{this.state.nama}</h1>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form