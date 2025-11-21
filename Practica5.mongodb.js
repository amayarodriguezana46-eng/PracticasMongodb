 use('Colecciones');

 db.Artistas.find();
 db.Artistas.find({ nombre: {$gt:"Pablo Picasso" }});
 db.Artistas.find({ obra: {$gt:"Guernica" }});
 db.Artistas.find({ nombre: {$gt:"Frida Kahlo" }});
 db.Artistas.find({ obra: {$gt:"La columna rota" }});
 db.Artistas.find({ nombre: {$gt:"Vincent van Gogh" }});
 db.Artistas.find({ obra: {$gt:"La noche estrellada" }});
 db.Artistas.find({ nombre: {$gt:"Salvador Dalí" }});
 db.Artistas.find({ obra: {$gt:"La persistencia de la memoria" }});
 db.Artistas.find({ nombre: {$gt:"Claude Monet" }});
 db.Artistas.find({ obra: {$gt:"Impresión, sol naciente" }});