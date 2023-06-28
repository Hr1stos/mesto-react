import { PopupWithForm } from "./PopupWithForm";

export const EditProfilePopup = ({ isOpen, onClose }) => {
	return (
		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			buttonText="Сохранить"
			isOpen={isOpen}
			onClose={onClose}
		>
			<input type="text" id="name" name="name" placeholder="Имя" class="popup__input popup__input_type_name" required minlength="2" maxlength="40" />
			<span id="error-name" class="popup__error"></span>
			<input type="text" id="about" name="about" placeholder="О себе" class="popup__input popup__input_type_about" required minlength="2" maxlength="200" />
			<span id="error-about" class="popup__error"></span>
		</PopupWithForm>
	)
}