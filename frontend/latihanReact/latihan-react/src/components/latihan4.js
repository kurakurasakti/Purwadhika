import { connect } from 'react-redux'
import { fnCountWord } from './../1.actions'
import React from 'react'

class Latihan4 extends React.Component{
    state = {toDo : ['makan', 'tidur', 'mandi'], selectTedToDo : -1}
    
    handleBtnEdit = (no) =>{
        this.setState({selectTedToDo : no})
    }

    handleBtnCencel = () =>{
        this.setState({selectTedToDo : -1})
    }
    handleBtnSave = (no) =>{
        // var newData = this.refs.editValue.value;
        // this.state.toDo[no] = newData;
        // this.setState({selectTedToDo : -1})

        //cara lain
        var newData = this.refs.editValue.value;
        var arrTemp = [...this.setState.toDo];
        arrTemp[no] = newData
        this.setState({toDo : arrTemp, selectTedToDo : -1})
    }
    handleBtnDelete = (no) =>{
        var arrTemp = [...this.state.toDo]
        arrTemp.splice(no,1)
        this.setState({toDo : arrTemp})

    }
    renderState = () => {
        var jsx = this.state.toDo.map((val,index) => {
            if (this.setState.selectTedToDo === index) {
                return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{val}</td>
                        <td><input type='text' className='form-control'  ref='editValue' defaultValue={val}></input></td>
                        {/* <td><input type='button' className='btn btn-primary' value='edit'></input></td> */}
                        <td><input type='button' className='btn btn-danger' value='cencel'></input></td>
                        <td><input type='button' className='btn btn-success' value='save' onClick={()=>{this.handleBtnSave(index)}}></input></td>

    
                    </tr>
                )
            }
            else{
                return(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{val}</td>
                        {/* <td><input type='text' className='form-control' defaultValue={val}></input></td> */}
                        <td><input type='button' className='btn btn-primary' value='edit'></input></td>
                        <td><input type='button' className='btn btn-danger' value='delete' onClick={()=>{this.handleBtnDelete(index)}}></input></td>
    
                    </tr>
                )
            }
            
        })
        return jsx
    }

    handleBtnAdd = () => {
        var todo = this.refs.todo.value
        this.setState({toDo:[...this.state.toDo , todo]})
        this.refs.todo.value = ''
        this.props.hitungKata(this.state.toDo.length + 1)
    }
    handleHapusAll= () => {
        this.setState({toDo : []})
        this.props.hitungKata(0)
    }
    hapusAllBtnRender = () => {
        if(this.state.toDo.length > 0){
            return <input type="button" className="btn btn-default border-primary" value='Hapus All' onClick={this.handleHapusAll} />
        }
    }
    render(){
        return(
            <div style={{marginTop:'40px'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <input type="text" className="form-control" placeholder="What will you do?" ref='todo' />
                    </div>
                    <div className = 'col-md-2'>
                        <input type="button" className="btn btn-default border-primary" value='Add' onClick={this.handleBtnAdd} />
                    </div>
                    <div className='col-md-4'>
                        <table class="table table-hover">
                        <tbody>
                            
                           {this.renderState()}
                         
                        </tbody>
                        </table>
                            {this.hapusAllBtnRender()}

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{fnCountWord})(Latihan4);