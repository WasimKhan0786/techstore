// Clock functionality
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const time = now.toLocaleTimeString();
    clock.textContent = time;
}

setInterval(updateClock, 1000);
updateClock();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Enhanced Carousel functionality
const carousel = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
const slideCount = slides.length;
let slideInterval;
const autoSlideDelay = 5000; // 5 seconds

// Create dots
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();
    updateSlides();
    resetAutoSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    goToSlide(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, autoSlideDelay);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Initialize carousel
function initCarousel() {
    createDots();
    startAutoSlide();

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    // Pause auto-rotation on hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
        resetAutoSlide();
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);

// Products data
const products = [
    {
        name: "Premium Headphones",
        price: "₹16,599",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        name: "Smart Watch",
        price: "₹20,749",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
        description: "Latest smartwatch with health tracking features"
    },
    {
        name: "Wireless Earbuds",
        price: "₹10,789",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format",
        description: "True wireless earbuds with premium sound quality"
    },
    {
        name: "Digital Camera",
        price: "₹49,799",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format",
        description: "Professional DSLR camera with 4K video"
    },
    {
        name: "Gaming Laptop",
        price: "₹107,899",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format",
        description: "High-performance gaming laptop with RTX graphics"
    },
    {
        name: "Smart Speaker",
        price: "₹7,469",
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format",
        description: "Voice-controlled smart speaker with premium sound"
    },
    {
        name: "Wireless Keyboard",
        price: "₹6,639",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format",
        description: "Ergonomic wireless keyboard with RGB lighting"
    },
    {
        name: "Gaming Mouse",
        price: "₹4,979",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format",
        description: "Precision gaming mouse with customizable buttons"
    },
    {
        name: "Tablet Pro",
        price: "₹41,499",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format",
        description: "Professional tablet with stylus support"
    },
    {
        name: "Wireless Charger",
        price: "₹3,319",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&auto=format",
        description: "Fast wireless charging pad for all devices"
    },
    {
        name: "Bluetooth Speaker",
        price: "₹12,449",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format",
        description: "Portable waterproof Bluetooth speaker"
    },
    {
        name: "VR Headset",
        price: "₹33,199",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format",
        description: "Immersive virtual reality gaming headset"
    }
];

// Testimonials data
const testimonials = [
    {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format",
        quote: "Amazing products and great service! Will definitely shop here again.",
        rating: 5,
        date: "March 15, 2024",
        product: "Premium Headphones"
    },
    {
        name: "Jane Smith",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format",
        quote: "The quality of the products exceeded my expectations. Highly recommended!",
        rating: 4,
        date: "March 10, 2024",
        product: "Smart Watch"
    },
    {
        name: "Mike Johnson",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format",
        quote: "Fast shipping and excellent customer support. Great experience overall!",
        rating: 5,
        date: "March 5, 2024",
        product: "Gaming Laptop"
    },
    {
        name: "Sarah Wilson",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format",
        quote: "Best tech store I've ever shopped at. Products are top-notch!",
        rating: 5,
        date: "March 1, 2024",
        product: "Wireless Earbuds"
    },
    {
        name: "David Brown",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format",
        quote: "Great prices and amazing product selection. Will be a returning customer!",
        rating: 4,
        date: "February 28, 2024",
        product: "Digital Camera"
    },
    {
        name: "Emily Davis",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format",
        quote: "The customer service is outstanding. They helped me find exactly what I needed.",
        rating: 5,
        date: "February 25, 2024",
        product: "Smart Speaker"
    },
    {
        name: "Alex Chen",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format",
        quote: "The VR headset I purchased is absolutely incredible! The immersive experience is beyond anything I've tried before.",
        rating: 5,
        date: "February 20, 2024",
        product: "VR Headset"
    },
    {
        name: "Sophia Martinez",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format",
        quote: "I'm amazed by the quality of the wireless keyboard. The RGB lighting and ergonomic design make it perfect for both work and gaming.",
        rating: 5,
        date: "February 15, 2024",
        product: "Wireless Keyboard"
    }
];

