export const ImagePopup = (props) => {
	return (
		<div
		className={`popup popup_type_image
		${props.isOpen ? "popup_opened" : ""}`}
		>
			<figure className="popup__container-image">
				<button
				aria-label="Закрыть"
				type="button"
				className="popup__close-button"
				onClick={props.onClose}
				></button>
				<img
				src={props.card.link}
				alt={props.card.name}
				className="popup__img"
				/>
				<figcaption className="popup__caption">
					{props.card.name}
				</figcaption>
			</figure>
		</div>
	)
}