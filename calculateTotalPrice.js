function calculateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('#orders-container .order .order-header .order-header-info:nth-child(4) b').forEach(function(item) {
        let price = item.innerText.replace('.', '').replace(',', '.').replace(' TL', '');
        totalPrice += Math.round(parseFloat(price));
    });

    return totalPrice; 
}
