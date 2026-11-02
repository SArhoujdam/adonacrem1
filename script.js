const products = [
  {
    name: 'Gel nettoyant visage',
    category: 'Nettoyage',
    price: 66.84,
    description: 'Nettoie en douceur la peau, la laisse fraîche et lumineuse. / يزيل الأوساخ بحنان ويترك البشرة نظيفة، ناعمة ومشرقة.',
  },
  {
    name: 'Lotion hydratante',
    category: 'Soin',
    price: 50.8,
    description: 'Lotion douce qui hydrate en profondeur et apaise la peau. / لوشن لطيف يرطب البشرة بعمق ويهدئها ويمنحها راحة.',
  },
  {
    name: 'Gel intime hygiénique',
    category: 'Hygiène',
    price: 34.76,
    description: 'Formule douce pour un confort quotidien et une hygiène délicate. / تركيبة لطيفة للحفاظ على النظافة اليومية مع راحة ونعومة.',
  },
  {
    name: 'Tonique vitamine C',
    category: 'Soin',
    price: 85.56,
    description: 'Tonique éclat qui revitalise la peau et lui redonne de l’éclat. / تونك مضيء يعيد الحيوية إلى البشرة ويمنحها إشراقة طبيعية.',
  },
  {
    name: 'Parfum H&B Vanille',
    category: 'Parfum',
    price: 104.28,
    description: 'Parfum doux et gourmand à la senteur de vanille. / عطر ناعم ورائع برائحة الفانيلا الدافئة والحلوة.',
  },
  {
    name: 'Vitamine C + Zinc',
    category: 'Soin',
    price: 52.14,
    description: 'Complément beauté pour un teint lumineux et une peau confortable. / مزيج مغذي يساعد على إضفاء لمعان طبيعي على البشرة ويحافظ على توازنها.',
  },
  {
    name: 'Magnésium effervescent',
    category: 'Bien-être',
    price: 52.14,
    description: 'Idéal pour un moment de bien-être au quotidien. / منتج مثالي لدعم الراحة اليومية والهدوء والنعاس.',
  },
  {
    name: 'Eau de parfum Diamond',
    category: 'Parfum',
    price: 49.47,
    description: 'Parfum élégant et sensuel pour toute la journée. / عطر أنيق ورائع يمنحك الثقة والجاذبية طوال اليوم.',
  },
  {
    name: 'Crème pour les pieds à l’urée',
    category: 'Soin des pieds',
    price: 29.41,
    description: 'Crème nourrissante pour des pieds doux, souples et bien hydratés. / كريم مغذي يهدئ القدمين ويمنحهما نعومة وترطيب عميق.',
  },
  {
    name: 'Hydratant pour les pieds',
    category: 'Soin des pieds',
    price: 29.41,
    description: 'Hydratation intense pour des pieds doux et bien entretenus. / ترطيب قوي يساعد على الحفاظ على نعومة القدمين وجمال مظهرهما.',
  },
  {
    name: 'Crème mains à l’aloe vera',
    category: 'Soin des mains',
    price: 26.74,
    description: 'Crème mains apaisante et protectrice pour une peau douce. / كريم يدين مهدئ ومرطب يساعد على حماية البشرة ونعومتها.',
  },
  {
    name: 'Shampooing protecteur',
    category: 'Cheveux',
    price: 72.19,
    description: 'Shampooing qui protège les cheveux et leur donne brillance et souplesse. / شامبو يحمي الشعر من الجفاف ويمنحه لمعانًا ونضارة ونعومة.',
  },
  {
    name: 'Lotion corporelle',
    category: 'Corps',
    price: 70.86,
    description: 'Lotion hydratante pour une peau souple et visiblement plus douce. / لوشن للجسم يرطب البشرة ويتركها ناعمة ومرنة طوال اليوم.',
  },
  {
    name: 'Déodorant crème',
    category: 'Hygiène',
    price: 45.45,
    description: 'Déodorant confort durable pour rester frais toute la journée. / مزيل رائحة مريح يوفر حماية طويلة ويمنح إحساسًا بنظافة مستمرة.',
  },
  {
    name: 'Bicarbonate blanchissant',
    category: 'Beauté',
    price: 29.41,
    description: 'Produit doux et efficace pour l’entretien quotidien. / منتج لطيف وفعال للعناية اليومية ويمنح البشرة مظهرًا مشرقًا.',
  },
  {
    name: 'Blanchisseur dentaire',
    category: 'Hygiène',
    price: 48.13,
    description: 'Pour un sourire plus éclatant et une sensation de propreté. / يساعد على إضفاء لمعان أبيض على الأسنان مع إحساس بالنظافة.',
  },
  {
    name: 'Parfum vanille',
    category: 'Parfum',
    price: 53.48,
    description: 'Senteur douce et gourmande qui accompagne votre routine quotidienne. / رائحة فانيلا دافئة وناعمة تضيف إحساسًا مريحًا وأنيقًا يوميًا.',
  },
  {
    name: 'Huile d’amande',
    category: 'Beauté',
    price: 90.91,
    description: 'Huile nourrissante pour hydrater et sublimer la peau. / زيت مغذي يساعد على ترطيب البشرة وتحسين مظهرها بشكل طبيعي.',
  },
  {
    name: 'Lotion pédiculicide',
    category: 'Soin',
    price: 140.37,
    description: 'Soin ciblé pour un confort optimal et un esprit tranquille. / علاج متخصص يساعد على الحفاظ على الراحة والنظافة الصحية لفروة الرأس.',
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
