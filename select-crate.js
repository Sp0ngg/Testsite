
function selectCrate(crateName) {
    const subscription = JSON.parse(localStorage.getItem('selectedSubscription'));
    const item = {
        name: `${subscription.name} - ${crateName}`,
        price: subscription.price
    };
    cart.addItem(item);
    window.location.href = 'cart.html';
}
