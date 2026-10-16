const products = [
    {
        id: 1,
        name: "Cemsan Electric Instant Water Heater – C3300",
        price: 100.00,
        image: "mehsul1.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Elektrik ani su qızdırıcısı",
            "Marka/Model: Cemsan C3300",
            "Korpus: Kompakt divara quraşdırılan dizayn, ağ rəng",
            "İdarəetmə: Ön paneldə iki fırlanan düymə (temperatur və axın/sürət tənzimlənməsi)",
            "Göstəricilər: İstilik səviyyəsi üçün çoxpilləli LED işıqlar",
            "Qoşulma: Aşağı hissədən iki su xətti çıxışı üçün giriş/çıxış",
            "İstifadə sahəsi: Hamam, mətbəx və ya isti suya ehtiyac olan nöqtələrdə ani qızdırma",
            "Üstünlüklər: Suyu dərhal qızdırır, yerə qənaət edən quruluş, sadə və intuitiv idarəetmə, tənzimlənən istilik səviyyələri"
        ]
    },
    {
        id: 2,
        name: "Termal İki Konturlu Qaz Kombisi",
        price: 550.00,
        image: "mehsul2.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Divardan asılan iki konturlu qaz qazanı (Kombi)",
            "Marka: Termal",
            "Funksiyalar: İsitmə və məişət isti su təminatı (iki ayrı kontur)",
            "İdarəetmə Paneli: Qara rəngli mərkəzi panel, mexaniki tənzimləmə üçün 2 fırladıcı düymə",
            "Göstəricilər: Sistem təzyiqini göstərən analoq manometr və işıqlı status indikatorları",
            "Dizayn: Ağ korpus, kompakt və şkafa/divara uyğun səliqəli görünüş",
            "Uyğunluq: Mərkəzi isitmə radiator sistemləri, mənzillər və ofislər üçün fasiləsiz isti su"
        ]
    },
    {
        id: 3,
        name: "CARDINAL Qazla İşləyən Su Qızdırıcısı – 36 kW",
        price: 115.00,
        image: "mehsul3.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Qazla işləyən su qızdırıcısı (Spal)",
            "Marka: CARDINAL",
            "Güc: 36 kW – mənzil və fərdi evlərdə sürətli və sabit isti su təminatı",
            "İdarəetmə Paneli: İki fırlanma düyməsi (alov/istilik tənzimləməsi və su axını)",
            "Göstəricilər: Ortada rəqəmsal LED göstərici",
            "Mexaniki tənzimləmə: İsti-soyuq dərəcə və alov gücünü dəqiq seçmək imkanı",
            "Dizayn: Qapalı, kompakt təkqapılı korpus, divara asma üçün uyğun və təmiz ön paneldə havalandırma barmaqlığı",
            "İstifadə sahəsi: Məişətdə davamlı isti su ehtiyacı olan mətbəx və hamamlar"
        ]
    },
    {
        id: 4,
        name: "ECOTHERM Divar Tipli Su Qızdırıcısı – 36L",
        price: 155.00,
        image: "mehsul4.jpeg",
        phone: "077-611-02-33",
        specs: [
            "Növ: Divar tipli su qızdırıcısı",
            "Marka: ECOTHERM",
            "Tutum: 36 litr",
            "İdarəetmə: Rəqəmsal LED displey və toxunma düymələri (On/Off, temperaturu artır/azalt)",
            "Rejimlər: “Keep warm / heating” göstəriciləri ilə iş rejimləri",
            "Üstünlüklər: Enerji effektivliyi etiketi (yüksək sinif), təhlükəsiz və davamlı iş prinsipi",
            "Texniki xüsusiyyət: Mis/bronz boru sistemi",
            "Dizayn: Kompakt divar tipli korpus, ön paneldə status ikonası və rəqəmsal idarəetmə paneli",
            "İstifadə sahəsi: Mətbəx və ya hamamda sabit isti su təminatı"
        ]
    }
];

let cart = [];

const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const modalProductDetails = document.getElementById('modal-product-details');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Məhsulları ekrana düzək
function renderProducts() {
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onclick="openProductModal(${product.id})">
            <div class="product-info">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} ₼</div>
                <div class="product-actions">
                    <button class="details-btn" onclick="openProductModal(${product.id})">Ətraflı</button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Səbətə at</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Məhsul detallarını modalda göstər
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalProductDetails.innerHTML = `
        <div class="detail-grid">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="product-price">${product.price.toFixed(2)} ₼</div>
            <div class="contact-info">
                <i class="fas fa-phone-alt"></i> Əlaqə nömrəsi: <a href="tel:${product.phone}">${product.phone}</a>
            </div>
            <div class="detail-specs">
                <strong>Texniki xüsusiyyətlər və üstünlüklər:</strong>
                <ul>
                    ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal();" style="margin-top: 15px; padding: 12px;">Səbətə at</button>
        </div>
    `;
    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

// Səbətə əlavə et
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Səbəti yenilə
function updateCart() {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Səbətiniz boşdur.</p>';
        cartTotal.innerText = '0.00';
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <small>${item.price.toFixed(2)} ₼</small>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = total.toFixed(2);
}

// Səbətdən sil
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Səbət pəncərəsini aç/bağla
function toggleCart() {
    cartModal.classList.toggle('active');
}

// Sifarişi tamamla
function checkoutOrder() {
    if (cart.length === 0) {
        alert('Səbətiniz boşdur!');
        return;
    }
    alert('Sifarişiniz uğurla qəbul olundu! Operatorumuz ən qısa zamanda sizinlə əlaqə saxlayacaq.');
    cart = [];
    updateCart();
    toggleCart();
}

// İlk açılışda çalışdır
renderProducts();