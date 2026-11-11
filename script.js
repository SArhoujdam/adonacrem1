const products = [
  {
    name: 'Gel nettoyant visage',
    category: 'Nettoyage',
    price: 66.84,
    stockStatus: 'on-order',
    description: 'Nettoie en douceur la peau, la laisse fraîche et lumineuse. / يزيل الأوساخ بحنان ويترك البشرة نظيفة، ناعمة ومشرقة.',
  },
  {
    name: 'Lotion hydratante',
    category: 'Soin',
    price: 50.8,
    stockStatus: 'on-order',
    description: 'Lotion douce qui hydrate en profondeur et apaise la peau. / لوشن لطيف يرطب البشرة بعمق ويهدئها ويمنحها راحة.',
  },
  {
    name: 'Gel crème hygiénique',
    category: 'Hygiène',
    price: 34.76,
    stockStatus: 'on-order',
    description: 'Formule douce pour un confort quotidien et une hygiène délicate. / تركيبة لطيفة للحفاظ على النظافة اليومية مع راحة ونعومة.',
  },
  {
    name: 'Tonique vitamine C',
    category: 'Soin',
    price: 85.56,
    stockStatus: 'on-order',
    description: 'Tonique éclat qui revitalise la peau et lui redonne de l’éclat. / تونك مضيء يعيد الحيوية إلى البشرة ويمنحها إشراقة طبيعية.',
  },
  {
    name: 'Parfum H&B Vanille',
    category: 'Parfum',
    price: 104.28,
    stockStatus: 'in-stock',
    description: 'Parfum doux et gourmand à la senteur de vanille. / عطر ناعم ورائع برائحة الفانيلا الدافئة والحلوة.',
  },
  {
    name: 'Vitamine C + Zinc',
    category: 'Soin',
    price: 52.14,
    stockStatus: 'on-order',
    description: 'Complément beauté pour un teint lumineux et une peau confortable. / مزيج مغذي يساعد على إضفاء لمعان طبيعي على البشرة ويحافظ على راحتها.',
  },
  {
    name: 'Magnésium effervescent',
    category: 'Bien-être',
    price: 48,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Idéal pour un moment de bien-être au quotidien. / منتج مثالي لدعم الراحة اليومية والهدوء والنعاس.',
  },
  {
    name: 'Eau de parfum Diamond',
    category: 'Parfum',
    price: 46,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 5,
    description: 'Parfum élégant et sensuel pour toute la journée. / عطر أنيق ورائع يمنحك الثقة والجاذبية طوال اليوم.',
  },
  {
    name: 'Crème pour les pieds à l’urée',
    category: 'Soin des pieds',
    price: 29.41,
    stockStatus: 'on-order',
    description: 'Crème nourrissante pour des pieds doux, souples et bien hydratés. / كريم مغذي يهدئ القدمين ويمنحهما نعومة وترطيب عميق.',
  },
  {
    name: 'Hydratant pour les pieds',
    category: 'Soin des pieds',
    price: 29.41,
    stockStatus: 'on-order',
    description: 'Hydratation intense pour des pieds doux et bien entretenus. / ترطيب قوي يساعد على الحفاظ على نعومة القدمين وجمال مظهرهما.',
  },
  {
    name: 'Crème mains à l’aloe vera',
    category: 'Soin des mains',
    price: 33,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Crème mains apaisante et protectrice pour une peau douce. / كريم يدين مهدئ ومرطب يساعد على حماية البشرة ونعومتها.',
  },
  {
    name: 'Shampooing protecteur',
    category: 'Cheveux',
    price: 72.19,
    stockStatus: 'in-stock',
    description: 'Shampooing qui protège les cheveux et leur donne brillance et souplesse. / شامبو يحمي الشعر من الجفاف ويمنحه لمعانًا ونضارة ونعومة.',
  },
  {
    name: 'Lotion corporelle',
    category: 'Corps',
    price: 70.86,
    stockStatus: 'on-order',
    description: 'Lotion hydratante pour une peau souple et visiblement plus douce. / لوشن للجسم يرطب البشرة ويتركها ناعمة ومرنة طوال اليوم.',
  },
  {
    name: 'Déodorant crème',
    category: 'Hygiène',
    price: 45.45,
    stockStatus: 'on-order',
    description: 'Déodorant confort durable pour rester frais toute la journée. / مزيل رائحة مريح يوفر حماية طويلة ويمنح إحساسًا بنظافة مستمرة.',
  },
  {
    name: 'Bicarbonate blanchissant',
    category: 'Beauté',
    price: 34,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Produit doux et efficace pour l’entretien quotidien. / منتج لطيف وفعال للعناية اليومية ويمنح البشرة مظهرًا مشرقًا.',
  },
  {
    name: 'Blanchisseur dentaire',
    category: 'Hygiène',
    price: 48.13,
    stockStatus: 'on-order',
    description: 'Pour un sourire plus éclatant et une sensation de propreté. / يساعد على إضفاء لمع��ن أبيض على الأسنان مع إحساس بالنظافة.',
  },
  {
    name: 'Parfum vanille',
    category: 'Parfum',
    price: 79,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 5,
    description: 'Senteur douce et gourmande qui accompagne votre routine quotidienne. / رائحة فانيلا دافئة وناعمة تضيف إحساسًا مريحًا وأنيقًا يوميًا.',
  },
  {
    name: 'Huile d’amande',
    category: 'Beauté',
    price: 90.91,
    stockStatus: 'on-order',
    description: 'Huile nourrissante pour hydrater et sublimer la peau. / زيت مغذي يساعد على ترطيب البشرة وتحسين مظهرها بشكل طبيعي.',
  },
  {
    name: 'Lotion pédicure',
    category: 'Soin',
    price: 140.37,
    stockStatus: 'on-order',
    description: 'Soin ciblé pour un confort optimal et un esprit tranquille. / علاج متخصص يساعد على الحفاظ على الراحة والنظافة الصحية لفروة القدمين.',
  },
  {
    name: 'Deo Roll-On Aloe',
    category: 'Hygiène',
    price: 31,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 10,
    description: 'Déodorant roll-on à l’aloe vera.',
  },
  {
    name: 'Lait nettoyant visage',
    category: 'Nettoyage',
    price: 41,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Lait nettoyant doux pour le visage.',
  },
  {
    name: "Masque huile d'argan",
    category: 'Soin',
    price: 55,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 2,
    description: "Masque nourrissant à l'huile d'argan.",
  },
  {
    name: 'Eau faciale avoine',
    category: 'Soin',
    price: 62,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Eau faciale douce à l’avoine.',
  },
  {
    name: 'Stick Jelly',
    category: 'Soin',
    price: 96,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 2,
    description: 'Soin visage en stick jelly.',
  },
  {
    name: 'Lotion anti-chute',
    category: 'Cheveux',
    price: 113,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Lotion de soin pour cheveux.',
  },
  {
    name: 'Shampooing anti-chute',
    category: 'Cheveux',
    price: 47,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Shampooing de soin pour cheveux.',
  },
  {
    name: 'Bandes nettoyantes pores',
    category: 'Soin',
    price: 57,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Bandes nettoyantes pour les pores du visage.',
  },
  {
    name: "Shampooing huile d'argan",
    category: 'Cheveux',
    price: 47,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 2,
    description: "Shampooing nourrissant à l'huile d'argan.",
  },
  {
    name: 'Shampooing Plex Repair',
    category: 'Cheveux',
    price: 47,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 2,
    description: 'Shampooing réparateur pour cheveux.',
  },
  {
    name: 'Masque Plex Repair',
    category: 'Cheveux',
    price: 50,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Masque réparateur pour cheveux.',
  },
  {
    name: 'Gommage argile',
    category: 'Soin',
    price: 73,
    stockStatus: 'in-stock',
    stockDate: '10/11/2026',
    stockQuantity: 4,
    description: 'Gommage doux à l’argile.',
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
const currentPage = document.body.dataset.page || 'home';

const getProductsForPage = () => {
  if (currentPage === 'promos') {
    return productList.filter((product) => product.price >= 70 || product.category === 'Parfum');
  }

  return productList;
};

const getVisibleProducts = (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();
  const pageProducts = getProductsForPage();

  if (!normalizedQuery) {
    return pageProducts;
  }

  return pageProducts.filter((product) => {
    const name = product.name.toLowerCase();
    const category = product.category.toLowerCase();

    return name.includes(normalizedQuery) || category.includes(normalizedQuery);
  });
};

const renderProducts = (query = '') => {
  if (!productGrid) {
    return;
  }

  const visibleProducts = getVisibleProducts(query);
  productGrid.innerHTML = '';

  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="product-empty">Aucun produit trouvé pour cette recherche.</div>';
    if (productResultsCount) {
      productResultsCount.textContent = '0 résultat';
    }
    return;
  }

  visibleProducts.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  if (productResultsCount) {
    const label = visibleProducts.length > 1 ? 'résultats' : 'résultat';
    productResultsCount.textContent = `${visibleProducts.length} ${label} trouvé(s)`;
  }
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
      const isOnOrder = product.stockStatus === 'on-order';
      detailOrder.textContent = isOnOrder ? 'Commander sur commande' : 'Commander sur WhatsApp';

      detailOrder.onclick = () => {
        const orderStatus = isOnOrder ? ' sur commande' : '';
        const message = encodeURIComponent(`Bonjour, je souhaite commander ${product.name}${orderStatus} au prix de ${formatPrice(product.price)}.`);
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

  const isOnOrder = product.stockStatus === 'on-order';
  const buttonText = `Bonjour, je souhaite commander ${product.name}${isOnOrder ? ' sur commande' : ''} au prix de ${formatPrice(product.price)}.`;
  const stockLabel = isOnOrder ? 'Sur Commande' : 'En Stock';
  const stockClass = isOnOrder ? 'is-on-order' : 'is-in-stock';
  const stockDetails = product.stockDate
    ? `<p class="product-stock-details">Nouveau stock du ${product.stockDate}</p>`
    : '';
  const stockQuantity = product.stockQuantity
    ? `<p class="product-stock-details">Quantité disponible : ${product.stockQuantity}</p>`
    : '';
  const imageMarkup = product.image
    ? `<img src="${product.image}" alt="${product.name}" class="product-image-img" />`
    : '<div class="product-image-placeholder">Image bientôt</div>';

  card.innerHTML = `
    <div class="product-image" aria-label="${product.name}">${imageMarkup}<span class="product-stock-badge ${stockClass}">${stockLabel}</span></div>
    <div class="product-info">
      <div class="product-meta">
        <span class="tag">${product.category}</span>
        <span class="price">${formatPrice(product.price)}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      ${stockDetails}
      ${stockQuantity}
      <div class="product-actions">
        <button class="order-btn" type="button">${isOnOrder ? 'Commander sur commande' : 'Commander via WhatsApp'}</button>
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

if (productSearchInput) {
  productSearchInput.addEventListener('input', (event) => {
    renderProducts(event.target.value);
  });
}

if (productGrid) {
  renderProducts();
}
