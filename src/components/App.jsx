import React from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditProfilePopup } from "./EditProfilePopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { ImagePopup } from "./ImagePopup";


function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
	React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] =
	React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
	React.useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] =
	React.useState(false);
	const [selectedCard, setSelectedCard] =
	React.useState({})

	const handleCardClick = (card) => {
		setSelectedCard(card);
		setIsImagePopupOpen(true)
	}
	
	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsImagePopupOpen(false);
		setSelectedCard({});
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
						onCardClick={handleCardClick}
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

					{/****PopupImage****/}
					<ImagePopup
						card={selectedCard}
						isOpen={isImagePopupOpen}
						onClose={closeAllPopups}
					>
					</ImagePopup>

					{/*<div class="popup popup_type_delete">
						<div class="popup__container">
							<button aria-label="Закрыть" type="button"
								class="popup__close-button"></button>
							<h2 class="popup__title popup__title_type_delete">Вы уверены?</h2>
							<form name="popup-form" class="popup__form popup__form_type_delete">
								<button type="submit" class="popup__submit-button popup__submit-button_type_delete">Да</button>
							</form>
						</div>
					</div>*/}
				</div>
			</div>
		</div >
	);
}

export default App;