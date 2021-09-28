import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tile from './Tile';

const Main = (props) => 
{
  
  let products = props.products; 
  let loading = props.loading; 
  let purchaseNote = props.purchaseNote; 
  const account = props.account; 
  const getData = props.getData; 
  

  return (
    <div className="container">
      <br />
      <br />
      <br />
  

     <div className="row">
       {loading && loading === true ?  <div className="progress pbar">
      <div className="indeterminate" />
      </div>
     :
      <div>
       {products ? 

       products.map((product, key) => {
         return (<Tile getDate = {getData} account = {account} note = {product} purchaseNote = {purchaseNote} /> ); 
       }) : <h3 className="center-align">No products available</h3>  
       
       } </div> } 
 

  


    

  </div>
     
<div className="fixed-action-btn">
  <Link to="/add_product">
  <a className="btn-floating btn-large light-blue lighten-2">
    <i className="large material-icons">add</i>
  </a>
  </Link>
  
</div>
      
    </div>
  ); 
}

// className Main extends Component {

//   render() {
//     return (
//       <div id="content">
//         <h1>Add Product</h1>
//         <form onSubmit={(event) => {
//           event.preventDefault()
//           const name = this.productName.value
//           const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
//           this.props.createProduct(name, price)
//         }}>
//           <div className="form-group mr-sm-2">
//             <input
//               id="productName"
//               type="text"
//               ref={(input) => { this.productName = input }}
//               className="form-control"
//               placeholder="Product Name"
//               required />
//           </div>
//           <div className="form-group mr-sm-2">
//             <input
//               id="productPrice"
//               type="text"
//               ref={(input) => { this.productPrice = input }}
//               className="form-control"
//               placeholder="Product Price"
//               required />
//           </div>
//           <button type="submit" className="btn btn-primary">Add Product</button>
//         </form>
//         <p>&nbsp;</p>
//         <h2>Buy Product</h2>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Name</th>
//               <th scope="col">Price</th>
//               <th scope="col">Owner</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody id="productList">
//             { this.props.products.map((product, key) => {
//               return(
//                 <tr key={key}>
//                   <th scope="row">{product.id.toString()}</th>
//                   <td>{product.name}</td>
//                   <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
//                   <td>{product.owner}</td>
//                   <td>
//                     { !product.purchased
//                       ? <button
//                           name={product.id}
//                           value={product.price}
//                           onClick={(event) => {
//                             this.props.purchaseProduct(event.target.name, event.target.value)
//                           }}
//                         >
//                           Buy
//                         </button>
//                       : null
//                     }
//                     </td>
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

export default Main;
