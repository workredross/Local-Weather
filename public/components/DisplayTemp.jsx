import React, { Component } from 'react';
require('style!css!DemoStyle');
class DisplayTemp extends Component{

  render(){
    var {Temp, Name, Lat, Long} = this.props;
    if(Temp=='Loading'){
      return <div className='loading'>Loading Your Local Weather...</div>
    }
    else {
      var Lat = Math.round(Lat)
      var Long = Math.round(Long)
      return(
        <div className='display-weather'>
          It is {Temp} &#8451; at {Name}, Latitude: {Lat} and Longitude: {Long}
        </div>
      )
    }

  }
}
export default DisplayTemp;
