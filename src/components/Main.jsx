import React from 'react';
import { api } from '../utils/Api';
import { Card } from './Card';

export const Main = (props) => {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState();
	const [cards, setCards] = React.useState([]);

	React.useEffect(() =>{
		Promise.all([api.getDataUser(), api.getDataCards()])
			.then(([data, cards]) => {
				setUserName(data.name)
				setUserDescription(data.about)
				setUserAvatar(data.avatar)
				setCards(cards)
			})
			.catch((err) => {
				console.log(`Promise.all - ошибка: ${err}`);
			});
	})

	return (
		<main className="content">
			<section className="profile content__profile">
				<button
				aria-label="Изменить аватар"
				type="button"
				className="profile__avatar-edit-button"
				onClick={props.onEditAvatar}
				>
					<img src={userAvatar} alt="Аватар" className="profile__avatar" />
				</button>
				<div className="profile__info">
					<div className="profile__container">
						<h1 className="profile__name">{userName}</h1>
						<button
						aria-label="Редактироване"
						type="button"
						className="profile__edit-button"
						onClick={props.onEditProfile}
						>
						</button>
					</div>
					<p className="profile__opsane">{userDescription}</p>
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
					{cards.map((card) => (
						<Card
						key={card._id}
						card={card}
						onCardClick={props.onCardClick}
						/>
					))}
				</ul>
			</section>

		</main>
	)
}