
let visitCount = 5;
function submitDetails() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let bill = document.getElementById('bill').value;
    if (phone.length !== 10) {
        document.getElementById('error-message').style.display = 'block';
        return;
    }
    if (bill.length >= 100) {
        document.getElementById('bill-message').style.display = 'block';
        return;
    }
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('scratch-section').classList.remove('hidden');
    if(visitCount%5===0){
        document.getElementById('Spin').style.color= 'blue';
        document.getElementsById('Spinfunction').classList.remove('hidden');

    }
}
function revealDiscount() {
    let name = document.getElementById('name').value;
    let bill = parseFloat(document.getElementById('bill').value);
    let discountPercentage = Math.random() > 0.5 ? 10 : 5;
    let discountAmount = (bill * discountPercentage) / 100;
    let finalAmount = bill - discountAmount;
    document.getElementById('discount-message').innerText = `Congratulations ${name}! You got ${discountPercentage}% Discount!`;
    document.getElementById('discount-message').classList.remove('hidden');
    document.getElementById('final-bill').innerText = `Original Amount: ₹${bill.toFixed(2)} | Final Amount to Pay: ₹${finalAmount.toFixed(2)}`;
    document.getElementById('final-bill').classList.remove('hidden');
    document.getElementById('visit-again-message').innerText = `Thank you for shopping with us, ${name}! Visit again! - Ramulu Kirana Store`;
    document.getElementById('visit-again-message').classList.remove('hidden');
    document.getElementById('spin-section').classList.remove('hidden');
}
function spinWheel() {
    if (visitCount%5 ===0) {
        alert("No more spins left!");
        return;
    }
    visitCount++;
    document.getElementById('visit-count').innerText = visitCount;
    let rewards = [
        "50% Discount on Your Cart",
        "20% Discount on Your Cart",
        "Extra Scratch Card",
        "2+2% Discount on Your Present Cart Value",
        "Better Luck Next Time"
    ];
    let reward = rewards[Math.floor(Math.random() * rewards.length)];
    document.getElementById('spin-message').innerText = `You won: ${reward}`;
    document.getElementById('spin-message').classList.remove('hidden');
}

