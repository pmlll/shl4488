import React, { useState, useEffect } from 'react';
import '../styles/catalog.css';


// Пример данных для товаров (в реальном приложении это может быть запрос к API)
const productsData = [
    { id: 1, name: 'Футболка', category: 'Одежда', price: 1200, image: '/images/tshirt.jpg' },
    { id: 2, name: 'Джинсы', category: 'Одежда', price: 3000, image: '/images/jeans.jpg' },
    { id: 3, name: 'Кроссовки', category: 'Обувь', price: 3500, image: '/images/sneakers.jpg' },
    { id: 4, name: 'Сумка', category: 'Аксессуары', price: 2500, image: '/images/bag.jpg' },
    // Добавьте больше товаров по мере необходимости
];

const CatalogPage = () => {
    const [products, setProducts] = useState(productsData); // Список всех товаров
    const [category, setCategory] = useState('Все'); // Выбранная категория
    const [sortOption, setSortOption] = useState(''); // Выбранная опция сортировки

    // Фильтрация по категории
    const filterByCategory = (category) => {
        setCategory(category);
        if (category === 'Все') {
            setProducts(productsData);
        } else {
            setProducts(productsData.filter(product => product.category === category));
        }
    };

    // Сортировка товаров по цене
    const sortByPrice = (order) => {
        const sortedProducts = [...products].sort((a, b) => {
            return order === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setProducts(sortedProducts);
        setSortOption(order);
    };

    return (
        <div className="catalog-page">
            <h1>Каталог</h1>

            {/* Фильтры и сортировка */}
            <div className="filters">
                <div className="category-filter">
                    <button onClick={() => filterByCategory('Все')}>Все</button>
                    <button onClick={() => filterByCategory('Одежда')}>Одежда</button>
                    <button onClick={() => filterByCategory('Обувь')}>Обувь</button>
                    <button onClick={() => filterByCategory('Аксессуары')}>Аксессуары</button>
                </div>

                <div className="sort-options">
                    <button onClick={() => sortByPrice('asc')}>Цена по возрастанию</button>
                    <button onClick={() => sortByPrice('desc')}>Цена по убыванию</button>
                </div>
            </div>

            {/* Сетка товаров */}
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Категория: {product.category}</p>
                        <p>Цена: {product.price} ₽</p>
                        <button>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
