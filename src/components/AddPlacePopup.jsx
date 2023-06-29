import { PopupWithForm } from "./PopupWithForm";

export const AddPlacePopup = (props) => {
	return (
		<PopupWithForm
			name="add"
			title="Новое место"
			buttonText="Создать"
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<input type="text" id="text" name="name" placeholder="Название" class="popup__input" required minlength="2" maxlength="30" />
			<span id="error-text" class="popup__error"></span>
			<input type="url" id="link" name="link" placeholder="Ссылка на картинку" class="popup__input" required />
			<span id="error-link" class="popup__error"></span>
		</PopupWithForm>
	)
}