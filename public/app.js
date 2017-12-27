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

    OpenWeatherAPI.getTemp(Lat,Long).then(function (data) {
      console.log(data);
      that.setState({
        Lat: Lat,
        Long: Long,
        Temp: data.main.temp,
        Name: data.name
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
        <DisplayTemp Temp = {this.state.Temp} Name = {this.state.Name} Lat = {this.state.Lat} Long = {this.state.Long}/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#app'));