// Function to create star rating
function createStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Load products
const productsGrid = document.querySelector('.products-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="buy-btn">Buy Now</button>
        </div>
    `;
    productsGrid.appendChild(productCard);
});

// Load testimonials
const testimonialsContainer = document.querySelector('.testimonials-container');
testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');
    testimonialCard.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <div class="testimonial-info">
                <h3>${testimonial.name}</h3>
                <div class="rating">
                    ${createStarRating(testimonial.rating)}
                </div>
                <span class="date">${testimonial.date}</span>
            </div>
        </div>
        <div class="testimonial-content">
            <p class="quote">${testimonial.quote}</p>
            <p class="product">Product: ${testimonial.product}</p>
        </div>
    `;
    testimonialsContainer.appendChild(testimonialCard);
});

// Review Modal Functionality
const modal = document.getElementById('reviewModal');
const addReviewBtn = document.querySelector('.add-review-btn');
const closeModal = document.querySelector('.close-modal');
const reviewForm = document.getElementById('reviewForm');
const starRating = document.querySelector('.star-rating');
let selectedRating = 0;

// Open modal
addReviewBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetForm();
    }
});

// Star rating functionality
starRating.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-star')) {
        selectedRating = parseInt(e.target.dataset.rating);
        updateStars();
    }
});

starRating.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('fa-star')) {
        const rating = parseInt(e.target.dataset.rating);
        highlightStars(rating);
    }
});

starRating.addEventListener('mouseout', () => {
    updateStars();
});

function highlightStars(rating) {
    const stars = starRating.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function updateStars() {
    highlightStars(selectedRating);
}

function resetForm() {
    reviewForm.reset();
    selectedRating = 0;
    updateStars();
}

// Handle form submission
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (selectedRating === 0) {
        alert('Please select a rating');
        return;
    }

    const formData = {
        name: document.getElementById('reviewerName').value,
        email: document.getElementById('reviewerEmail').value,
        product: document.getElementById('productSelect').value,
        rating: selectedRating,
        quote: document.getElementById('reviewText').value,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };

    // Add the new review to the testimonials array
    testimonials.unshift(formData);

    // Create and add the new testimonial card
    const testimonialCard = document.createElement('div');
    testimonialCard.classList.add('testimonial-card');
    testimonialCard.innerHTML = `
        <div class="testimonial-header">
            <img src="https://via.placeholder.com/80x80" alt="${formData.name}">
            <div class="testimonial-info">
                <h3>${formData.name}</h3>
                <div class="rating">
                    ${createStarRating(formData.rating)}
                </div>
                <span class="date">${formData.date}</span>
            </div>
        </div>
        <div class="testimonial-content">
            <p class="quote">${formData.quote}</p>
            <p class="product">Product: ${formData.product}</p>
        </div>
    `;

    // Add the new card at the beginning of the container
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsContainer.insertBefore(testimonialCard, testimonialsContainer.firstChild);

    // Close modal and reset form
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm();

    // Show success message
    alert('Thank you for your review!');
});

// Contact Form Functionality
const contactForm = document.getElementById('contactForm');

// Add success and error message elements
const successMessage = document.createElement('div');
successMessage.className = 'success-message';
successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
contactForm.appendChild(successMessage);

const errorMessage = document.createElement('div');
errorMessage.className = 'error-message';
errorMessage.textContent = 'There was an error sending your message. Please try again.';
contactForm.appendChild(errorMessage);

// Form validation and submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Hide any existing messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Validate form data
    if (!validateForm(formData)) {
        return;
    }

    try {
        // Simulate form submission (replace with actual API call)
        await submitForm(formData);
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    } catch (error) {
        // Show error message
        errorMessage.style.display = 'block';
        
        // Hide error message after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
});

