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
 db.Artistas.find({ nombre: {$gt:"Andy Warhol" }});
 db.Artistas.find({ obra: {$gt:"Campbell's Soup Cans" }});
 db.Artistas.find({ nombre: {$gt:"Leonardo Da Vinci" }});
 db.Artistas.find({ obra: {$gt:"La Mona Lisa" }});
 db.Artistas.find({ nombre: {$gt:"Michelangelo Buonarroti" }});
 db.Artistas.find({ obra: {$gt:"La creación de Adán" }});
 db.Artistas.find({ nombre: {$gt:"Henri Matisse" }});
 db.Artistas.find({ obra: {$gt:"La danza" }});
 db.Artistas.find({ nombre: {$gt:"Georgia O'Keeffe" }});
 db.Artistas.find({ obra: {$gt:"Flores rojas" }});
 