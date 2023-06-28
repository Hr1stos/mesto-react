import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditProfilePopup } from "./EditProfilePopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";


function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
	React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
	React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
		React.useState(false);

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
	}

	return (
		<div className="App">
			<div className="page">
				<div className="page__container">
					<Header />

					<Main
						onEditProfile={setIsEditProfilePopupOpen}
						onAddPlace={setIsAddPlacePopupOpen}
						onEditAvatar={setIsEditAvatarPopupOpen}
					/>

					<Footer />

					{/****PopupProfile****/}
					<EditProfilePopup 
						isOpen={isEditProfilePopupOpen}
						onClose={closeAllPopups}
					/>

					{/****PopupAdd****/}
					<AddPlacePopup
						isOpen={isAddPlacePopupOpen}
						onClose={closeAllPopups}
					/>

					{/****PopupAvatar****/}
					<EditAvatarPopup 
						isOpen={isEditAvatarPopupOpen}
						onClose={closeAllPopups}
					/>


					<div class="popup popup_type_delete">
						<div class="popup__container">
							<button aria-label="Закрыть" type="button"
								class="popup__close-button"></button>
							<h2 class="popup__title popup__title_type_delete">Вы уверены?</h2>
							<form name="popup-form" class="popup__form popup__form_type_delete">
								<button type="submit" class="popup__submit-button popup__submit-button_type_delete">Да</button>
							</form>
						</div>
					</div>
				</div>

				<template class="template-cards">
					<li class="card">
						<img src="#" alt="#" class="card__image" />
						<div class="card__name">
							<h2 class="card__title"></h2>
							<div class="card__like-container">
								<button aria-label="Мне нравтся" type="button" class="card__button_like"></button>
								<p class="card__like-counter">0</p>
							</div>
						</div>
						<button aria-label="Удалить" type="button" class="card__button_delete"></button>
					</li>
				</template>

			</div>
		</div >
	);
}

export default App;