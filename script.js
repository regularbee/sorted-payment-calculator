function calculate() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);

    const paymentMethod = document.getElementById("paymentMethod").value;
    let processingFee = 0;
    let feeDescription = ""; // Store the description of the fee calculation

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount (greater than 0).");
        amountInput.focus();
        return;
    }

    switch (paymentMethod) {
        case "visa":
        case "mastercard":
        case "discover":
            processingFee = amount * 0.029 + 0.6;
            feeDescription = `Processing Fee (2.9% + $0.60): $${(amount * 0.029).toFixed(2)} + $0.60 = $${processingFee.toFixed(2)}`;
            break;
        case "amex":
            processingFee = amount * 0.034 + 0.6;
            feeDescription = `Processing Fee (3.4% + $0.60): $${(amount * 0.034).toFixed(2)} + $0.60 = $${processingFee.toFixed(2)}`;
            break;
        case "ach":
            processingFee = amount * 0.01;
            feeDescription = `Processing Fee (1%): $${(amount * 0.01).toFixed(2)}`;
            break;
    }

    const total = amount + processingFee;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    // Create and append result lines
    const amountLine = document.createElement("div");
    amountLine.textContent = `Amount: $${amount.toFixed(2)}`;
    resultDiv.appendChild(amountLine);

    const feeLine = document.createElement("div");
    feeLine.textContent = feeDescription;
    resultDiv.appendChild(feeLine);

    const totalLine = document.createElement("div");
    totalLine.textContent = `Total: $${total.toFixed(2)}`;
    resultDiv.appendChild(totalLine);

}