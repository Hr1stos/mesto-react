export const ImagePopup = ({ card, isOpen, onClose }) => {
	return (
		<div
			className={`popup popup_type_image
		${isOpen ? "popup_opened" : ""}`}
		>
			<figure className="popup__container-image">
				<button
					aria-label="Закрыть"
					type="button"
					className="popup__close-button"
					onClick={onClose}
				></button>
				<img
					src={card.link}
					alt={card.name}
					className="popup__img"
				/>
				<figcaption className="popup__caption">
					{card.name}
				</figcaption>
			</figure>
		</div>
	)
}