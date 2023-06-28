export const ImagePopup = () => {
	return (
		<div class="popup popup_type_image">
			<figure class="popup__container-image">
				<button aria-label="Закрыть" type="button" class="popup__close-button"></button>
				<img src="#" alt="#" class="popup__img" />
				<figcaption class="popup__caption"></figcaption>
			</figure>
		</div>
	)
}