const products = [
  {
    id: 1,
    fav: false,
    description: "El clásico juego de cartas UNO",
    name: "UNO",
    brand: "Ruibal",
    category: "JuegosDeMesa",
    price: 2890.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/156176-170-170?v=1773404587&width=170&height=170&aspect=true",
    stock: 25,
  },
  {
    id: 2,
    fav: false,
    description: "Clásico juego de tablero, si te queda uno solo, ganás!",
    name: "UNO SOLO",
    brand: "Ruibal",
    category: "JuegosDeMesa",
    price: 1110.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/156150-170-170?v=1773403721&width=170&height=170&aspect=true",
    stock: 20,
  },
  {
    id: 3,
    fav: false,
    description: "Clásico juego de dominó en su edición Cristal",
    name: "DOMINO CRISTAL",
    brand: "Ruibal",
    category: "JuegosDeMesa",
    price: 1990.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/206889-170-170?v=1773402882&width=170&height=170&aspect=true",
    stock: 30,
  },
  {
    id: 4,
    fav: false,
    description:
      "Burbujero en forma de pistola, al apretar el gatillo salen burbujas",
    name: "BURBUJERO PISTOLA",
    brand: "Sebigus",
    category: "AireLibre",
    price: 763.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/267053-170-170?v=638060392062030000&width=170&height=170&aspect=true",
    stock: 13,
  },
  {
    id: 5,
    fav: false,
    description: "Burbujero en forma de saxofón",
    name: "BURBUJERO SAXOFON",
    brand: "Sebigus",
    category: "AireLibre",
    price: 699.3,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/266969-170-170?v=1773423950&width=170&height=170&aspect=true",
    stock: 40,
  },
  {
    id: 6,
    fav: false,
    description: "Oso de peluche, 100% poliester",
    name: "PELUCHE DE OSO CON MOÑO 65 cm",
    brand: "Genérico",
    category: "Peluches",
    price: 5990.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/321634-170-170?v=1773406482&width=170&height=170&aspect=true",
    stock: 25,
  },
  {
    id: 7,
    fav: false,
    description: "Peluche en forma de dinosaurio, 100% poliester",
    name: "PELUCHE DE DINOSAURIO 26 cm",
    brand: "Genérico",
    category: "Peluches",
    price: 3990.0,
    img: "https://carrefourar.vtexassets.com/arquivos/ids/331805-170-170?v=638210685214670000&width=170&height=170&aspect=true",
    stock: 28,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  id = parseInt(id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.id === id));
    }, 500);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 500);
  });
};
