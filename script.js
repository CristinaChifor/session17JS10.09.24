/**
 * API Documentation: https://fakestoreapi.com/docs
 * baseUrl: https://fakestoreapi.com
 * endpoints: 
 *  /products
 *  /products/{id}
 *  /products/categories
 *  /products/category/{category}
 */

const BASE_URL = 'https://fakestoreapi.com';

const categoryCssClasses = {
    "electronics": "text-bg-info",
    "jewelery": "text-bg-warning",
    "men's clothing": "text-bg-primary",
    "women's clothing": "text-bg-danger"
}

/**
 * product card html:
 * <article class='col-2-md m-2 card cursor-pointer'>
        <img src="${product.image}" alt="Product Image">
        <div class="card-content">
            <div class="title">${product.title}</div>
            <div class="price">$${product.price}</div>
            <span class="badge rounded-pill ${categoryCssClasses[product.category]}">${product.category}</span>
            <div class="description">${product.description}</div>
        </div>`
    </article>
 * 
 */

document.addEventListener('DOMContentLoaded', async () => {
    // your code here
});
