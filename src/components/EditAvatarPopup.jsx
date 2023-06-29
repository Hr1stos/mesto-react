import { PopupWithForm } from "./PopupWithForm";

export const EditAvatarPopup = (props) => {
	return (
		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			buttonText="Сохранить"
			form="avatar"
			isOpen={props.isOpen}
			onClose={props.onClose}
		>
			<input
			type="url"
			id="avatar"
			name="avatar"
			placeholder="Ссылка на аватар"
			class="popup__input"
			required
			/>
			<span id="error-avatar" class="popup__error"></span>
		</PopupWithForm>
	)
}

