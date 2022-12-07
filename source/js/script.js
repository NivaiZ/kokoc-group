async function getPost() {
  const list = document.querySelector('.card-block__list');
  const responce = await fetch("https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json");
  const content = await responce.json();

  for (const key in content) {
    list.innerHTML += `
    <li class="card-block__item">
            <img class="card-block__image" alt="Изображение статьи" src="${content[key].imgUrl}">
            <div class="card-block__box">
              <h2 class="card-block__heading">${content[key].name}</h2>
              <time class="card-block__data" datetime="2019-05-2019">${content[key].date}</time>
              <p class="card-block__text">${content[key].text}</p>
              <div class="card-block__inner">
                <p class="card-block__author">${content[key].author}</p>
                <button class="card-block__like" type="button">

                  <svg class="card-block__picture" width="30" height="30">
                    <use xlink:href="./img/sprite.svg#like-icon"></use>
                  </svg>

                  <svg class="card-block__hidden" width="30" height="30">
                    <use xlink:href="./img/sprite.svg#like-icon__hover"></use>
                  </svg>
                </button>
              </div>
            </div>
          </li>
    `
  }

  function changeButtonHandler() {
    const button = document.querySelectorAll('.card-block__like');

    button.forEach(element => {
      element.addEventListener('click', () => {
        element.classList.toggle('card-block__like--hide');
        element.querySelector('.card-block__picture').classList.toggle('card-block__picture--hide');
        element.querySelector('.card-block__hidden').classList.toggle('card-block__visible');
      })

    });

  }
  changeButtonHandler();
}

document.addEventListener('DOMContentLoaded', getPost)
