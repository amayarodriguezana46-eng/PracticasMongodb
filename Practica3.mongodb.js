use('Collecciones');

db.Artistas.deleteOne({nombre: "Pablo Picasso"});
db.Artistas.deleteOne({nombre: "Frida Kahlo"});

db.Cantantes.deleteOne({nombre: "Diego"});
db.Cantantes.deleteOne({nombre: "Jota"});

db.Deportes.deleteOne({nombre: "Fútbol"});
db.Deportes.deleteOne({nombre: "Baloncesto"});

db.Musica.deleteOne({genero: "Pop"});
db.Musica.deleteOne({genero: "Rock"});

db.Obras.deleteOne({nombre: "Hamlet"});
db.Obras.deleteOne({nombre: "La Casa de Bernarda Alba"});