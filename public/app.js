import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LatLong from 'LatLong';
import DisplayTemp from 'DisplayTemp'
import OpenWeatherAPI from 'OpenWeatherAPI'
class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      Lat:'',
      Long:'',
      Temp:'Loading',
    }
    this.onPass = this.onPass.bind(this)
  };

  onPass(Lat,Long) {
    var that = this;

    OpenWeatherAPI.getTemp(Lat,Long).then(function (temp) {
      that.setState({
        Lat: Lat,
        Long: Long,
        Temp: temp
      });
    },
    function (errorMessage) {
        alert(errorMessage);
    });
  }

  render(){
    return(
      <div>
        <LatLong onPass = {this.onPass} />
        <DisplayTemp Temp = {this.state.Temp} Lat = {this.state.Lat} Long = {this.state.Long}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));
