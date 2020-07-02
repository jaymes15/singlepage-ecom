import React from 'react';

class CustomErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:true
        }

    }

   static getDerivedStateFromError(error){
       
       return{hasError:true};
   }

   componentDidCatch(error,errorinfo){
       console.log(error);
       console.log(errorinfo);
   }

    render(){
        if(this.state.hasError){
            return(
            <div>
                <p>Having problem loading your preferrence address</p>
            </div>
            );
        }
        else{
        return(
            <div>
                {this.props.children}
            </div>
        );
        }
    }
}

export default CustomErrorBoundary;