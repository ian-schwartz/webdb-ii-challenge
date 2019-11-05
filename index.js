const server = require('./cars/cars-server');

const port = 8000;

server.listen(port, () => {
    console.log(`Listening on Port: ${port}...`);
});

server.get('/', (req, res) => {
    res.send('<h2>DB Schema with SQLite Studio and Knex Migrations</h2>');
  });