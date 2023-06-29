export const PopupWithForm = (props) => {
	return (
		<div 
			className={`popup popup_type_${props.name}
			${props.isOpen ? `popup_opened` : ""}`}
			>
			<div className="popup__container">
				<button
					aria-label="Закрыть"
					type="button"
					className="popup__close-button"
					onClick={props.onClose}
				/>
				<h2 className="popup__title">
					{props.title}
				</h2>
				<form
					name={props.name}
					className={`popup__form popup__form_type_${props.form}`}
				>
					{props.children}
					<button
						type="submit"
						className="popup__submit-button"
					>
						{props.buttonText}
					</button>
				</form>
			</div>
		</div>
	)
}