// Form validation function
function validateForm(data) {
    // Name validation
    if (data.name.length < 2) {
        showError('Please enter a valid name');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }

    // Subject validation
    if (data.subject.length < 3) {
        showError('Please enter a valid subject');
        return false;
    }

    // Message validation
    if (data.message.length < 10) {
        showError('Please enter a message with at least 10 characters');
        return false;
    }

    return true;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Hide error message after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Simulate form submission (replace with actual API call)
function submitForm(data) {
    return new Promise((resolve, reject) => {
        // Simulate API call delay
        setTimeout(() => {
            // Simulate successful submission
            resolve();
            
            // For testing error handling, uncomment the following line:
            // reject(new Error('Failed to send message'));
        }, 1000);
    });
}

// Add input validation on blur
const formInputs = contactForm.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        const value = input.value.trim();
        const id = input.id;

        switch (id) {
            case 'name':
                if (value.length < 2) {
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#28a745';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#28a745';
                }
                break;
            case 'subject':
                if (value.length < 3) {
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#28a745';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#28a745';
                }
                break;
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations for features
const featureCards = document.querySelectorAll('.feature-card');
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Parallax effect for hero banner
const heroBanner = document.querySelector('.hero-banner');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroBanner.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Hero Banner Background Rotation
function initHeroBanner() {
    const backgroundSlides = document.querySelectorAll('.background-slide');
    let currentSlide = 0;
    const slideCount = backgroundSlides.length;
    const rotationInterval = 5000; // 5 seconds

    function rotateBackground() {
        backgroundSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideCount;
        backgroundSlides[currentSlide].classList.add('active');
    }

    // Start rotation
    setInterval(rotateBackground, rotationInterval);

    // Pause rotation on hover
    let rotationTimer;

    heroBanner.addEventListener('mouseenter', () => {
        clearInterval(rotationTimer);
    });

    heroBanner.addEventListener('mouseleave', () => {
        rotationTimer = setInterval(rotateBackground, rotationInterval);
    });
}

// Initialize hero banner when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroBanner();
    // ... other initialization code ...
});

// Testimonials Slider
const testimonialsSlider = {
    container: document.querySelector('.testimonials-container'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),
    dotsContainer: document.querySelector('.slider-dots'),
    cards: document.querySelectorAll('.testimonial-card'),
    currentIndex: 0,
    cardsPerView: window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1,
    autoSlideInterval: null,

    init() {
        this.createDots();
        this.setupEventListeners();
        this.startAutoSlide();
        this.updateSlider();
    },

    createDots() {
        this.cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
    },

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.goToSlide(this.currentIndex - 1);
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (this.currentIndex < this.cards.length - this.cardsPerView) {
                this.goToSlide(this.currentIndex + 1);
            }
        });

        // Pause auto-slide on hover
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoSlide();
        });

        this.container.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newCardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
                if (newCardsPerView !== this.cardsPerView) {
                    this.cardsPerView = newCardsPerView;
                    this.currentIndex = 0;
                    this.updateSlider();
                }
            }, 250);
        });
    },

    updateSlider() {
        const cardWidth = this.cards[0].offsetWidth + 20; // Include gap
        this.container.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
        
        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
        
        // Update button states
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.nextBtn.style.opacity = this.currentIndex >= this.cards.length - this.cardsPerView ? '0.5' : '1';
    },

    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.cards.length - this.cardsPerView));
        this.updateSlider();
        this.resetAutoSlide();
    },

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            if (this.currentIndex < this.cards.length - this.cardsPerView) {
                this.goToSlide(this.currentIndex + 1);
            } else {
                this.goToSlide(0);
            }
        }, 5000); // Change slide every 5 seconds
    },

    stopAutoSlide() {
        clearInterval(this.autoSlideInterval);
    },

    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
};

// Initialize testimonials slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    testimonialsSlider.init();
}); 