import React, { Component } from "react";

import { getHeroById, updateHeroList } from "../../heroes.service";

class HeroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroid: parseInt(props.match.params.heroid)
    };
  }

  componentWillMount() {
    getHeroById(this.state.heroid)
      .then(payload => {
        this.setState({
          hero: payload
        });
      })
      .catch(error => {
        this.setState({
          error: error
        });
      });
  }

  //submit selected hero to the heroes array
  handleSubmit = event => {
    updateHeroList(this.state.hero);
    this.props.history.goBack();
    event.preventDefault();
  };

  //update selected hero name on change
  handleChange = event => {
    this.setState({
      hero: {
        ...this.state.hero,
        name: event.target.value
      }
    });
  };
  render() {
    const hero = this.state.hero;
    if (!hero) {
      return <div>Loading.......{this.state.heroid}</div>;
    }
    return (
      <div>
        <div>
          <h2>{hero.name}</h2>
          <label>id: </label>
          {hero.id}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>name: </label>
          <input type="text" value={hero.name} onChange={this.handleChange} />
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default HeroForm;
