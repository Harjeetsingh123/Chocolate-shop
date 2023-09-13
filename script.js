document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".chocolate");
    const selectedChocolates = document.getElementById("selected-chocolates");
    const totalPrice = document.getElementById("total-price");

    let selectedItems = [];

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const item = this.value;
            const price = parseFloat(this.getAttribute("data-price"));

            if (this.checked) {
                if (selectedItems.length < 8) {
                    selectedItems.push({ item, price });
                    updateSelectedChocolates();
                } else {
                    this.checked = false;
                    alert("You can select up to 8 chocolates.");
                }
            } else {
                selectedItems = selectedItems.filter((chocolate) => chocolate.item !== item);
                updateSelectedChocolates();
            }
        });
    });

    function updateSelectedChocolates() {
        selectedChocolates.innerHTML = "";
        let total = 0;

        selectedItems.forEach((chocolate) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${chocolate.item} - ₹${chocolate.price}`;
            selectedChocolates.appendChild(listItem);
            total += chocolate.price;
        });

        totalPrice.textContent = `₹${total.toFixed(2)}`;
    }
});
