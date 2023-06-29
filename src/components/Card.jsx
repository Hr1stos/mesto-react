export const Card = (props) => {
	return (
			<li class="card">
				<img
				src={props.card.link}
				alt={props.card.name}
				class="card__image"
				onClick={() => {
					props.onCardClick(props.card);
				}}
				/>
				<div class="card__name">
				<h2 class="card__title">{props.card.name}</h2>
					<div class="card__like-container">
						<button aria-label="Мне нравтся" type="button" class="card__button_like"></button>
					<p class="card__like-counter">{props.card.likes.length}</p>
					</div>
				</div>
				<button aria-label="Удалить" type="button" class="card__button_delete"></button>
			</li>
	)
}