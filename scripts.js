
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.accordion-title');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            const content = parent.querySelector('.accordion-content');

            parent.classList.toggle('active');

            if (parent.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }

            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(otherItem => {
                if (otherItem !== parent && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.display = 'none';
                }
            });
        });
    });
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
const itemsVisible = 3;

function showSlide(index) {
    if (index > ((items.length ) - itemsVisible)) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - itemsVisible;
    } else {
        currentIndex = index;
    }
    carouselInner.style.transform = `translateX(-${currentIndex * 375}px)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);

