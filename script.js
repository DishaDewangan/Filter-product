const searchInput = document.getElementById('search');
const searchButton = document.querySelector('.search-bar button');
const categoryButtons = document.querySelectorAll('.categories button');
const products = document.querySelectorAll('.product-card');

searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.innerText.toLowerCase().replace(/ & /g, '-');
        products.forEach(product => {
            if (category === 'all products' || product.dataset.category === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
