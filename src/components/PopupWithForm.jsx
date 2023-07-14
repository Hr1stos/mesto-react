export const PopupWithForm = ({ name, title, form, children, buttonText, isOpen, onClose, onSubmit }) => {
	return (
		<div
			className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""
				}`}
		>
			<div className="popup__container">
				<button
					aria-label="Закрыть"
					type="button"
					className="popup__close-button"
					onClick={onClose}
				/>
				<h2 className="popup__title">
					{title}
				</h2>
				<form
					name={name}
					className={`popup__form popup__form_type_${form}`}
					onSubmit={onSubmit}
				>
					{children}
					<button
						type="submit"
						className="popup__submit-button"
					>
						{buttonText}
					</button>
				</form>
			</div>
		</div>
	)
}