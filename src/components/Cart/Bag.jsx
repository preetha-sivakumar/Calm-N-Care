import React, {useState} from 'react'
import './Bag.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let cartData=[{
    cart_id:"",
    product_id:"",
    name:"",
    price:"",
    quantity:"",
    total:""
}]

const Bag = () => {
  const[enablediv, setenablediv] = useState(false);
    async function getCart(){
        await fetch(`http://localhost:5000/users/get-from-cart`,{
        method:"POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({cart_id:"001"})
      }).then(
        res=>res.json()
      ).then(
        (res)=>{
          cartData=res.cartData
          setenablediv(true)
        }
      ).catch(err=>{
        alert('Cart not loaded')
      window.location.href='/CalmNCare-home'})
    }
    getCart();
    return(
            <>
            {enablediv &&
            <div>
            <h2 class="bagh2">Cart Items </h2>
            <div class="bag-table">
            <TableContainer component={Paper}>    
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="left">Items</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="leftt">Quantity</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartData.map((row) => (
            <TableRow
              key={row.product_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.quantity}</TableCell>
              <TableCell align="left">{row.total}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>}
            {/* <div className="bag">
                <div className="bag-items">
                    <div className="bag-items-title">
                        <p>Items</p>
                        <p>Price</p>
                        <p>Quanity</p>
                        <p>Total</p>
                        
                    </div>
                    <br />
                    <hr />
                    <div> 
                    {cartData.map((item, index) => {
                         return (
        <div key={index} className="bag-items-title bag-items-item">
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <p>{item.total}</p>
        </div>
    );
})}
                    
                    <hr />
                    </div>
                   
        
                </div>
            </div> */}
            </>)
        
}

export default Bag;