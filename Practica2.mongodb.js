use('Colecciones');
db.Artistas.insertMany([
  {nombre: "Pablo Picasso", obra: "Guernica" },
  {nombre: "Frida Kahlo", obra: "La columna rota" },
  {nombre: "Vincent van Gogh", obra: "La noche estrellada" },
  {nombre: "Salvador Dalí", obra: "La persistencia de la memoria" },
  {nombre: "Claude Monet", obra: "Impresión, sol naciente" },
  {nombre: "Andy Warhol", obra: "Campbell's Soup Cans" },
  {nombre: "Leonardo da Vinci", obra: "La Mona Lisa" },
  {nombre: "Michelangelo Buonarroti", obra: "La creación de Adán" },
  {nombre: "Henri Matisse", obra: "La danza" },
  {nombre: "Georgia O'Keeffe", obra: "Flores rojas" },
  {nombre: "Jackson Pollock", obra: "No. 5, 1948" },
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
  {nombre: "Jimin", edad: 30, grupo: "BTS" },
  {nombre: "Taehyung", edad: 30, grupo: "BTS" },
  ]);  