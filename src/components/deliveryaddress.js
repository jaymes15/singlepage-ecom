import React from 'react';
import PreferredAddress from './preferredaddress';
import CustomErrorBoundary from './customerrorboundary';
class DeliveryAddress extends React.Component{
    constructor(props){
        super(props);

    }

    orderAddress=(e)=>{
        let orderaddress = e.target.value;
        this.props.GetAddress(orderaddress);
    }

    render(){
        return(
            <div>
                <h3>Address Details</h3>
                <h3>Address : <input type="text" onChange={ e => this.orderAddress(e)} /></h3>
                <CustomErrorBoundary>
                    <PreferredAddress />
                </CustomErrorBoundary>
            </div>
        );
    }
}

export default DeliveryAddress;