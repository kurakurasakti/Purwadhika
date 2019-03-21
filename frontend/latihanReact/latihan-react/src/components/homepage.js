import React from 'react'
import { connect } from 'react-redux'

class Homepage extends React.Component{
    render(){
    var {username,email} = this.props.nama 
        return(
            <div>
                <h1>Selamat Datang Di Website {this.props.nama.username}</h1>
                <h2>{this.props.nama.email}</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {nama : state.user}
}

export default connect(mapStateToProps)(Homepage);