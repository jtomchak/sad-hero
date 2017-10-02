var HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

const getHeroes = new Promise((resolve, reject) => {
  resolve(HEROES);
});

const getHeroesSlowly = new Promise((resolve, reject) => {
  //Simulate server slow pants
  setTimeout(() => resolve(HEROES), 3000);
});

const getHeroById = heroId =>
  new Promise((resolve, reject) => {
    const hero = HEROES.find(hero => hero.id === heroId);
    if (hero) {
      resolve(hero);
    } else {
      reject("Hero Not Found");
    }
  });

const updateHeroList = hero => {
  const heroIndex = HEROES.map(o => o.id).indexOf(hero.id);
  //hero index not in the array, skip
  if (heroIndex != -1) {
    HEROES = [
      ...HEROES.slice(0, heroIndex),
      { id: hero.id, name: hero.name },
      ...HEROES.slice(heroIndex + 1, HEROES.length)
    ];
  }
};

export { getHeroes, getHeroesSlowly, getHeroById, updateHeroList };
