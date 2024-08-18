const brothers = [
  {
    name: "Frodo- ФРОДО",
    height: 100,
    race: "hobbit",
    age: 30,
    hasMagic: false,
    image:
      "https://variety.com/wp-content/uploads/2017/01/lord-of-the-rings-return-of-the-king.jpg?w=1000&h=667&crop=1",
    id: "gallery",
  },
  {
    name: "Sam- Сэ́МУАЙЗ Гэ́МДЖИ",
    height: 105,
    race: "hobbit",
    age: 33,
    hasMagic: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIbJocCZzXJ9GhhEG3Fk4x78EBcG5kc6VMA&s",
    id: "gallery",
  },
  {
    name: "Gendalf- ГЕНДАЛЬФ",
    height: 200,
    race: "magician",
    age: 2000,
    hasMagic: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLlEKBDyk86cCzeWv1rP1mAdvZzlUyFpHCmJoaz8Sd8_WqZJcl7yFLgYztD62tCyJAnE&usqp=CAU",
    id: "gallery",
  },
  {
    name: "Aragorn- АРАГОН",
    height: 180,
    race: "human",
    age: 50,
    hasMagic: false,
    image:
      "https://cdn.vox-cdn.com/thumbor/8mYajDzWIyV-1czVzbbzRydQstg=/0x0:3615x2425/1200x800/filters:focal(1546x587:2124x1165)/cdn.vox-cdn.com/uploads/chorus_image/image/59765763/aragorn.0.jpg",
    id: "gallery",
  },
  {
    name: "Éowyn- ЭОВИН",
    height: 165,
    race: "human",
    age: 29,
    hasMagic: false,
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/08/Eowyn-in-Lord-of-the-Rings-e1550174204485.jpg",
    id: "gallery",
  },
  {
    name: "Elrond- ЭЛЬРОНД",
    height: 210,
    race: "elf",
    age: 2500,
    hasMagic: true,
    image: "https://theonering.ru/_pu/0/18589310.jpg",
    id: "gallery",
  },
  {
    name: "Galadriel- ГАЛАДРИЭЛЬ",
    height: 205,
    race: "elf",
    age: 3333,
    hasMagic: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hsYEqb1E6QXbZIexejDaIe2oFDgJT6eAPQ&s",
    id: "gallery",
  },

  {
    name: "Gamling- ГАМЛИНГ",
    height: 189,
    race: "human",
    age: 56,
    hasMagic: false,
    image:
      "https://pbs.twimg.com/profile_images/553953586515050496/VDrWs8VW_400x400.jpeg",
    id: "gallery",
  },
  {
    name: "Éomer- ЭМОМЕР",
    height: 179,
    race: "human",
    age: 42,
    hasMagic: false,
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Eomer_Rohan_Lord-of-the-Rings.jpg",
    id: "gallery",
  },
  {
    name: "Gimli- ГИМЛИ",
    height: 50,
    race: "dwarf",
    age: 200,
    hasMagic: false,
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/gimli-s-wearing-the-helmet-given-by-groin-his-father.jpg",
    id: "gallery",
  },
  {
    name: "Theoden- ТЕОДЕН",
    height: 175,
    race: "human",
    age: 69,
    hasMagic: false,
    image:
      "https://images.prismic.io/sho-media/ZjhwDUMTzAJOCjRO_teoden.webp?auto=format%2Ccompress&rect=0%2C0%2C1500%2C670&w=1400&h=625",
    id: "gallery",
  },
  {
    name: "Legolas- ЛЕГОЛАС",
    height: 190,
    race: "elf",
    age: 500,
    hasMagic: true,
    image:
      "https://www.aceshowbiz.com/display/images/photo/2019/07/29/00139486.jpg",
    id: "gallery",
  },
  {
    name: "Faramir- ФАРАМИР",
    height: 177,
    race: "human",
    age: 45,
    hasMagic: false,
    image:
      "https://thepopculturestudio.com/wp-content/uploads/2021/01/faramir_two-towers.jpg",
    id: "gallery",
  },

  {
    name: "Bilbo Baggins- БИЛЬБО БАГГИНС",
    height: 95,
    race: "hobbit",
    age: 28,
    hasMagic: false,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihtqIG0jwWJZv6uod7QUKuQb_g6DlkSU1b4RJ9iPJWxy4o5DxKDvHCPEuoydgrCns22Dd50mCinPrl2ixTWmqhWYi4qCmbiYJ4SULG6Yzv8ozljg3iwg9r7QZEBjrtCZu6r0Et-6RJir0A/s1600/Bilbo.jpg",
    id: "gallery",
  },
  {
    name: "Meriadoc- МЕРИАДОК БРЕНДИБАК",
    height: 75,
    race: "hobbit",
    age: 25,
    hasMagic: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHY5RBSPBFN6tcMnlw3bSvEZ9pcdB6JswRnQ&s",
    id: "gallery",
  },
  {
    name: "Gloin- ГЛОИН",
    height: 51,
    race: "dwarf",
    age: 800,
    hasMagic: false,
    image:
      "data:image/jpeg;base64,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",
    id: "gallery",
  },
];

