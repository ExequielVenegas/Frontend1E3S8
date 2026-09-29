import ProductCard from './ProductCard'

function ProductList({ products, cart, onAddToCart }) {
  if (products.length === 0) {
    return <div className="empty-results" role="status">No encontramos juegos que coincidan con tu búsqueda.</div>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={cart.find((item) => item.id === product.id)?.quantity ?? 0}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
export default ProductList
