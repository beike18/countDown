import React from "react";

class Number extends React.Component{
   constructor(props) {
       super(props);
   }

   render(){
       return(
           <p>{this.props.number}</p>
       )
   }
}

export  default Number