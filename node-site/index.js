const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(express.static('public'));
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const superheroes = [
  { id: 1, name: 'SPIDER-MAN', image: 'spiderman.jpeg' },
  { id: 2, name: 'CAPTAIN MARVEL', image: 'captainmarvel.jpeg' },
  { id: 3, name: 'HULK', image: 'hulk.jpeg' },
  { id: 4, name: 'THOR', image: 'thor.jpeg' },
  { id: 5, name: 'IRON MAN', image: 'ironman.png' },
  { id: 6, name: 'DAREDEVIL', image: 'daredevil.jpg' },
  { id: 7, name: 'BLACK WIDOW', image: 'blackwidow.jpeg' },
  { id: 8, name: 'CAPTAIN AMERICA', image: 'captainamerica.jpeg' },
  { id: 9, name: 'WOLVERINE', image: 'wolverine.jpg' },
];


app.get('/', (req, res) => {
  res.render('index', { superheroes: superheroes });
});

app.get('/superheroes/', (req, res) => {
  res.render('superhero', { superheroes: superheroes });
});

app.get('/superheros/:id', (req, res) => {
  const selectedId = req.params.id;

  let selectedSuperhero = superheroes.filter(superhero => {
    return superhero.id === +selectedId;
  });

  selectedSuperhero = selectedSuperhero[0];
  
  res.render('superhero', { superheroe: selectedSuperhero });
});

app.post('/superheros', urlencodedParser, (req, res) => {
  const newId = superheroes[superheroes.length - 1].id + 1;
  const newSuperHero = {
    id: newId, 
    name: req.body.superhero.toUpperCase(), 
    image: 'lukecage.jpg'
  }
  
  superheroes.push(newSuperHero);
  
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
