const popUp = document.querySelector('.pop-up-container');
const formElement = popUp.querySelector('.pop-up');
const nameInput = formElement.querySelector('.pop-up__input_type_name');
const jobInput = formElement.querySelector('.pop-up__input_type_job');
const popUpCloser = formElement.querySelector('.pop-up__close');
const profileButton = document.querySelector('.profile__button');
const name = document.querySelector('.profile__name');
const job = document.querySelector('.profile__text');
const likeButton = document.querySelectorAll('.elements__like-button');


function openPopUp() {
    nameInput.setAttribute('value', name.textContent);
    jobInput.setAttribute('value', job.textContent);
    popUp.classList.add('pop-up-container_opened');
}

function closePopUp() {
    popUp.classList.remove('pop-up-container_opened');
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopUp();
}


formElement.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopUp);
popUpCloser.addEventListener('click', closePopUp);
