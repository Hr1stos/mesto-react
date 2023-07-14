import { useState, useEffect } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { EditProfilePopup } from "./EditProfilePopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { ImagePopup } from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from '../utils/Api';


function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({})
	const [currentUser, setCurrentUser] = useState({});
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState('')

	useEffect(() => {
		Promise.all([api.getDataUser(), api.getDataCards()])
			.then(([data, cards]) => {
				setCurrentUser(data);
				setCards(cards);
			})
			.catch((err) => {
				console.log(`Promise.all - ошибка: ${err}`);
			});
	}, [])

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

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);
		api
			.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				setCards((state) =>
					state.map((c) => (c._id === card._id ? newCard : c))
				);
			})
			.catch((err) => {
				console.log(`handleCardLike - ошибка: ${err}`);
			});
	}

	function handleCardDelete(card) {
		const isOwn = card._id === currentUser._id;
		api
			.deleteCard(card._id, !isOwn)
			.then(() => {
				setCards((state) => state.filter((res) => res._id !== card._id));
			})
			.catch((err) => {
				console.log(`handleCardDelete - ошибка: ${err}`);
			});
	}

	function handleUpdateUser({ name, about }) {
		setIsLoading(true)
		api
			.setDataUser({ name, about })
			.then((userData) => {
				setCurrentUser(userData);
				closeAllPopups();
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(`handleUpdateUser - ошибка: ${err}`);
			});
	}

	function handleUpdateAvatar({ avatar }) {
		setIsLoading(true)
		api
			.setUserAvatar({ avatar })
			.then((userAvatar) => {
				setCurrentUser(userAvatar);
				closeAllPopups();
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(`handleUpdateAvatar - ошибка: ${err}`);
			});
	}

	function handleAddPlaceSubmit({ name, link }) {
		setIsLoading(true)
		api
			.addNewCard({ name, link})
			.then((newCard) => {
				setCards([newCard, ...cards]);
				closeAllPopups();
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(`handleAddPlaceSubmit - ошибка: ${err}`);
			});
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="App">
				<div className="page">
					<div className="page__container">
						<Header />

						<Main
							onEditProfile={setIsEditProfilePopupOpen}
							onAddPlace={setIsAddPlacePopupOpen}
							onEditAvatar={setIsEditAvatarPopupOpen}
							onCardClick={handleCardClick}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
							cards={cards}
						/>

						<Footer />

						{/****PopupProfile****/}
						<EditProfilePopup
							isOpen={isEditProfilePopupOpen}
							onClose={closeAllPopups}
							onUpdateUser={handleUpdateUser}
							isLoad={isLoading}
						/>

						{/****PopupAdd****/}
						<AddPlacePopup
							isOpen={isAddPlacePopupOpen}
							onClose={closeAllPopups}
							onAddPlace={handleAddPlaceSubmit}
							isLoad={isLoading}
						/>

						{/****PopupAvatar****/}
						<EditAvatarPopup
							isOpen={isEditAvatarPopupOpen}
							onClose={closeAllPopups}
							onUpdateAvatar={handleUpdateAvatar}
							isLoad={isLoading}
						/>

						{/****PopupImage****/}
						<ImagePopup
							card={selectedCard}
							isOpen={isImagePopupOpen}
							onClose={closeAllPopups}
						/>

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
		</CurrentUserContext.Provider>
	);
}

export default App;