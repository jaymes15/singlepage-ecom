import React from 'react';

class OrderSummary extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <h3>Order Summary</h3>
                <h3>Product Name : {this.props.productName}</h3>
                <h3>Product Price : {this.props.actualProductPrice}</h3>
                <h3>Product Quantity : {this.props.productQuantity}</h3>
                <h3>Calculated Price : {this.props.productPrice}</h3>
                <h3>Delivery Address : {this.props.deliveryAddress}</h3>
            </div>
        );
    }
}

export default OrderSummary;