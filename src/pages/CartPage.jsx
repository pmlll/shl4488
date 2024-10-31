// CartPage.jsx
import React from 'react';
import '../styles/cart.css';

function CartPage({ cartItems, removeFromCart }) {
    return (
        <div className="cart-page">
            <h1>yo cart</h1>
            {cartItems.length === 0 ? (
                <p>she`s empty =(</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} (Розмір: {item.size}) - {item.price} грн
                            <button style={styles.addButton} onClick={() => removeFromCart(index)}>Видалити</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
const styles = {
    addButton: {
        marginTop: '20px',
        padding: '7px 10px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};
export default CartPage;
