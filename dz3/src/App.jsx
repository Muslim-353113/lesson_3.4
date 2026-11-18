import { useState } from 'react'
import { Header, ProductList, Cart } from './components'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    title: 'Эспрессо',
    description: 'Крепкий и насыщенный. Классика итальянского кофе.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=500&q=80',
  },
  {
    id: 2,
    title: 'Капучино',
    description: 'Эспрессо с нежной молочной пенкой. Идеальный баланс.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80',
  },
  {
    id: 3,
    title: 'Латте',
    description: 'Мягкий кофе с большим количеством горячего молока.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80',
  },
  {
    id: 4,
    title: 'Американо',
    description: 'Эспрессо с горячей водой. Лёгкий и бодрящий.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=80',
  },
  {
    id: 5,
    title: 'Флэт Уайт',
    description: 'Двойной эспрессо с тонким слоем молочной пены.',
    price: 270,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80',
  },
  {
    id: 6,
    title: 'Мокка',
    description: 'Кофе с шоколадом и сливками. Для сладкоежек.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80',
  },
  {
    id: 7,
    title: 'Раф',
    description: 'Сливочный кофе с ванилью. Нежный и бархатистый.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=500&q=80',
  },
  {
    id: 8,
    title: 'Глясе',
    description: 'Холодный кофе с шариком мороженого.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80',
  },
]

const App = () => {
  const [cart, setCart] = useState([]) // корзина изначально пуста

  // Добавить товар в корзину
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)

      // Если уже есть — увеличиваем количество
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // Если нет — добавляем с quantity: 1
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Удалить товар
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  // Очистить корзину
  const clearCart = () => setCart([])

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <Header cartCount={totalCount} />
      <main className="app__main">
        <ProductList products={PRODUCTS} onAdd={addToCart} />
        <Cart items={cart} onRemove={removeFromCart} onClear={clearCart} />
      </main>
    </div>
  )
}

export default App