const products = [
  {
    name: 'GEL LIMPIADOR FACIAL',
    category: 'Nettoyage',
    price: 67,
    description: 'Gel nettoyant doux pour un visage frais, net et lumineux.',
    image:
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'LOCIÓN HIDRATA',
    category: 'Soin',
    price: 50.8,
    description: 'Lotion hydratante pour une peau douce et confortable.',
  },
  {
    name: 'GEL HIGIENE INTIMO',
    category: 'Hygiène',
    price: 34.76,
    description: 'Formule douce pour un confort quotidien.',
  },
  {
    name: 'TÓNICO VITAMINA C',
    category: 'Soin',
    price: 85.56,
    description: 'Tonique éclat pour une peau lumineuse et revitalisée.',
  },
  {
    name: 'H&B FRAGAN. VAINILLA',
    category: 'Parfum',
    price: 104.28,
    description: 'Parfum doux et agréable avec une senteur vanille.',
  },
  {
    name: 'VITAMINA C + ZINC',
    category: 'Soin',
    price: 52.14,
    description: 'Complément beauté pour l’éclat et le confort de la peau.',
  },
  {
    name: 'MAGNESIO EFERVESCENT',
    category: 'Bien-être',
    price: 52.14,
    description: 'Solution idéale pour un moment de bien-être quotidien.',
  },
  {
    name: 'EDP DIAMOND',
    category: 'Parfum',
    price: 49.47,
    description: 'Parfum élégant et sensuel pour toute la journée.',
  },
  {
    name: 'CREMA PIES UREA',
    category: 'Soin des pieds',
    price: 29.41,
    description: 'Crème nourrissante pour des pieds doux et souples.',
  },
  {
    name: 'HIDRATANTE PIES',
    category: 'Soin des pieds',
    price: 29.41,
    description: 'Hydratation intense pour des pieds bien nourris.',
  },
  {
    name: 'CR. MANOS ALOE VERA',
    category: 'Soin des mains',
    price: 26.74,
    description: 'Crème mains à l’aloe vera pour une peau douce et protégée.',
  },
  {
    name: 'CHAMPÚ PROTECT',
    category: 'Cheveux',
    price: 72.19,
    description: 'Shampooing protecteur pour cheveux forts et soyeux.',
  },
  {
    name: 'LOCIÓN CORPORAL',
    category: 'Corps',
    price: 70.86,
    description: 'Lotion corporelle hydratante pour une peau souple et douce.',
  },
  {
    name: 'DEO CREMA',
    category: 'Hygiène',
    price: 45.45,
    description: 'Déodorant crème pour un confort durable toute la journée.',
  },
  {
    name: 'BICARBONATO BLANQUEA',
    category: 'Beauté',
    price: 29.41,
    description: 'Produit blanchissant doux et efficace pour l’entretien quotidien.',
  },
  {
    name: 'DENT BLANQUEADOR',
    category: 'Hygiène',
    price: 48.13,
    description: 'Blanchisseur dentaire pour un sourire éclatant.',
  },
  {
    name: 'AROMA DE VAINILLA',
    category: 'Parfum',
    price: 53.48,
    description: 'Senteur douce et gourmande de vanille.',
  },
  {
    name: 'ACEITE ALMENDRAS',
    category: 'Beauté',
    price: 90.91,
    description: 'Huile nourrissante pour hydrater et sublimer la peau.',
  },
  {
    name: 'LOCIÓN PEDICULICIDA',
    category: 'Soin',
    price: null,
    description: 'Produit spécifique à confirmer pour le prix exact.',
  },
];

const phoneNumber = '212787324470';
const productGrid = document.getElementById('productGrid');

const formatPrice = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return 'Prix sur demande';
  }

  return `${Number(value).toFixed(2).replace('.', ',')} DH`;
};

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
