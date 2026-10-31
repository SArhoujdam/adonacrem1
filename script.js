const products = [
  {
    name: 'Crème hydratante visage',
    category: 'Soin',
    price: 12.9,
    description: 'Hydratation intense pour une peau douce et lumineuse.',
  },
  {
    name: 'Huile de beauté',
    category: 'Beauté',
    price: 15.5,
    description: 'Riche en nutriments pour nourrir et sublimer le visage.',
  },
  {
    name: 'Sérum anti-imperfections',
    category: 'Traitement',
    price: 18.9,
    description: 'Aide à améliorer l’aspect de la peau au quotidien.',
  },
  {
    name: 'Lotion nettoyante',
    category: 'Nettoyage',
    price: 11.2,
    description: 'Nettoie en douceur sans irriter la peau sensible.',
  },
  {
    name: 'Rouge à lèvres',
    category: 'Maquillage',
    price: 9.8,
    description: 'Teinte élégante et confort garanti toute la journée.',
  },
  {
    name: 'Pack soin complet',
    category: 'Offre',
    price: 29.9,
    description: 'Un coffret idéal pour une routine beauté complète.',
  },
];

const phoneNumber = '212666721338';
const productGrid = document.getElementById('productGrid');

const createProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  const buttonText = `Bonjour, je souhaite commander ${product.name} au prix de ${product.price.toFixed(2)} €.`;

  card.innerHTML = `
    <div class="product-image" aria-label="${product.name}"></div>
    <div class="product-info">
      <div class="product-meta">
        <span class="tag">${product.category}</span>
        <span class="price">${product.price.toFixed(2)} €</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-actions">
        <button class="order-btn" type="button">Commander via WhatsApp</button>
      </div>
    </div>
  `;

  const button = card.querySelector('.order-btn');
  button.addEventListener('click', () => {
    const message = encodeURIComponent(buttonText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  });

  return card;
};

products.forEach((product) => {
  productGrid.appendChild(createProductCard(product));
});
