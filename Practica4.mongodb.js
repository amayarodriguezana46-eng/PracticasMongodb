 use('Colecciones');

 db.Artistas.updateOne({nombre: "Frida Kahlo"}, {$set: {obra: "La columna rota"}});
 db.Artistas.updateOne({nombre: "Claude Monet"}, {$set: {obra: "Impresión, sol naciente"}});

 db.Cantantes.updateOne({nombre: "Jungkook"}, {$set: {grupo: "BTS"}});
 db.Cantantes.updateOne({nombre: "Jimin"}, {$set: {grupo: "BTS"}});

 db.Deportes.updateOne({nombre: "Rugby"}, {$set: {lugar: "Campo de rugby"}});
 db.Deportes.updateOne({nombre: "Tenis"}, {$set: {lugar: "Cancha de tenis"}});

 db.Musica.updateOne({genero: "Hip-Hop"}, {$set: {integrantes: 4}});
 db.Musica.updateOne({genero: "Electrónica"}, {$set: {integrantes: 4}});

 db.Obras.updateOne({nombre: "Don Juan Tenorio"}, {$set: {genero: "Comedia"}});
 db.Obras.updateOne({nombre: "Romeo y Julieta"}, {$set: {genero: "Tragedia"}});

 



