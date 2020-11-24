import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import pokeball from "./img/Pokeball-icon@2x.png";
import Pokefoto from "./Pokefoto";
const apiPoke = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30"
});

class pokedex extends Component {
  state = {
    PokeList: []
  };

  async componentDidMount() {
    const response = await apiPoke.get();

    console.log(response.data.results);

    this.setState({
      PokeList: response.data.results
    });
  }

  render() {
    return (
      <div>
        <div className="box-img-title">
          <img className="pokeball-img" src={pokeball} alt="" />
          <h1 className="title">pokezeres</h1>
        </div>
        <div className="box-map">
          {this.state.PokeList.map((item, index) => (
            <div key={index} className="box-map-return">
              <Pokefoto url={item.url} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default pokedex;
