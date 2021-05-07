const guitarsData = [
  {
    brand: "ESP",
    model: "Horizon",
    price: 1000,
    inStock: 5,
    image:
      "https://media.sound-service.eu/Artikelbilder/Shopsystem/890x486/E-II%20HORIZON%20NT-II%20SEE%20THRU%20BLACK%20SUNBURST_1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Fender",
    model: "Telecaster",
    price: 1100,
    inStock: 9,
    image:
      "https://www.cutawayguitarmagazine.com/wp-content/uploads/2014/08/fender-blacktop-telecaster-hh-candy-apple-red-maple-608326-590x369.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Fender",
    model: "Stratocaster",
    price: 900,
    inStock: 11,
    image:
      "https://musicopolix.com/68611-large_default/fender-player-stratocaster-polar-white-pf-guitel.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Gibson",
    model: "Les Paul",
    price: 1400,
    inStock: 3,
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/47/472500/600/preview_1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Gibson",
    model: "Sg",
    price: 1200,
    inStock: 8,
    image:
      "https://d1aeri3ty3izns.cloudfront.net/media/47/473553/600/preview.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Gibson",
    model: "ES",
    price: 1400,
    inStock: 4,
    image:
      "https://eusica.mx/product/image/large/es3900blnh1_gibson_es-339_es3900blnh1_1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Gretsch",
    model: "Malcom Young",
    price: 1600,
    inStock: 14,
    image:
      "https://files2.soniccdn.com/files/2018/06/29/2411916821_gtr_cntbdyright_001_nr.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Hammer",
    model: "Nordic",
    price: 800,
    inStock: 4,
    image: "https://gvguitars.com/wp-content/uploads/2019/09/NH-8637.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Ibanez",
    model: "Satch",
    price: 1500,
    inStock: 13,
    image:
      "https://images.guitarguitar.co.uk/cdn/small/160/753_chromePia_chromeboy1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    brand: "Ibanez",
    model: "Jem",
    price: 1300,
    inStock: 2,
    image:
      "https://auvisa.com/111456-thickbox_default/ibanez-jem-jr-wh-steve-vai-guitarra-electrica-blanca.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];
module.exports = guitarsData;
