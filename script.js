function calculate() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value); // Parse as float

    const paymentMethod = document.getElementById("paymentMethod").value;
    let result = 0;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount (greater than 0).");
        amountInput.focus(); // Set focus back to the input field
        return;
    }

    let processingFee = 0;

    switch (paymentMethod) {
        case "visa":
        case "mastercard":
        case "discover":
            processingFee = amount * 0.029 + 0.6;
            break;
        case "amex":
            processingFee = amount * 0.034 + 0.6;
            break;
        case "ach":
            processingFee = amount * 0.01;
            break;
    }

    result = amount + processingFee; // Calculate total with fee

    document.getElementById("result").textContent = "Result: $" + result.toFixed(2);
}