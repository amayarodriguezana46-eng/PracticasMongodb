use('Colecciones');
db.Artistas.insertMany([
  {nombre: "Pablo Picasso", obra: "Guernica" },
  {nombre: "Frida Kahlo", obra: "La columna rota" },
  {nombre: "Vincent van Gogh", obra: "La noche estrellada" },
  {nombre: "Salvador Dalí", obra: "La persistencia de la memoria" },
  {nombre: "Claude Monet", obra: "Impresión, sol naciente" },
  {nombre: "Andy Warhol", obra: "Campbell's Soup Cans" },
  {nombre: "Leonardo Da Vinci", obra: "La Mona Lisa" },
  {nombre: "Michelangelo Buonarroti", obra: "La creación de Adán" },
  {nombre: "Henri Matisse", obra: "La danza" },
  {nombre: "Georgia O'Keeffe", obra: "Flores rojas" }
  ]);

db.Cantantes.insertMany([
  {nombre: "Diego", edad: 17, grupo: "Wiplash" },
  {nombre: "Jota", edad: 22, grupo: "Wiplash" },
  {nombre: "Daan", edad: 21, grupo: "Wiplash" },
  {nombre: "Smoke", edad: 22, grupo: "Wiplash" },
  {nombre: "Jorge", edad: 19, grupo: "Solista" },
  {nombre: "German", edad: 22, grupo: "DAAZ" },
  {nombre: "Harry", edad: 31, grupo: "One Direction" },
  {nombre: "Liam", edad: 32, grupo: "One Direction" },
  {nombre: "Jungkook", edad: 28, grupo: "BTS" },
  {nombre: "Jimin", edad: 30, grupo: "BTS" }
  ]);  

db.Deportes.insertMany([
  {nombre: "Fútbol", tipo: 17, lugar: "Estadio" },
  {nombre: "Baloncesto", tipo: 17, lugar: "Cancha de baloncesto" },
  {nombre: "Rugby", tipo: 17, lugar: "Campo de rugby" },
  {nombre: "Voleibol", tipo: 17, lugar: "Cancha de voleibol" },
  {nombre: "Boxeo", tipo: 17, lugar: "Ring de boxeo" },
  {nombre: "Fútbol Americano", tipo: 17, lugar: "Campo de fútbol americano" },
  {nombre: "Tenis", tipo: 17, lugar: "Cancha de tenis" },
  {nombre: "MMA", tipo: 17, lugar: "Octágono" },
  {nombre: "Cricket", tipo: 17, lugar: "Campo de cricket" },
  {nombre: "Golf", tipo: 17, lugar: "Campo de golf"}
]); 

db.Musica.insertMany([
  {genero: "Pop", integrantes: 5},
  {genero: "Rock", integrantes: 4},
  {genero: "Jazz", integrantes: 4},
  {genero: "Hip-Hop", integrantes: 4},
  {genero: "Reguetón", integrantes: 4},
  {genero: "Electrónica", integrantes: 4},
  {genero: "R&B", integrantes: 4},
  {genero: "Indie", integrantes: 4},
  {genero: "K-pop", integrantes: 4},
  {genero: "Salsa", integrantes: 6}
]);

db.Obras.insertMany([
  {nombre: "Hamlet", genero: "Tragedia", creador: "William Shakespeare"},
  {nombre: "La Casa de Bernarda Alba", genero: "Drama", creador: "Federico García Lorca"},
  {nombre: "Don Juan Tenorio", genero: "Comedia", creador: "Tirso de Molina"},
  {nombre: "Macbeth", genero: "Tragedia", creador: "William Shakespeare"},
  {nombre: "Esperando a Godot", genero: "Absurdo", creador: "Samuel Beckett"},
  {nombre: "El Cid", genero: "Épico", creador: "Anónimo"},
  {nombre: "Romeo y Julieta", genero: "Tragedia", creador: "William Shakespeare"},
  {nombre: "Un tranvía llamado Deseo", genero: "Drama", creador: "Tennessee Williams"},
  {nombre: "Las aventuras de Tom Sawyer", genero: "Comedia", creador: "Mark Twain"},
  {nombre: "El Retrato de Dorian Gray", genero: "Filosófico", creador: "Oscar Wilde"}
]);