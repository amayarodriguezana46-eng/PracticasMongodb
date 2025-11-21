use('Colecciones');

db.Artistas.deleteOne({Nombre: "Pablo Picasso"});
db.Artistas.deleteOne({Nombre: "Frida Kahlo"});
db.Cantantes.deleteOne({Nombre: "Diego"});
db.Cantantes.deleteOne({Nombre: "Jota"});
db.Deportes.deleteOne({Nombre: "Fútbol"});
db.Deportes.deleteOne({Nombre: "Baloncesto"});
db.Musica.deleteOne({genero: "Pop"});
db.Musica.deleteOne({genero: "Rock"});
db.Obras.deleteOne({nombre: "Hamlet"});
db.Obras.deleteOne({nombre: "La Casa de Bernarda Alba"});