import './Header.css'

export const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon">☕</span>
        <span>Coffee&amp;Co</span>
      </div>

      <div className="header__cart">
        🛒 Корзина
        {cartCount > 0 && <span className="header__badge">{cartCount}</span>}
      </div>
    </header>
  )
}