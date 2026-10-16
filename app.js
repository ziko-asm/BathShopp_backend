const products = [
    {
        id: 1,
        name: "Cemsan Electric Instant Water Heater – C3300",
        category: "heater",
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
        category: "kombi",
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
        category: "heater",
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
        category: "heater",
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
    },
    {
        id: 5,
        name: "DemirDöküm Qazla İşləyən Su Qızdırıcısı – 32L",
        category: "heater",
        price: 100.00,
        image: "mehsul5.jpeg",
        phone: "077-611-02-33",
        description: "Hamam, mətbəx və kottec tipli məkanlarda fasiləsiz isti su ehtiyacı üçün praktik həll. DemirDöküm brendinin etibarlı performansı və klassik ağ dizayn.",
        specs: [
            "Yüksək tutum: 32 litr/dəqiqəyə qədər axın",
            "Qış / Yay rejimi seçimi",
            "Qaz alovu və su temperaturu tənzimlənməsi",
            "Rəqəmsal C° göstərici ekranı",
            "Aşağı su təzyiqində işləmə mexanizmi"
        ]
    },
    {
        id: 6,
        name: "NEOterm Divar Tipli Qaz Kombi Qazanı",
        category: "kombi",
        price: 620.00,
        phone: "077-611-02-33",
        image: "mehsul6.jpeg",
        description: "Məişətdə mənzil və ofislərin mərkəzi istilik və isti su təminatı üçün uyğun, səmərəli və rahat idarə olunan kombi.",
        specs: [
            "İki konturlu sistem (istilik və isti su)",
            "Rəqəmsal LCD ekran və fırladıcı tənzimləyicilər",
            "Wi-Fi dəstəyi ilə uzaqdan idarəetmə imkanı",
            "Təhlükəsizlik sistemləri və diaqnostika",
            "Qapalı yanma kamerası və yığcam korpus"
        ]
    }
];

let cart = [];
let currentCategory = 'all';
let currentLang = 'az';

// Tərcümələr luğəti (AZ, EN, RU)
const translations = {
    az: {
        heroTitle: "Eviniz üçün Ən Keyfiyyətli Banyo Məhsulları",
        heroSub: "Bakı daxili sürətli çatdırılma və rəsmi zəmanət | Əlaqə: 077 611 02 33",
        badge1: "Sürətli Çatdırılma",
        badge2: "Rəsmi Zəmanət",
        badge3: "Orijinal Məhsullar",
        productsTitle: "Məhsullarımız",
        filterAll: "Hamısı",
        filterHeater: "Qızdırıcılar",
        filterKombi: "Kombilər",
        detailsBtn: "Ətraflı",
        addToCart: "Səbətə at",
        cartEmpty: "Səbətiniz boşdur.",
        checkoutTitle: "Sifarişi Tamamla",
        namePlaceholder: "Məs: Əli Əliyev",
        phoneLabel: "Əlaqə nömrəniz:",
        completeBtn: "Sifarişi Təsdiq Et",
        locationText: "Bakı, Azərbaycan"
    },
    en: {
        heroTitle: "Best Quality Bathroom Products for Your Home",
        heroSub: "Fast delivery within Baku & official warranty | Contact: 077 611 02 33",
        badge1: "Fast Delivery",
        badge2: "Official Warranty",
        badge3: "Original Products",
        productsTitle: "Our Products",
        filterAll: "All",
        filterHeater: "Heaters",
        filterKombi: "Boilers",
        detailsBtn: "Details",
        addToCart: "Add to Cart",
        cartEmpty: "Your cart is empty.",
        checkoutTitle: "Complete Order",
        namePlaceholder: "Ex: Ali Aliyev",
        phoneLabel: "Your Phone Number:",
        completeBtn: "Confirm Order",
        locationText: "Baku, Azerbaijan"
    },
    ru: {
        heroTitle: "Лучшие товары для ванной для вашего дома",
        heroSub: "Быстрая доставка по Баку и официальная гарантия | Контакты: 077 611 02 33",
        badge1: "Быстрая доставка",
        badge2: "Официальная гарантия",
        badge3: "Оригинальные товары",
        productsTitle: "Наши товары",
        filterAll: "Все",
        filterHeater: "Обогреватели",
        filterKombi: "Котлы",
        detailsBtn: "Подробнее",
        addToCart: "В корзину",
        cartEmpty: "Ваша корзина пуста.",
        checkoutTitle: "Оформить заказ",
        namePlaceholder: "Пример: Али Алиев",
        phoneLabel: "Номер телефона:",
        completeBtn: "Подтвердить заказ",
        locationText: "Баку, Азербайджан"
    }
};

const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const modalProductDetails = document.getElementById('modal-product-details');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const BACKEND_URL = "https://bathshop-api.onrender.com";

// Kateqoriya üzrə filtrləmə
function filterProducts(category) {
    currentCategory = category;
    
    // Düymələrin aktiv sinfini idarə edirik
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderProducts();
}

