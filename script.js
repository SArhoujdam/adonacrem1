const products = [
  {
    name: 'GEL LIMPIADOR FACIAL',
    category: 'Nettoyage',
    price: 66.84,
    description: 'Gel nettoyant doux pour un visage frais, net et lumineux.',
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
    price: 140.37,
    description: 'Produit spécifique pour un soin complet et renforcé.',
  },
];

const productImages = [
  'product/WhatsApp Image 2026-11-01 at 15.15.13.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.16.48.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.21.20.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.25.22.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.30.52.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.34.25.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.37.54.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.40.01.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.43.10.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.45.47.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.48.01.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.50.47.jpeg',
  'https://adonacrem.netlify.app/product/WhatsApp%20Image%202026-11-01%20at%2015.56.38.jpeg',
  'product/WhatsApp Image 2026-11-01 at 15.59.52.jpeg',
  'product/WhatsApp Image 2026-11-01 at 16.03.02.jpeg',
  'product/WhatsApp Image 2026-11-01 at 16.04.38.jpeg',
  'product/WhatsApp Image 2026-11-01 at 16.08.39.jpeg',
  'product/WhatsApp Image 2026-11-01 at 16.12.26.jpeg',
  'product/WhatsApp Image 2026-11-01 at 16.18.59.jpeg',
];

const productList = products.map((product, index) => ({
  ...product,
  image: productImages[index] || '',
}));

const phoneNumber = '212787324470';
const productGrid = document.getElementById('productGrid');
const productSearchInput = document.getElementById('productSearch');
const productResultsCount = document.getElementById('productResultsCount');

const getVisibleProducts = (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return productList;
  }

  return productList.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();

    return name.includes(normalizedQuery) || category.includes(normalizedQuery);
  });
};

const renderProducts = (query = '') => {
  const visibleProducts = getVisibleProducts(query);
  productGrid.innerHTML = '';

  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="product-empty">Aucun produit trouvé pour cette recherche.</div>';
    productResultsCount.textContent = '0 résultat';
    return;
  }

  visibleProducts.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  const label = visibleProducts.length > 1 ? 'résultats' : 'résultat';
  productResultsCount.textContent = `${visibleProducts.length} ${label} trouvé(s)`;
};

const createProductModal = () => {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="product-modal-backdrop" data-close="true"></div>
    <div class="product-modal-panel" role="dialog" aria-modal="true" aria-labelledby="productDetailTitle">
      <button type="button" class="product-modal-close" aria-label="Fermer">×</button>
      <div class="product-modal-content">
        <div class="product-modal-image-wrap">
          <img id="productDetailImage" src="" alt="Produit" />
        </div>
        <div class="product-modal-body">
          <span id="productDetailCategory" class="tag"></span>
          <h3 id="productDetailTitle"></h3>
          <p id="productDetailDescription"></p>
          <div class="product-modal-price" id="productDetailPrice"></div>
          <div class="product-modal-actions">
            <button class="order-btn" id="productDetailOrder" type="button">Commander via WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  `;

  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  };

  modal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close="true"]')) {
      closeModal();
    }
  });

  modal.querySelector('.product-modal-close').addEventListener('click', closeModal);

  document.body.appendChild(modal);

  return {
    modal,
    open(product) {
      const detailImage = modal.querySelector('#productDetailImage');
      const detailCategory = modal.querySelector('#productDetailCategory');
      const detailTitle = modal.querySelector('#productDetailTitle');
      const detailDescription = modal.querySelector('#productDetailDescription');
      const detailPrice = modal.querySelector('#productDetailPrice');
      const detailOrder = modal.querySelector('#productDetailOrder');

      detailImage.src = product.image;
      detailImage.alt = product.name;
      detailCategory.textContent = product.category;
      detailTitle.textContent = product.name;
      detailDescription.textContent = product.description;
      detailPrice.textContent = formatPrice(product.price);

      detailOrder.onclick = () => {
        const message = encodeURIComponent(`Bonjour, je souhaite commander ${product.name} au prix de ${formatPrice(product.price)}.`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      };

      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    },
  };
};

const productModal = createProductModal();

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
    : '<div class="product-image-placeholder">Image bientôt</div>';

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
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const message = encodeURIComponent(buttonText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  });

  card.addEventListener('click', (event) => {
    if (event.target.closest('.order-btn')) {
      return;
    }
    productModal.open(product);
  });

  return card;
};

productSearchInput.addEventListener('input', (event) => {
  renderProducts(event.target.value);
});

renderProducts();
