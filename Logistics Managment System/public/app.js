document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const customerName = document.getElementById('customerName').value;
    const customerCity = document.getElementById('customerCity').value;

    
    fetch('/api/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemName: itemName,
            itemPrice: itemPrice,
            customerName: customerName,
            customerCity: customerCity,
        }),
    })
    .then(response => {
        if (response.status === 201) {
            
            alert('Order placed successfully!');
        } else {
            
            alert('Failed to place the order. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
