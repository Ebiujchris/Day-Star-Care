// calculateTotalPrice.js

// calculateTotalPriceAJAX.js

// Fetch items data from server
fetch('/api/items')
  .then(response => response.json())
  .then(items => {
    // Calculate total price
    const totalPrice = items.reduce((acc, item) => acc + (item.price || 0), 0);
    
    // Log total price to console
    console.log('Total Price:', totalPrice);
    
    // Log individual item prices to console
    items.forEach(item => console.log('Item Price:', item.price));
    
    // Populate items table with fetched data
    const itemsBody = document.getElementById('items-body');
    items.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.itemType}</td>
        <td>${item.itemName}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.purchaseDate}</td>
      `;
      itemsBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching items:', error));
