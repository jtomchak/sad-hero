import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Heroes.css";
import HeroesList from "./HeroesList";
import HeroForm from "./HeroForm";
import { getHeroes, getHeroesSlowly } from "../../heroes.service";

class Heroes extends Component {
  state = {
    title: "Sad Pandas",
    heroes: [],
    selectedHero: {
      name: "",
      id: undefined
    }
  };

  componentWillMount() {
    getHeroes
      .then(o => {
        this.setState({
          heroes: o
        });
        console.log("GOT HEROES");
      })
      .catch(error => {
        console.warn("NOPE");
      });
  }

  //set state for selected hero on click
  handleSelectedHero = hero => {
    this.setState(
      {
        selectedHero: {
          ...hero
        }
      },
      () => console.log(this.state.selectedHero)
    );
  };

  render() {
    return (
      <div>
        <HeroesList
          heroes={this.state.heroes}
          selectedHero={this.handleSelectedHero}
        />
        {this.state.selectedHero.name && (
          <div>
            <h2>{this.state.selectedHero.name}</h2>
            <Link to={`/heroes/details/${this.state.selectedHero.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Heroes;
