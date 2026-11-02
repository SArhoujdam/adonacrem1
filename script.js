const products = [
  {
    name: 'GEL LIMPIADOR FACIAL',
    category: 'Nettoyage',
    price: 75,
    description: 'Gel nettoyant doux pour un visage frais, net et lumineux.',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
  },
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

const phoneNumber = '212787324470';
const productGrid = document.getElementById('productGrid');

const formatPrice = (value) => `${value.toFixed(2).replace('.', ',')} DH`;

const createProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  const buttonText = `Bonjour, je souhaite commander ${product.name} au prix de ${formatPrice(product.price)}.`;
  const imageMarkup = product.image
    ? `<img src="${product.image}" alt="${product.name}" class="product-image-img" />`
    : '';

  card.innerHTML = `
    <div class="product-image" aria-label="${product.name}">${imageMarkup}</div>
    <div class="product-info">
      <div class="product-meta">
        <span class="tag">${product.category}</span>
        <span class="price">${formatPrice(product.price)}</span>
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
