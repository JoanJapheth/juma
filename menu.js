document.addEventListener("DOMContentLoaded", function () {
    // Sample product data (you can fetch this from your backend)
    const products = [
      { name: "Product 1", price: 20.00 },
      { name: "Product 2", price: 25.00 },
      // Add more products as needed
    ];
  
    const productsContainer = document.getElementById("products");
    const cartContainer = document.getElementById("cart-items");
  
    // Display products on the page
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  
    // Function to add items to the cart
    window.addToCart = function (productName, productPrice) {
      const cartItem = document.createElement("li");
      cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
      cartContainer.appendChild(cartItem);
    };
  });
  