
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
        this.displayCart();
    }

    addItem(item) {
        this.items.push(item);
        this.saveCart();
        this.updateCartCount();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveCart();
        this.updateCartCount();
        this.displayCart();
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            cartCount.textContent = this.items.length;
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    displayCart() {
        const cartItems = document.getElementById('cart-items');
        const totalAmount = document.getElementById('total-amount');
        
        if (cartItems) {
            cartItems.innerHTML = '';
            this.items.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <span>${item.name}</span>
                    <span>$${item.price}</span>
                    <button class="remove-item" onclick="cart.removeItem(${index})">Remove</button>
                `;
                cartItems.appendChild(itemElement);
            });
            
            if (totalAmount) {
                totalAmount.textContent = this.calculateTotal().toFixed(2);
            }
        }
    }
}

const cart = new Cart();
