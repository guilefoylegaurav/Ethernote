import React,{useState,useContext,useEffect} from 'react'; 
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Tile = (props) => 
{
  const history = useHistory()
  let note = props.note; 
  let purchaseNote = props.purchaseNote; 
  const account = props.account; 
  const purchase = async () => {
    
    await purchaseNote(note.id, note.price); 
    M.toast({html: 'Purchased product', classes:"#43a047 green darken-1"})
    

  
  }
    if (!note.purchased || (note.purchased && note.owner === account))
    {
      return (   <div className="col s12 m6">
      <div className="card medium">
        <div className="card-image">
          <img src="https://i.pinimg.com/originals/bc/4d/2f/bc4d2f5519de097e105103fab1c71c02.jpg" />
          
          
        </div>
        <div className="card-content">
        <span className="card-title">{note.name}</span>
          <p>Owner: {note.owner}</p>
        </div>
        <div className="card-action right-align">
          <a href="#">{window.web3.utils.fromWei(note.price.toString(), 'Ether')} Eth</a>
         
         {note.owner === account ?  <a href={note.link}>Link</a>: <a className="btn-floating  btn-small waves-effect waves-light red" onClick = {()=> purchase()}><i className="material-icons">add_shopping_cart</i></a>  } 
        </div>
      </div>
    </div>); 


    }
    else
    {
      return null; 
    }
  
}

export default Tile; 