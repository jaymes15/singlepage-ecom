import React from 'react';

const productList = [
    {id:1,name:"Milo",price:300},
    {id:2,name:"Peak",price:500},
    {id:3,name:"Jago",price:400},
 ];

 const displayproduct = productList.map((product) =>
                                            <option key = {product.id} 
                                                    value={product.id}
                                                    >{product.name}
                                                </option>
                                            
 
                                            );
var showPrice=null;
let product=null;
let quantity=null;
class Product extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    productUpdate=()=>{
        if(product==null){

        }else{
            this.props.updateProduct(product.name,product.price,quantity); 
        } 
    }
    productnameUpdate =(e)=>{
        let prod = e.target.value;
        let productIndex = prod - 1;
        product = productList[productIndex];
        this.productUpdate();
    }

    productquantityUpdate=()=>{
        quantity = this.refs.qty.value;
        this.productUpdate();
    }


    render(){
        return(
            <div>
                <h3>Place Your Order</h3>
               <h3>Products: <select onChange={(e) =>this.productnameUpdate(e)}>
               <option>-----</option>
                    {displayproduct}
                </select>
                </h3>
                
                <h3>Quantity:<input type="number" min="1" ref="qty" onChange={this.productquantityUpdate} /></h3>
                
                <button>Click me</button>
            </div>
        );
    }
}


export default Product;