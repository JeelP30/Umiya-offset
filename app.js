/* ============================================
   UMIYA OFFSET — Application Logic
   ============================================ */

// ============ PRODUCT DATA ============
const PRODUCTS = [
    // ---- Pouches ----
    {
        id: 1,
        title: "3 Side Seal — Seed Pouch",
        category: "pouch",
        description: "Multi-color 3 side seal pouch for agriculture seed packaging with laminated finish.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=500&fit=crop",
        tag: "Best Seller"
    },
    {
        id: 2,
        title: "Center Seal — Vegetable Seeds",
        category: "pouch",
        description: "Back-sealed center seal pouch with vibrant printing for vegetable seeds.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 3,
        title: "Standy Pouch — Fertilizer",
        category: "pouch",
        description: "Stand-up pouch with bottom gusset for fertilizer packaging, multi-layer construction.",
        image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=500&h=500&fit=crop",
        tag: "Popular"
    },
    {
        id: 4,
        title: "Standy Zipper — Spice Pouch",
        category: "pouch",
        description: "Resealable standing zipper pouch for spices with aroma-lock barrier.",
        image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 5,
        title: "Window Pouch — Dry Fruits",
        category: "pouch",
        description: "Transparent window pouch for dry fruits — see the product through the pack.",
        image: "https://images.unsplash.com/photo-1586075010882-3a0c26fbb164?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 6,
        title: "Gusset Pouch — Tea Packaging",
        category: "pouch",
        description: "Side-gusset pouch for tea with premium foil barrier and custom design.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 7,
        title: "Namkeen Pouch",
        category: "pouch",
        description: "Printed namkeen & snack packaging pouch with nitrogen-flush capability.",
        image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 8,
        title: "Rice Pouch — 5KG",
        category: "pouch",
        description: "Heavy-duty rice packaging pouch with tear-notch and carry handle.",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop",
        tag: null
    },
    // ---- Bags ----
    {
        id: 9,
        title: "Non-Woven Shopping Bag",
        category: "bag",
        description: "Custom printed non-woven carry bag for retail and promotional use.",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
        tag: "Eco-Friendly"
    },
    {
        id: 10,
        title: "BOPP Laminated Bag",
        category: "bag",
        description: "BOPP laminated woven bag with glossy finish for rice, fertilizer, and bulk products.",
        image: "https://images.unsplash.com/photo-1607166452427-7e4477c2b58b?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 11,
        title: "Paper Bag — Premium",
        category: "bag",
        description: "Premium paper bag with handles and full-color branding.",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 12,
        title: "Fertilizer Outer Bag",
        category: "bag",
        description: "Heavy-duty outer bag for fertilizer with UV-resistant print.",
        image: "https://images.unsplash.com/photo-1530541836425-0c609b27c68e?w=500&h=500&fit=crop",
        tag: null
    },
    // ---- Banners & Signage ----
    {
        id: 13,
        title: "Flex Banner — Large Format",
        category: "banner",
        description: "High-resolution flex banner for trade shows, events, and outdoor advertising.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=500&fit=crop",
        tag: null
    },
    {
        id: 14,
        title: "Sunpack Sheet & Poster",
        category: "banner",
        description: "Sunpack sheet and poster printing for indoor promotions and displays.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=500&fit=crop",
        tag: null
    },
    // ---- Labels & Stickers ----
    {
        id: 15,
        title: "Holography Sticker",
        category: "label",
        description: "Holographic security stickers with custom branding and serial numbers.",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
        tag: "Security"
    },
    {
        id: 16,
        title: "Product Labels — Roll",
        category: "label",
        description: "Self-adhesive roll labels with high-quality offset printing for products.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=500&fit=crop",
        tag: null
    }
];

// ============ DOM REFERENCES ============
const productsGrid = document.getElementById('productsGrid');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');

let currentLightboxIndex = 0;
let filteredProducts = [...PRODUCTS];

// ============ PRODUCT RENDERING ============

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.category = product.category;
    card.innerHTML = `
        ${product.tag ? `<span class="product-card-tag">${product.tag}</span>` : ''}
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <div class="product-card-overlay">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        const idx = filteredProducts.findIndex(p => p.id === product.id);
        openLightbox(idx >= 0 ? idx : 0);
    });
    return card;
}

function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    filteredProducts = filter === 'all'
        ? [...PRODUCTS]
        : PRODUCTS.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });

    observeElements();
}

// ============ LIGHTBOX ============

function openLightbox(index) {
    currentLightboxIndex = index;
    const product = filteredProducts[index];
    if (!product) return;
    lightboxImg.src = product.image;
    lightboxImg.alt = product.title;
    lightboxTitle.textContent = product.title;
    lightboxDesc.textContent = product.description;
    lightbox.classList.add('active');
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = filteredProducts.length - 1;
    if (currentLightboxIndex >= filteredProducts.length) currentLightboxIndex = 0;
    const product = filteredProducts[currentLightboxIndex];
    lightboxImg.src = product.image;
    lightboxImg.alt = product.title;
    lightboxTitle.textContent = product.title;
    lightboxDesc.textContent = product.description;
}

// ============ TOAST ============

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ============ SCROLL REVEAL ============

function observeElements() {
    const reveals = document.querySelectorAll('.reveal:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => observer.observe(el));
}

// ============ ACTIVE NAV ============

function updateActiveNav() {
    const sections = ['hero', 'services', 'pouches', 'bags', 'industries', 'products', 'about', 'contact'];
    const scrollPos = window.scrollY + 150;
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (!link) return;
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}

// ============ EVENT LISTENERS ============

// Navbar scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    updateActiveNav();
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Product filters
document.querySelectorAll('#productsFilter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#productsFilter .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});

// Lightbox
lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }
});

// Quote form
document.getElementById('quoteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('qName').value;
    showToast(`Thank you ${name}! We'll send your quote within 24 hours. 📨`);
    e.target.reset();
});

// File upload visual
const fileUpload = document.getElementById('fileUpload');
const fileInput = document.getElementById('qFile');
fileInput.addEventListener('change', () => {
    const files = fileInput.files;
    const label = fileUpload.querySelector('.file-upload-label');
    if (files.length > 0) {
        const names = Array.from(files).map(f => f.name).join(', ');
        label.innerHTML = `
            <span class="file-upload-icon">✅</span>
            <span><strong>${files.length} file(s) selected</strong></span>
            <span class="file-upload-hint">${names}</span>
        `;
    }
});
fileUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUpload.style.borderColor = '#e85d26';
    fileUpload.style.background = 'rgba(232, 93, 38, 0.08)';
});
fileUpload.addEventListener('dragleave', () => {
    fileUpload.style.borderColor = '';
    fileUpload.style.background = '';
});
fileUpload.addEventListener('drop', (e) => {
    fileUpload.style.borderColor = '';
    fileUpload.style.background = '';
});

// Counter animation
function animateCounters() {
    const stats = document.querySelectorAll('.about-stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const text = el.textContent;
                const numMatch = text.match(/[\d]+/);
                if (numMatch) {
                    const target = parseInt(numMatch[0]);
                    const suffix = text.replace(numMatch[0], '');
                    let current = 0;
                    const increment = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current + suffix;
                    }, 30);
                }
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(stat => observer.observe(stat));
}

// ============ INIT ============
function init() {
    renderProducts();
    observeElements();
    animateCounters();
}
init();
