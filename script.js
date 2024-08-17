const brothers = [
  {
    name: "Frodo- ФРОДО",
    height: 100,
    race: "hobbit",
    age: 30,
    hasMagic: false,
    image:
      "https://variety.com/wp-content/uploads/2017/01/lord-of-the-rings-return-of-the-king.jpg?w=1000&h=667&crop=1"
  },
  {
    name: "Sam- Сэ́МУАЙЗ Гэ́МДЖИ",
    height: 105,
    race: "hobbit",
    age: 33,
    hasMagic: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIbJocCZzXJ9GhhEG3Fk4x78EBcG5kc6VMA&s"
  },
  {
    name: "Gendalf- ГЕНДАЛЬФ",
    height: 200,
    race: "magician",
    age: 2000,
    hasMagic: true,
    image: "https://cdn-media-ie.pearltrees.com/d2/ab/13/d2ab13dfb949137aea3b21d370ca5e1f-xl.jpg"
  },
  {
    name: "Aragorn- АРАГОН",
    height: 180,
    race: "human",
    age: 50,
    hasMagic: false,
    image:
      "https://cdn.vox-cdn.com/thumbor/8mYajDzWIyV-1czVzbbzRydQstg=/0x0:3615x2425/1200x800/filters:focal(1546x587:2124x1165)/cdn.vox-cdn.com/uploads/chorus_image/image/59765763/aragorn.0.jpg"
  },
  {
    name: "Éowyn- ЭОВИН",
    height: 165,
    race: "human",
    age: 29,
    hasMagic: false,
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/08/Eowyn-in-Lord-of-the-Rings-e1550174204485.jpg"
  },
  {
    name: "Galadriel- ГАЛАДРИЭЛЬ",
    height: 205,
    race: "elf",
    age: 3333,
    hasMagic: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hsYEqb1E6QXbZIexejDaIe2oFDgJT6eAPQ&s"
  },
  {
    name: "Éomer- ЭМОМЕР",
    height: 179,
    race: "human",
    age: 42,
    hasMagic: false,
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Eomer_Rohan_Lord-of-the-Rings.jpg"
  },
  {
    name: "Gimli- ГИМЛИ",
    height: 50,
    race: "dwarf",
    age: 200,
    hasMagic: false,
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/gimli-s-wearing-the-helmet-given-by-groin-his-father.jpg"
  },
  {
    name: "Theoden- ТЕОДЕН",
    height: 175,
    race: "human",
    age: 69,
    hasMagic: false,
    image:
      "https://images.prismic.io/sho-media/ZjhwDUMTzAJOCjRO_teoden.webp?auto=format%2Ccompress&rect=0%2C0%2C1500%2C670&w=1400&h=625"
  },
  {
    name: "Legolas- ЛЕГОЛАС",
    height: 190,
    race: "elf",
    age: 500,
    hasMagic: true,
    image:
      "https://www.aceshowbiz.com/display/images/photo/2019/07/29/00139486.jpg"
  },
  {
    name: "Faramir- ФАРАМИР",
    height: 177,
    race: "human",
    age: 45,
    hasMagic: false,
    image:
      "https://thepopculturestudio.com/wp-content/uploads/2021/01/faramir_two-towers.jpg"
  },
  
  {
    name: "Bilbo Baggins- БИЛЬБО БАГГИНС",
    height: 95,
    race: "hobbit",
    age: 28,
    hasMagic: false,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihtqIG0jwWJZv6uod7QUKuQb_g6DlkSU1b4RJ9iPJWxy4o5DxKDvHCPEuoydgrCns22Dd50mCinPrl2ixTWmqhWYi4qCmbiYJ4SULG6Yzv8ozljg3iwg9r7QZEBjrtCZu6r0Et-6RJir0A/s1600/Bilbo.jpg"
  },
  
];

// сделали копию исходных данных для операцию с удалением
const copyBrothers = [...brothers]


const gallery = document.getElementById("grid-gallery");
const btnMagic = document.getElementById("btn-magic");
const btnDel = document.getElementById("btn-del");
const btnHuman = document.getElementById("btn-human");
const btnHobbit = document.getElementById("btn-hobbit");
const btnElf = document.getElementById("btn-elf");

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
  arr.map(brother => {
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
    p.innerText = `This is ${brother.race}. \n His height is ${brother.height} sm. \n He is ${
      brother.age
    } years old.\n ${
      brother.hasMagic ? "He uses magic !!!" : "Unfortunately, no magic for this character..."
    }`;
    card.appendChild(p);
    // добавляем карточку к галерее
    gallery.appendChild(card);
  });
}

// вызов создания с исходным массивом
createCards(brothers)

btnMagic.addEventListener("click", () => {
  const magicBrothers = brothers.filter(brother => brother.hasMagic === true);
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(magicBrothers)
});


btnHuman.addEventListener("click", () => {
  const humanBrothers = brothers.filter(brother => brother.race === "human");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(humanBrothers)
});

btnHobbit.addEventListener("click", () => {
  const hobbitBrothers = brothers.filter(brother => brother.race === "hobbit");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(hobbitBrothers)
});

 btnElf.addEventListener("click", () => {
  const elfBrothers = brothers.filter(brother => brother.race === "elf");
  cleanGallery();
  // вызов создания с отфильтрованным массивом
  createCards(elfBrothers)
});

btnDel.addEventListener('click', ()=> {
  // удалили последний элемент
  copyBrothers.pop()
  // почистили галерею
  cleanGallery();
  // создали новую галерею с измененным кол-вом карточек
  createCards(copyBrothers)
})