// Dil dəyişdirmə funksiyası
function changeLanguage(lang) {
    currentLang = lang;
    
    // Dinamik olaraq mətnləri yeniləyirik
    const t = translations[lang];
    
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerText = t.heroTitle;
    if (document.getElementById('hero-sub')) document.getElementById('hero-sub').innerText = t.heroSub;
    if (document.getElementById('products-title')) document.getElementById('products-title').innerText = t.productsTitle;
    
    // Filtrlərin adları
    const btnAll = document.getElementById('btn-all');
    const btnHeater = document.getElementById('btn-heater');
    const btnKombi = document.getElementById('btn-kombi');
    
    if (btnAll) btnAll.innerText = t.filterAll;
    if (btnHeater) btnHeater.innerText = t.filterHeater;
    if (btnKombi) btnKombi.innerText = t.filterKombi;

    renderProducts();
}

// Məhsulları ekrana düzək (Filtr tətbiq olunmaqla)
function renderProducts() {
    if (!productsContainer) return;

    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(p => p.category === currentCategory);

    const t = translations[currentLang];

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onclick="openProductModal(${product.id})">
            <div class="product-info">
                <h3 class="product-title" onclick="openProductModal(${product.id})">${product.name}</h3>
                <div class="product-price">${product.price.toFixed(2)} ₼</div>
                <div class="product-actions">
                    <button class="details-btn" onclick="openProductModal(${product.id})">${t.detailsBtn}</button>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">${t.addToCart}</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Məhsul detallarını modalda göstər
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const t = translations[currentLang];

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
            <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal();" style="margin-top: 15px; padding: 12px;">${t.addToCart}</button>
        </div>
    `;
    if (productModal) productModal.classList.add('active');
}

function closeProductModal() {
    if (productModal) productModal.classList.remove('active');
}

function closeSuccessModal() {
    const successModal = document.getElementById('success-modal');
    if (successModal) {
        successModal.style.setProperty('display', 'none', 'important');
    }
}

// Səbətə əlavə et
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Səbəti yenilə
function updateCart() {
    if (cartCount) cartCount.innerText = cart.length;
    
    const t = translations[currentLang];

    if (cart.length === 0) {
        if (cartItemsContainer) cartItemsContainer.innerHTML = `<p>${t.cartEmpty}</p>`;
        if (cartTotal) cartTotal.innerText = '0.00';
        return;
    }

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <small>${item.price.toFixed(2)} ₼</small>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if (cartTotal) cartTotal.innerText = total.toFixed(2);
}

// Səbətdən sil
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Səbət pəncərəsini aç/bağla
function toggleCart() {
    if (cartModal) cartModal.classList.toggle('active');
}

// Sifarişi tamamla
async function checkoutOrder() {
    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const errorDiv = document.getElementById('checkout-error');

    if (errorDiv) {
        errorDiv.style.display = 'none';
        errorDiv.textContent = '';
    }

    if (cart.length === 0) {
        if (errorDiv) {
            errorDiv.textContent = 'Səbətiniz boşdur!';
            errorDiv.style.display = 'block';
        }
        return;
    }

    const customerName = nameInput ? nameInput.value.trim() : '';
    const customerPhone = phoneInput ? phoneInput.value.trim() : '';

    if (!customerName) {
        if (errorDiv) {
            errorDiv.textContent = 'Lütfən ad və soyadınızı daxil edin!';
            errorDiv.style.display = 'block';
        }
        return;
    }

    const countrySelect = document.getElementById('country-code');
    const selectedOption = countrySelect ? countrySelect.options[countrySelect.selectedIndex] : null;
    const requiredLength = selectedOption ? parseInt(selectedOption.getAttribute('data-length')) : 10;

    const phoneRegex = new RegExp(`^\\d{${requiredLength}}$`);
    if (!phoneRegex.test(customerPhone)) {
        if (errorDiv) {
            errorDiv.textContent = `Nömrə dəqiq ${requiredLength} rəqəmdən ibarət olmalıdır!`;
            errorDiv.style.display = 'block';
        }
        return;
    }

    const countryCode = countrySelect ? countrySelect.value : '+994';
    const fullPhoneNumber = countryCode + customerPhone;

    let numericTotal = 0;
    if (typeof cartTotal !== 'undefined' && cartTotal.textContent) {
        numericTotal = parseFloat(cartTotal.textContent.replace(/[^\d.]/g, '')) || 0;
    }

    const orderData = {
        name: customerName,
        phone: fullPhoneNumber,
        items: cart.map(item => ({
            name: item.name,
            price: item.price
        })),
        total: numericTotal
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            cart = [];
            if (nameInput) nameInput.value = '';
            if (phoneInput) phoneInput.value = '';
            updateCart();
            toggleCart();

            const successModal = document.getElementById('success-modal');
            if (successModal) {
                successModal.style.display = 'flex';
            }
        }
    } catch (error) {
        console.error("Xəta:", error);
        if (errorDiv) {
            errorDiv.textContent = 'Serverlə əlaqə qurularkən xəta baş verdi.';
            errorDiv.style.display = 'block';
        }
    }
}

// Ölkə koduna görə telefon nömrəsi limitini tənzimləyən funksiya
function updatePhoneMask() {
    const countrySelect = document.getElementById('country-code');
    const phoneInput = document.getElementById('customer-phone');
    const phoneHint = document.getElementById('phone-hint');
    
    if (!countrySelect || !phoneInput) return;

    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const maxLength = selectedOption.getAttribute('data-length');
    
    phoneInput.setAttribute('maxlength', maxLength);
    phoneInput.value = ''; 
    if (phoneHint) {
        phoneHint.textContent = `Nömrəni kodsuz daxil edin (${maxLength} rəqəm)`;
    }
}

// İlkin işə düşmə
renderProducts();