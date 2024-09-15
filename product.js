const BASE_URL = 'https://fakestoreapi.com';

document.addEventListener('DOMContentLoaded', 
    async () => {
    const productId = localStorage.getItem("productId");
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const productData = await response.json();
    console.log(productData);
    
    const imageContainer = document.getElementById("img-container");
    imageContainer.innerHTML = `<img class="img-fluid" src=${productData.image}>`;

    const title = document.getElementById("product-title");
    title.textContent = productData.title;

    const category = document.getElementById("product-categ");
    category.textContent = productData.category;

    const price = document.getElementById("product-price");
    price.textContent = productData.price;

    const description = document.getElementById("product-description");
    description.textContent = productData.description;

    const reviewsCount = document.getElementById("review-count");
    reviewsCount.textContent = `of ${productData.rating.count} reviews`;


});
