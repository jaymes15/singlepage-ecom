import React from 'react';
import Product from './product';
import OrderSummary from './ordersummary';
import DeliveryAddress from './deliveryaddress';


let actualProductPrice =null;
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            productName: "",
            deliveryAddress: "",
            productQuantity:0,
            productPrice:0,
        }
    }

     getUpdateProduct = (productName,productPrice,productQuantity) =>{
        let finalPrice = productPrice * productQuantity;
        actualProductPrice = productPrice;
        this.setState({
            productName: productName,
            productPrice:finalPrice,
            productQuantity:productQuantity, 
          }
          );
    }

    updateDeliveryAddress=(address)=>{
        this.setState({
           deliveryAddress:address
          }
          );
    }

    render(){
        return(
            <div>
                
                <Product   productName={this.state.productName}  
                           productQuantity={this.state.productQuantity}
                           productPrice={this.state.productPrice}
                           updateProduct={this.getUpdateProduct} />
                 
                 <DeliveryAddress GetAddress =  {this.updateDeliveryAddress} />           

                <OrderSummary   productName={this.state.productName}  
                                productQuantity={this.state.productQuantity}
                                productPrice={this.state.productPrice}
                                actualProductPrice={actualProductPrice}
                                deliveryAddress = {this.state.deliveryAddress}
                                />           
                        
            </div>
        );
    }
}

export default Order;
