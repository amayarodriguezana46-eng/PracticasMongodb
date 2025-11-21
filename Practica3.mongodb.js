use('Collecciones');

db.Artistas.deleteMany({nombre: "Pablo Picasso"});
db.Cantantes.deleteMany({nombre: "Diego"});
db.Deportes.deleteMany({nombre: "Fútbol"});
db.Musica.deleteMany({genero: "Pop"});
db.Obras.deleteMany({nombre: "Hamlet"});