const products = [
  { name: 'Gel nettoyant visage', category: 'Nettoyage', price: 66.84, description: 'Nettoie en douceur la peau et la laisse fraîche. / ينظف البشرة بلطف ويتركها منتعشة.', image: 'product/WhatsApp Image 2026-11-01 at 15.15.13.jpeg' },
  { name: 'Lotion hydratante', category: 'Soin', price: 50.8, description: 'Lotion douce qui hydrate et apaise la peau. / لوشن لطيف يرطب البشرة ويساعد على تهدئتها.', image: 'product/WhatsApp Image 2026-11-01 at 15.16.48.jpeg' },
  { name: 'Gel crème hygiénique', category: 'Hygiène', price: 34.76, description: 'Formule douce pour le confort et l’hygiène au quotidien. / تركيبة لطيفة للراحة والنظافة اليومية.', image: 'product/WhatsApp Image 2026-11-01 at 15.21.20.jpeg' },
  { name: 'Tonique vitamine C', category: 'Soin', price: 85.56, description: 'Tonique qui rafraîchit la peau et lui donne de l’éclat. / تونر ينعش البشرة ويساعد على منحها إشراقة.', image: 'product/WhatsApp Image 2026-11-01 at 15.25.22.jpeg' },
  { name: 'Parfum H&B Vanille', category: 'Parfum', price: 104.28, description: 'Parfum doux aux notes gourmandes de vanille. / عطر ناعم برائحة الفانيليا الحلوة والدافئة.', image: 'product/WhatsApp Image 2026-11-01 at 15.30.52.jpeg' },
  { name: 'Vitamine C + Zinc', category: 'Soin', price: 52.14, description: 'Complément beauté pour accompagner votre routine quotidienne. / مكمل للعناية بالجمال لمرافقتك في روتينك اليومي.', image: 'product/WhatsApp Image 2026-11-01 at 15.34.25.jpeg' },
  { name: 'Magnésium effervescent', category: 'Bien-être', price: 48, description: 'Comprimés effervescents à intégrer à votre routine bien-être. / أقراص فوارة يمكن إضافتها إلى روتين العناية بالصحة.', image: 'product/WhatsApp Image 2026-11-01 at 15.37.54.jpeg' },
  { name: 'Eau de parfum Diamond', category: 'Parfum', price: 46, description: 'Un parfum élégant à porter au quotidien. / عطر أنيق مناسب للاستعمال اليومي.', image: 'product/WhatsApp Image 2026-11-01 at 15.40.01.jpeg' },
  { name: 'Crème pour les pieds à l’urée', category: 'Soin des pieds', price: 29.41, description: 'Crème nourrissante pour des pieds doux et hydratés. / كريم مغذٍ للعناية بالقدمين وترطيبهما والحفاظ على نعومتهما.', image: 'product/WhatsApp Image 2026-11-01 at 15.43.10.jpeg' },
  { name: 'Hydratant pour les pieds', category: 'Soin des pieds', price: 29.41, description: 'Soin hydratant pour des pieds doux et bien entretenus. / عناية مرطبة للقدمين تساعد على الحفاظ على نعومتهما.', image: 'product/WhatsApp Image 2026-11-01 at 15.45.47.jpeg' },
  { name: 'Crème mains à l’aloe vera', category: 'Soin des mains', price: 33, description: 'Crème pour des mains douces et confortables. / كريم لليدين يساعد على منحهما النعومة والراحة.', image: 'product/WhatsApp Image 2026-11-01 at 15.48.01.jpeg' },
  { name: 'Shampooing protecteur', category: 'Cheveux', price: 72.19, description: 'Shampooing qui aide à protéger les cheveux et à leur apporter de la brillance. / شامبو يساعد على حماية الشعر ومنحه مظهراً لامعاً.', image: 'product/WhatsApp Image 2026-11-01 at 15.50.47.jpeg' },
  { name: 'Lotion corporelle', category: 'Corps', price: 70.86, description: 'Lotion hydratante pour une peau douce et souple. / لوشن مرطب لبشرة ناعمة ومرنة.', image: 'product/WhatsApp Image 2026-11-01 at 15.56.38.jpeg' },
  { name: 'Déodorant crème', category: 'Hygiène', price: 45.45, description: 'Déodorant crème pour une sensation de fraîcheur au quotidien. / مزيل عرق كريمي يمنحك إحساساً بالانتعاش يومياً.', image: 'product/WhatsApp Image 2026-11-01 at 15.59.52.jpeg' },
  { name: 'Bicarbonate blanchissant', category: 'Beauté', price: 34, description: 'Produit pratique à intégrer à votre routine beauté. / منتج عملي يمكن إضافته إلى روتين العناية بالجمال.', image: 'product/WhatsApp Image 2026-11-01 at 16.03.02.jpeg' },
  { name: 'Blanchisseur dentaire', category: 'Hygiène', price: 48.13, description: 'Produit d’hygiène bucco-dentaire pour votre routine. / منتج للعناية بنظافة الفم والأسنان ضمن روتينك اليومي.', image: 'product/WhatsApp Image 2026-11-01 at 16.04.38.jpeg' },
  { name: 'Parfum vanille', category: 'Parfum', price: 79, description: 'Une senteur douce et gourmande de vanille. / رائحة فانيليا ناعمة وحلوة.', image: 'product/WhatsApp Image 2026-11-01 at 16.08.39.jpeg' },
  { name: 'Huile d’amande', category: 'Beauté', price: 90.91, description: 'Huile nourrissante pour prendre soin de la peau. / زيت مغذٍ للعناية بالبشرة.', image: 'product/WhatsApp Image 2026-11-01 at 16.12.26.jpeg' },
  { name: 'Lotion pédicure', category: 'Soin', price: 140.37, description: 'Lotion de soin pour votre routine de pédicure. / لوشن للعناية بالقدمين ضمن روتين الباديكير.', image: 'product/WhatsApp Image 2026-11-01 at 16.18.59.jpeg' },
  { name: 'Deo Roll-On Aloe', category: 'Hygiène', price: 31, description: 'Déodorant roll-on à l’aloe vera, facile à utiliser. / مزيل عرق رول أون بالألوفيرا سهل الاستعمال.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45.jpeg' },
  { name: 'Lait nettoyant visage', category: 'Nettoyage', price: 41, description: 'Lait nettoyant doux pour le visage. / حليب منظف لطيف للوجه.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (1).jpeg' },
  { name: "Masque huile d'argan", category: 'Soin', price: 55, description: "Masque nourrissant à l'huile d'argan. / قناع مغذٍ بزيت الأركان للعناية بالبشرة.", image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (2).jpeg' },
  { name: 'Eau faciale avoine', category: 'Soin', price: 62, description: 'Eau faciale douce à l’avoine. / ماء وجه لطيف بالشوفان.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (3).jpeg' },
  { name: 'Stick Jelly', category: 'Soin', price: 96, description: 'Soin visage pratique sous forme de stick jelly. / عناية عملية بالوجه على شكل ستيك جيلي.', image: 'product/placeholder.jpg' },
  { name: 'Lotion anti-chute', category: 'Cheveux', price: 113, description: 'Lotion de soin pour le cuir chevelu et les cheveux. / لوشن للعناية بفروة الرأس والشعر.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (7).jpeg' },
  { name: 'Shampooing anti-chute', category: 'Cheveux', price: 47, description: 'Shampooing de soin pour les cheveux. / شامبو للعناية بالشعر.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (8).jpeg' },
  { name: 'Bandes nettoyantes pores', category: 'Soin', price: 57, description: 'Bandes nettoyantes pour les pores du visage. / شرائط لتنظيف مسام الوجه.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (4).jpeg' },
  { name: "Shampooing huile d'argan", category: 'Cheveux', price: 47, description: "Shampooing nourrissant à l'huile d'argan. / شامبو مغذٍ بزيت الأركان للعناية بالشعر.", image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (6).jpeg' },
  { name: 'Shampooing Plex Repair', category: 'Cheveux', price: 47, description: 'Shampooing réparateur pour les cheveux. / شامبو للعناية بالشعر وإصلاحه.', image: 'product/placeholder.jpg' },
  { name: 'Masque Plex Repair', category: 'Cheveux', price: 50, description: 'Masque réparateur pour les cheveux. / قناع للعناية بالشعر وإصلاحه.', image: 'product/placeholder.jpg' },
  { name: 'Gommage argile', category: 'Soin', price: 73, description: 'Gommage doux à l’argile pour le visage. / مقشر لطيف بالطين للعناية بالوجه.', image: 'product/WhatsApp Image 2026-11-11 at 21.52.45 (5).jpeg' },
];

const productList = products;
const phoneNumber = '212787324470';
const productGrid = document.getElementById('productGrid');
const productSearchInput = document.getElementById('productSearch');
const productResultsCount = document.getElementById('productResultsCount');
const currentPage = document.body.dataset.page || 'home';

const getProductsForPage = () => currentPage === 'promos'
  ? productList.filter((product) => product.price >= 70 || product.category === 'Parfum')
  : productList;

const getVisibleProducts = (query = '') => {
  const normalizedQuery = query.trim().toLowerCase();
  const pageProducts = getProductsForPage();
  if (!normalizedQuery) return pageProducts;
  return pageProducts.filter((product) => product.name.toLowerCase().includes(normalizedQuery)
    || product.category.toLowerCase().includes(normalizedQuery));
};

const renderProducts = (query = '') => {
  if (!productGrid) return;
  const visibleProducts = getVisibleProducts(query);
  productGrid.innerHTML = '';
  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="product-empty">Aucun produit trouvé pour cette recherche.</div>';
    if (productResultsCount) productResultsCount.textContent = '0 résultat';
    return;
  }
  visibleProducts.forEach((product) => productGrid.appendChild(createProductCard(product)));
  if (productResultsCount) {
    const label = visibleProducts.length > 1 ? 'résultats' : 'résultat';
    productResultsCount.textContent = `${visibleProducts.length} ${label} trouvé(s)`;
  }
};

const setProductImage = (image, path, fallback) => {
  image.onerror = () => {
    image.onerror = null;
    image.hidden = true;
    if (fallback) fallback.hidden = false;
  };
  image.src = encodeURI(path);
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
        <div class="product-modal-image-wrap"><img id="productDetailImage" src="" alt="Produit" /><div id="productDetailImageFallback" class="product-image-placeholder" hidden>Image bientôt</div></div>
        <div class="product-modal-body"><span id="productDetailCategory" class="tag"></span><h3 id="productDetailTitle"></h3><p id="productDetailDescription"></p><div class="product-modal-price" id="productDetailPrice"></div><div class="product-modal-actions"><button class="order-btn" id="productDetailOrder" type="button">Commander via WhatsApp</button></div></div>
      </div>
    </div>`;
  const closeModal = () => { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); };
  modal.addEventListener('click', (event) => { if (event.target.matches('[data-close="true"]')) closeModal(); });
  modal.querySelector('.product-modal-close').addEventListener('click', closeModal);
  document.body.appendChild(modal);
  return {
    open(product) {
      const detailImage = modal.querySelector('#productDetailImage');
      const detailFallback = modal.querySelector('#productDetailImageFallback');
      detailImage.hidden = false;
      detailFallback.hidden = true;
      setProductImage(detailImage, product.image, detailFallback);
      modal.querySelector('#productDetailCategory').textContent = product.category;
      modal.querySelector('#productDetailTitle').textContent = product.name;
      modal.querySelector('#productDetailDescription').textContent = product.description;
      modal.querySelector('#productDetailPrice').textContent = formatPrice(product.price);
      const detailOrder = modal.querySelector('#productDetailOrder');
      detailOrder.textContent = 'Commander via WhatsApp';
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
  if (value === null || value === undefined || Number.isNaN(Number(value))) return 'Prix sur demande';
  return `${Number(value).toFixed(2).replace('.', ',')} DH`;
};

const createProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  const buttonText = `Bonjour, je souhaite commander ${product.name} au prix de ${formatPrice(product.price)}.`;
  card.innerHTML = `
    <div class="product-image" aria-label="${product.name}"><img alt="${product.name}" class="product-image-img" /><div class="product-image-placeholder" hidden>Image bientôt</div></div>
    <div class="product-info"><div class="product-meta"><span class="tag">${product.category}</span><span class="price">${formatPrice(product.price)}</span></div><h3>${product.name}</h3><p>${product.description}</p><div class="product-actions"><button class="order-btn" type="button">Commander via WhatsApp</button></div></div>`;
  const image = card.querySelector('.product-image-img');
  setProductImage(image, product.image, card.querySelector('.product-image-placeholder'));
  card.querySelector('.order-btn').addEventListener('click', (event) => {
    event.stopPropagation();
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(buttonText)}`, '_blank');
  });
  card.addEventListener('click', (event) => {
    if (event.target.closest('.order-btn')) return;
    productModal.open(product);
  });
  return card;
};

if (productSearchInput) productSearchInput.addEventListener('input', (event) => renderProducts(event.target.value));
if (productGrid) renderProducts();
