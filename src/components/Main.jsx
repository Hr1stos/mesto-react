export const Main = (props) => {
	return (
		<main className="content">
			<section className="profile content__profile">
				<button
				aria-label="Изменить аватар"
				type="button"
				className="profile__avatar-edit-button"
				onClick={props.onEditAvatar}
				>
					<img src="#" alt="Аватар" className="profile__avatar" />
				</button>
				<div className="profile__info">
					<div className="profile__container">
						<h1 className="profile__name">Жак-Ив Кусто</h1>
						<button
						aria-label="Редактироване"
						type="button"
						className="profile__edit-button"
						onClick={props.onEditProfile}
						>
						</button>
					</div>
					<p className="profile__opsane">Исследователь океана</p>
				</div>
				<button
				aria-label="Добавление"
				type="button"
				className="profile__add-button"
				onClick={props.onAddPlace}
				>
				</button>
			</section>

			<section className="cards">
				<ul className="cards__container">
				</ul>
			</section>

		</main>
	)
}