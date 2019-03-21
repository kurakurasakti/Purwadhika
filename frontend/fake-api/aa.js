import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import axios from 'axios'
import { urlApi } from '../support/urlApi';
import {Button,Icon,Input} from 'semantic-ui-react'
import CurrencyFormat from 'react-currency-format';
import swal from 'sweetalert';
import {connect} from 'react-redux'
import PageNotFound from '../components/404'
import {cartLength} from '../1.actions'
import cookie from 'universal-cookie'

const simpenan = new cookie()
const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class CustomPaginationActionsTable extends React.Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 5,
    harga:0,
    isEdit :false,
    quantity :0,editItem:{},editIndex : Number,
    totalHarga:0,
    cartQuantity :0

  };
  
  componentDidMount(){
    var cookie = simpenan.get("userData")
    this.getDataApi(cookie)

  }
  // componentDidUpdate(){
  //   this.getDataApi()
  // }
  getDataApi = (nama)=>{
      axios.get(urlApi+'/cart?username='+nama)
      .then((res)=>{
      console.log(res) 
      this.setState({rows:res.data})
     
        this.props.cartLength(res.data.length)
    
    })
      .catch((err)=> console.log(err))
  }
 
  getTotalHarga = ()=>{
   var harga=0
   
    for (var i=0;i<this.state.rows.length;i++){
       harga += parseInt((this.state.rows[i].harga - (this.state.rows[i].harga *this.state.rows[i].diskon/100))*this.state.rows[i].quantity)
    }
  
    return harga
    
  }

  onBtnEdit = (val,index)=>{
    
    this.setState({isEdit:true,editItem:val,editIndex:index})
    
  }
  onBtnCancel = ()=>{
    this.setState({isEdit:false})
  }
  onBtnSave= ()=>{
    var all = this.state.editItem
    var quantity = parseInt(this.refs.quantity.value)
    var username = this.props.username
    var userId = this.props.id
    var productId = all.productId
    var nama = all.nama
    var harga = parseInt(all.harga)
    var diskon = parseInt(all.diskon)
    var category = all.category
    var img = all.img
    var desc = all.desc

    var newData = {
      quantity,username,userId,productId,nama,harga,diskon,category,img,desc 
    }
    axios.put(urlApi+"/cart/"+this.state.editItem.id,newData)
    .then((res)=>{
      console.log(res)

      swal("Success","Edit Success","success")
      this.setState({isEdit:false})
    })
    .catch((err)=>console.log(err))
  }


  onBtnDelete= (id)=>{
      axios.delete(urlApi+'/cart/'+id)
      .then((res)=>{
        var cookie = simpenan.get("userData")
        this.getDataApi(cookie)
      })
      .catch((err)=>console.log(err))
  }

  cekOut = ()=>{
    
    axios.get(urlApi+'/cart?userId='+this.props.id)
    .then((res)=>{
      if (res.data.length>0){
        for (var i=0; i<this.state.rows.length;i++){
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          var yyyy = today.getFullYear();
          today = dd + '/' + mm + '/' + yyyy;
          var quantity = res.data[i].quantity
          var username = res.data[i].username 
          var userId =res.data[i].userId 
          var productId = res.data[i].productId 
          var nama = res.data[i].nama 
          var harga = res.data[i].harga 
          var diskon = res.data[i].diskon 
          var category = res.data[i].category 
          var img = res.data[i].img 
          var desc = res.data[i].desc 
              // var cart = this.state.rows
          var newData = {
            tanggal:today,quantity,username,userId,productId,nama,harga,diskon,category,img,desc
            
          }

          axios.post(urlApi+"/history/",newData)
            .then((res)=>{
              swal("Thank you","Please Come Again","success")
            })
            .catch((err)=>console.log(err))

              axios.delete(urlApi+"/cart/"+this.state.rows[i].id)
              .then((res)=>{console.log(res)
                this.getDataApi()
                
              })
            .catch((err)=>console.log(err))

        }
   

            
            
      }else{
        swal("Item Kosong","Blank","error")
      }
    })
    .catch((err)=>console.log(err))
  }
  renderJsx = ()=>{
    
    var jsx = this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
    .map((val,index)=>{
        return (
          
            <TableRow key={val.id}>
                  <TableCell align="center" component="th" scope="row">
                    {index+1}
                  </TableCell>
                  <TableCell align="left">{val.nama}</TableCell>
                  
                  <TableCell align="left">{val.diskon} %</TableCell>
                  <TableCell align="left">
  <CurrencyFormat value={val.harga - (val.harga*(val.diskon/100))} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <div>{value}</div>} />
                  
                  </TableCell>
                  {this.state.isEdit===true && this.state.editIndex===index?
                  <TableCell align="center">
                  <input ref="quantity" type="number" defaultValue={val.quantity}>
                  </input></TableCell>:
                  <TableCell align="center">{val.quantity}</TableCell>
                  
                }
                  <TableCell align="left">{val.category}</TableCell>
                  <TableCell align="left"><img width="50px" height="50px" src={val.img}/></TableCell>
                  <TableCell align="left">
                  {this.state.isEdit===true && this.state.editIndex===index?
                  <div>
                    <Button animated color="blue" onClick={this.onBtnSave}>
                    <Button.Content visible> Save Item</Button.Content>
                    <Button.Content hidden>
                        <Icon name='save' />
                    </Button.Content>
                    </Button>

                
                    <Button animated color="red" onClick={()=>this.onBtnCancel()}>
                    <Button.Content visible>Cancel</Button.Content>
                    <Button.Content hidden>
                        <Icon name='cancel' />
                    </Button.Content>
                    </Button>
                    </div>:
                     <div>
                     <Button animated color="blue" onClick={()=>this.onBtnEdit(val,index)}>
                     <Button.Content visible>Edit Quantity</Button.Content>
                     <Button.Content hidden>
                         <Icon name='edit' />
                     </Button.Content>
                     </Button>
 
                 
                     <Button animated color="red" onClick={()=>this.onBtnDelete(val.id)}>
                     <Button.Content visible>Delete</Button.Content>
                     <Button.Content hidden>
                         <Icon name='delete' />
                     </Button.Content>
                     </Button>
                     </div>
                
                }
                  
                  
                  </TableCell>
            </TableRow>
            
        )
    })
     return jsx;
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value });
  };

  render() {
    if (this.props.role !=="admin" && this.props.role !=="user"){
      return <PageNotFound></PageNotFound>
    }else{
     
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
      
     return (
       
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Nama</TableCell>
                   
                    <TableCell align="center">Diskon</TableCell>
                    <TableCell align="center">Harga (Diskon)</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Kategori</TableCell>
                    <TableCell align="center">Gambar</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
                
            </TableHead>
            <TableBody>

              {this.renderJsx()}
              
             <TableRow>
                <TableCell colSpan={7}>
                <p>Total Harga : <b>Rp. {this.getTotalHarga()}   </b> </p>

                </TableCell>
                <TableCell colSpan={6} >
                <Button animated color="green" onClick={this.cekOut}>
                              <Button.Content visible>Check Out</Button.Content>
                              <Button.Content hidden>
                                  <Icon name='cart' />
                              </Button.Content>
                              </Button>
                </TableCell>

             </TableRow>
             
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
               
              </TableRow>
            </TableFooter>
          </Table>
          <Paper>
              
          </Paper>

        
        </div>
        
        
      </Paper>
    );

    }
    
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
  return{
    role : state.user.role,
    id:state.user.id,
    username :state.user.username,
    cart:state.cart.cartGlobal
  }
}

