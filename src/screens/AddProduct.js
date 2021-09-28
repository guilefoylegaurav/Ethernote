import React,{useState,useContext,useEffect} from 'react'; 
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const AddProduct = (props) => 

{
    
    const history = useHistory()
    const [link,setLink] = useState("")
    const [title,setTitle] = useState("")

    const [price,setPrice] = useState("")

    const addListing = async () => 
    {
        if (!link || !title || !price)
        {
            M.toast({html: "Null fields not allowed",classes:"#f44336 red"})
            return; 

        }
        const newPrice = window.web3.utils.toWei(price.toString(), 'Ether');
        await props.createNotes(link, title, newPrice);
        
        M.toast({html: 'Listed product', classes:"#43a047 green darken-1"})
        history.push('/'); 

    }
   
    return (

        <div className="container">
         <br />
         <br />
         <br />
         <br />
         <div class="row center-align">
             <div class = "col s12 m6">
             
                 <img class="materialboxed" width="80%" src="https://cdn-icons-png.flaticon.com/512/2586/2586073.png"></img>
               
         </div>
    <div class="col s12 m6">
      <div class="row">
      <div class="input-field col s12">
          <i class="material-icons prefix">subject</i>
          <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label for="title">Title</label>
        </div>
        <p />

        <div class="input-field col s12">
          <i class="material-icons prefix">attach_file</i>
          <input type="text" id="link" value={link} onChange={(e)=>setLink(e.target.value)}/>
          <label for="link">Link</label>
        </div>
        <p />
        <div class="input-field col s12">
          <i class="material-icons prefix">attach_money</i>
          <input type="text" id="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <label for="price">Price</label>
        </div>
      </div>
  <div class="right-align">
  <button class="btn waves-effect waves-light light-blue lighten-2" type="submit" name="action" onClick={()=> addListing() }>List for sale
    <i class="material-icons right">send</i>
  </button>
        
  </div>



      
    </div>
  </div>
  <div class="fixed-action-btn">
      
  <Link to = "/">
  <a class="btn-floating btn-large red">
    <i class="large material-icons light-blue lighten-2">arrow_back</i>
  </a>
  </Link>
  
  
</div>
      </div>
    ); 
}
export default AddProduct; 