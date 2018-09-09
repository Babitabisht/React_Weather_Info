import React, { Component } from "react";

import { Consumer } from "../context";

class Result extends Component {
    state = {  }

findIcon = (value,e)=>{
    console.log("In find icom")
let icon ="http://openweathermap.org/img/w/" + value.weather.icon +".png"
console.log(icon);
return icon;
}

 

    render() { 
        return (

<Consumer>
{value =>
{
  var  iconn ="http://openweathermap.org/img/w/" + value.weather.icon +".png" ;

    console.log(value)
    return(
<React.Fragment>

<div className="card">

<div className="card-header h2 text-center ">  {value.heading} </div>

<div className="card card-body text-center">

<img src= {iconn} 
onLoad={this.findIcon.bind(this,value)}
alt="img"  style={{height :100, width:100}} 
class="card-img-top mx-auto d-block"
/>

<p className="text-center h4 "> {value.weather.main} </p>
<p className="text-center ">
{value.weather.description}
</p>
</div>


</div>

</React.Fragment>

    )
}

}


</Consumer>


          );
    }
}
 
export default Result;


