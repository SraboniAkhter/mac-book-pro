function getMemory (addMemory) {
  const memory = document.getElementById('extra-memory-cost');
  if (addMemory == true) {
    memory.innerText= 0;
  }
  else {
    memory.innerText= 180;
  }
  getTotal();
}
function getStorage (addStorage) {
    const storage = document.getElementById('extra-storage-cost');
    if (addStorage == '256GB') {
      storage.innerText= 0;
    }
    else if (addStorage == '512GB'){
        storage.innerText= 100;
    }
    else {
      storage.innerText= 180;
    }
    getTotal();
  }
function getDelivery (addDelivery) {
    const delivery = document.getElementById('delivery-charge');
    if (addDelivery == true) {
      delivery.innerText= 0;
    }
    else {
      delivery.innerText= 20;
    }
    getTotal();
  }

// total-price

function getTotal () {
    const bestPrice = document.getElementById('best-price').innerText; 
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const storagePrice = document.getElementById('extra-storage-cost').innerText;
    const delivery = document.getElementById('delivery-charge').innerText;

    const total =  parseInt(bestPrice) + parseInt(memoryPrice) + parseInt(storagePrice) + parseInt(delivery);

    let totalPrice = document.getElementById('total-price')
    totalPrice.innerText = total;
  
    const discountPrice = document.getElementById('discountPrice');
    discountPrice.innerText = totalPrice.innerText;
}

// add promo code
document.getElementById('apply-button').addEventListener("click", function() {
    const promoCodeInput = document.getElementById('promo-code')
    const applyPromo = promoCodeInput.value;
    const discountPrice = document.getElementById('discountPrice');
    const subTotal = document.getElementById('total-price');
    const subTotalPrice = parseInt(subTotal.innerText);
    if (applyPromo == "stevekaku") {

        let discount = ( subTotalPrice/100)*20;
        let totalDiscount = subTotalPrice - discount;
        discountPrice.innerText = totalDiscount;
        const disableButton = document.getElementById('discountPrice');
        disableButton.disabled = true;
        promoCodeInput.value = '';
    }
    
});


// shipping cost 
document.getElementById('delivery-button1').addEventListener("click", function() {
    getDelivery(true)
});
document.getElementById('delivery-button2').addEventListener("click", function() {
    getDelivery(false)
});



// storage
document.getElementById('storage-button1').addEventListener("click", function() {
    getStorage('256GB')
});
document.getElementById('storage-button2').addEventListener("click", function() {
    getStorage('512GB')
});
document.getElementById('storage-button3').addEventListener("click", function() {
    getStorage(false);
});



// memory 
document.getElementById('memory-button1').addEventListener("click", function() {
    getMemory(true);
});
document.getElementById('memory-button2').addEventListener("click", function() {
    getMemory(false);
    });