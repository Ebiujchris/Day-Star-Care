// JavaScript
let cart = [];

function addItem(itemName, price) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity++;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        cartDiv.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - UGX${item.price} x ${item.quantity}</p>
                <p>Total: UGX${itemTotal}</p>
                <button onclick="removeItem('${item.name}')">Remove</button>
            </div>
        `;
    });
    cartDiv.innerHTML += `<p>Total Price: UGX${totalPrice}</p>`;
}

function removeItem(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        updateCart();
    }
}


// JavaScript

// Checkout Functionality
document.getElementById('checkoutBtn').addEventListener('click', function() {
  const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
  if (selectedPaymentMethod === 'mobileMoney') {
      showMobileMoneyPopup();
  } else if (selectedPaymentMethod === 'onlinePayment') {
      // Implement online payment functionality here
  } else if (selectedPaymentMethod === 'cashOnDelivery') {
      // Implement cash on delivery functionality here
  }
});

// Show Mobile Money Popup
function showMobileMoneyPopup() {
  const paymentPopup = document.getElementById('paymentPopup');
  paymentPopup.innerHTML = `
      <h3>Mobile Money Payment</h3>
      <!-- Mobile money payment form fields -->
      <input type="text" placeholder="Mobile Money Number"><br>
      <input type="password" placeholder="PIN"><br>
      <button onclick="processMobileMoneyPayment()">Pay</button>
  `;
  paymentPopup.style.display = 'block';
}

// Process Mobile Money Payment
function processMobileMoneyPayment() {
  // Implement mobile money payment processing here
  alert('Mobile money payment processed successfully');
  document.getElementById('paymentPopup').style.display = 'none';
}
