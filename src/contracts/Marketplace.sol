pragma solidity ^0.5.0;

contract Marketplace
{
    uint public index; 
    struct Note
    {
        uint id; 
        string link; 
        string name; 
        uint price; 
        bool purchased; 
        address payable owner; 
    }
    
    event NoteCreated
    (
        uint id, 
        string link,  
        string name, 
        uint price, 
        bool purchased,  
        address payable owner 
    ); 
    
    event NotePurchased
    (
        uint id, 
        string link,  
        string name, 
        uint price, 
        bool purchased,  
        address payable owner 
    ); 
    
    
    
    
    
    mapping(uint => Note) public listings;
    function createListing(string memory _link, string memory _name, uint _price) public
    {
        index++; 
        listings[index] = Note(index, _link, _name, _price, false, msg.sender); 
        
        emit NoteCreated(index, _link, _name, _price, false, msg.sender); 
        
        
        
    }
    
    function purchaseNote(uint _noteId) payable public
    {
        Note memory _product = listings[_noteId]; 
        address payable _receipient = _product.owner;
        require(msg.value >= _product.price);
        require(!_product.purchased);
      
        _product.owner = msg.sender; 
        _product.purchased = true; 
        listings[_noteId] = _product; 
        address(_receipient).transfer(msg.value); 
        emit NoteCreated(index, _product.link, _product.name, _product.price, _product.purchased, _product.owner); 
        
        
        
        
    }
    
    
}



