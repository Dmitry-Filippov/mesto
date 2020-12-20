let profileButton = document.querySelector('.profile__button');
let popUp = document.querySelector('.pop-up-container');
let popUpCloser = document.querySelector('.pop-up__close');
let formElement = document.querySelector('.pop-up');
let likeButton = document.querySelectorAll('.elements__like-button');


function handleFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.pop-up__input_name');
    let jobInput = document.querySelector('.pop-up__input_job');
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__text');
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closer();
}

function opener() {
    popUp.classList.add('pop-up-container_opened');
}

function closer() {
    popUp.classList.remove('pop-up-container_opened');
}


formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', opener);
popUpCloser.addEventListener('click', closer);

for (let i = 0; i < likeButton.length; i += 1) {
    likeButton[i].addEventListener('click', function () {
        likeButton[i].classList.toggle('elements__like-button_active');
    });
}