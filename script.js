function addToCart(product) {
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];
    allProducts.push(product);
    localStorage.setItem("products", JSON.stringify(allProducts));
}

const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    if (data) {
        data.products.forEach((product) => {
            const productList = document.querySelector(".produt-list");

            const productCard = document.createElement("div");
            productCard.setAttribute('class', 'product-card');

            const image = document.createElement('img');
            image.setAttribute('src', product.thumbnail);
            image.setAttribute('alt', 'broken image');

            const productDetails = document.createElement('div');
            productDetails.setAttribute('class', 'product-details');

            const p1 = document.createElement('p');
            p1.setAttribute('class', 'product-name');
            p1.innerText = product.title;

            const p2 = document.createElement('p');
            p2.setAttribute('class', 'product-cat');
            p2.innerText = product.category;

            const p3 = document.createElement('p');
            p3.setAttribute('class', 'price');
            p3.innerText = '₹' + product.price;

            const btnCart = document.createElement('button');
            btnCart.setAttribute('class', 'btn-cart');
            btnCart.addEventListener('click', () => {
                addToCart(product);
            });
            btnCart.innerText = 'Add to Cart';

            productDetails.appendChild(p1);
            productDetails.appendChild(p2);
            productDetails.appendChild(p3);

            productCard.appendChild(image);
            productCard.appendChild(productDetails);
            productCard.appendChild(btnCart);

            productList.appendChild(productCard);
        });
    }
};

fetchProducts();