// сделали копию исходных данных для операцию с удалением
const copyBrothers = [...brothers];

const gallery = document.getElementById("grid-gallery");
const btnMagic = document.getElementById("btn-magic");
const btnDel = document.getElementById("btn-del");
const btnHuman = document.getElementById("btn-human");
const btnHobbit = document.getElementById("btn-hobbit");
const btnElf = document.getElementById("btn-elf");
const btnDwarf = document.getElementById("btn-dwarf");
const btnId = document.getElementById("btn-id");

// функция для очистки галереи
function cleanGallery() {
  console.log(gallery.firstChild);
  // пока у галереи есть первый потомок, первый потомок будет удаляться
  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild);
  }
}
// функция создания карточек
function createCards(arr) {
  arr.map((brother) => {
    // создаем карточку
    const card = document.createElement("div");
    card.className = "grid-card";
    // создаем заголовок
    const h4 = document.createElement("h4");
    h4.innerText = brother.name;
    // добавляем к карточке заголовок
    card.appendChild(h4);
    // создаем обертку для картинки
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    // создаем картинку
    const img = document.createElement("img");
    img.src = brother.image;
    // добавляем картинку к обертке
    wrapper.appendChild(img);
    // добавляем обертку с картинкой к карточке
    card.appendChild(wrapper);
    // создаем параграф
    const p = document.createElement("p");
    p.innerText = `This is ${brother.race}. \n His height is ${
      brother.height
    } sm. \n He is ${brother.age} years old.\n ${
      brother.hasMagic
        ? "He uses magic !!!"
        : "Unfortunately, no magic for this character..."
    }`;
    card.appendChild(p);
    // добавляем карточку к галерее
    gallery.appendChild(card);
  });
}

// вызов создания с исходным массивом
createCards(brothers);

btnMagic.addEventListener("click", () => {
  const magicBrothers = brothers.filter((brother) => brother.hasMagic === true);
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(magicBrothers);
});

btnHuman.addEventListener("click", () => {
  const humanBrothers = brothers.filter((brother) => brother.race === "human");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(humanBrothers);
});

btnHobbit.addEventListener("click", () => {
  const hobbitBrothers = brothers.filter(
    (brother) => brother.race === "hobbit"
  );
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(hobbitBrothers);
});

btnElf.addEventListener("click", () => {
  const elfBrothers = brothers.filter((brother) => brother.race === "elf");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(elfBrothers);
});

btnDwarf.addEventListener("click", () => {
  const dwarfBrothers = brothers.filter((brother) => brother.race === "dwarf");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(dwarfBrothers);
});

btnDel.addEventListener("click", () => {
  // удалили последний элемент
  copyBrothers.pop();
  // почистили галерею
  cleanGallery();
  // создали новую галерею с измененным кол-вом карточек
  createCards(copyBrothers);
});

btnId.addEventListener("click", () => {
  const idBrothers = brothers.filter((brother) => brother.id === "gallery");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(idBrothers);
});
