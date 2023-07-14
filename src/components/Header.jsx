import headerLogo from "../images/header-logo.svg";

export const Header = () => {
	return (
		<header className="header page__header">
			<img
				src={headerLogo}
				alt="Логотип место"
				className="header__logo"
			/>
		</header>
	)
}