export default connect(mapStateToProps,{cartLength}) (withStyles(styles)(CustomPaginationActionsTable));


On Mon, Mar 18, 2019 at 3:48 PM David L <davidlohanda8@gmail.com> wrote:
import React from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, NavLink,DropdownToggle,DropdownItem,DropdownMenu} from 'reactstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {resetUser} from '../1.actions'
import axios from 'axios'

const Cookie=new cookie()

class Header extends React.Component{
state={cart:[]}
constructor(props) {
super(props);
this.toggle = this.toggle.bind(this);
this.state = {
isOpen: false
};
}
toggle() {
this.setState({
isOpen: !this.state.isOpen
});
}

onBtnLogout=()=>{
Cookie.remove('userData')
this.props.resetUser()
}

componentDidUpdate(){
this.renderCartLength()
}

renderCartLength=()=>{
axios.get('http://localhost:2000/cart')
.then((res)=>{
var cartLength=0
res.data.map((val)=>{
cartLength+=val.quantity
})
this.setState({cartLength:cartLength})
})
.catch((err)=>console.log(err))
}
render(){
if(this.props.username !== ''){
return <div style={{marginBottom:"75px"}}>
<Navbar color="light" light expand="md" fixed="top">
<NavbarBrand className="ml-2" ><Link to='/'> <img src="http://www.logospng.com/images/43/letter-f-bootstrap-logos-43177.png" alt="brand" width="30px" /> </Link> </NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="ml-auto" navbar>
<NavItem>
<div className="input-group border-right" style={{width:"350px"}}>
<input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
<div className="input-group-append mr-2">
<button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
</div>
</div> 
</NavItem>
<NavItem>
<NavLink>Hi , {this.props.username}</NavLink>
</NavItem>
<NavItem>
<Link to="/cart"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i class="fas fa-shopping-cart"></i> Cart {this.state.cartLength} </NavLink></Link>
</NavItem>
<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret>
Menu
</DropdownToggle>
<DropdownMenu right>
{
this.props.role === 'admin' 
? 
<Link to='/manage'> 
<DropdownItem>
Manage Product
</DropdownItem> 
</Link>
:
null
}
<Link to='/history'>
<DropdownItem>
Histori Transaksi
</DropdownItem>
</Link>
<DropdownItem>
Edit Profile
</DropdownItem>
<DropdownItem divider />
<DropdownItem onClick={this.onBtnLogout}>
Log Out
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</Collapse>
</Navbar>
</div>
}

return(
<div style={{marginBottom:"75px"}}>
<Navbar color="light" light expand="md" fixed="top">
<NavbarBrand className="ml-2" ><Link to='/'> <img src="http://www.logospng.com/images/43/letter-f-bootstrap-logos-43177.png" alt="brand" width="30px" /> </Link> </NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="ml-auto" navbar>
<NavItem>
<div className="input-group border-right" style={{width:"350px"}}>
<input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
<div className="input-group-append mr-2">
<button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
</div>
</div> 
</NavItem>
<NavItem>
<Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Register</NavLink></Link>
</NavItem>
<NavItem>
<Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Login </NavLink></Link>
</NavItem>
</Nav>
</Collapse>
</Navbar>
</div>
)
}
}

const mapStateToProps=(state)=>{
return{
username:state.user.username,
role:state.user.role,
}
}

export default connect(mapStateToProps,{resetUser})(Header)
