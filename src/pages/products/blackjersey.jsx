import image from './photos/blackjersey.webp'

import React, { useState } from 'react';

const BlackJersey = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const sizes = ['S', 'M', 'L', 'XL'];

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img
                    src={image}
                    alt="Product"
                    style={styles.image}
                />
            </div>
            <div style={styles.detailsContainer}>
                <h1 style={styles.title}>Чорна футболка</h1>
                <p style={styles.price}>4999</p>
                <p style={styles.description}>Высококачественная мотокросс футболка из прочных материалов.</p>

                <div style={styles.sizeContainer}>
                    <h3>Выберите размер:</h3>
                    <div style={styles.sizes}>
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => handleSizeChange(size)}
                                style={{
                                    ...styles.sizeButton,
                                    backgroundColor: selectedSize === size ? '#000' : '#fff',
                                    color: selectedSize === size ? '#fff' : '#000'
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <button style={styles.addButton}>Добавить в корзину</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '800px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '20px',
    },
    imageContainer: {
        flex: 1,
        marginRight: '20px',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    detailsContainer: {
        flex: 1,
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    price: {
        fontSize: '20px',
        color: '#e91e63',
        margin: '10px 0',
    },
    description: {
        fontSize: '16px',
        margin: '10px 0',
    },
    sizeContainer: {
        marginTop: '20px',
    },
    sizes: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    },
    sizeButton: {
        padding: '10px 20px',
        border: '1px solid #000',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    addButton: {
        marginTop: '20px',
        padding: '15px 20px',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    }
};

export default BlackJersey;