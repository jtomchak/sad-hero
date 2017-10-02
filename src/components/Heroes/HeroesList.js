import React from "react";

const HeroesList = props => {
  return (
    <ul className="heroes">
      {props.heroes.map(hero => {
        return (
          <li key={hero.id} onClick={() => props.selectedHero(hero)}>
            <span className="badge">{hero.id}</span>
            {hero.name}
          </li>
        );
      })}
    </ul>
  );
};

export default HeroesList;
