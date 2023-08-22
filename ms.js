document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem("sPro","")

    const productCards = document.querySelectorAll('.product-card');
    const cartCountElement = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.fa-shopping-cart'); // Define cartIcon here


    let cartCount = 0;
    

    productCards.forEach(productCard => {
        const quantityValue = productCard.querySelector('.quantity-value');
        const decreaseBtn = productCard.querySelector('.decrease-btn');
        const increaseBtn = productCard.querySelector('.increase-btn');
        const addToCartBtn = productCard.querySelector('.btn-primary');

        let currentQuantity = 1;
           

        decreaseBtn.addEventListener('click', () => {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityValue.textContent = currentQuantity;
            }
        });

        increaseBtn.addEventListener('click', () => {
            currentQuantity++;
            quantityValue.textContent = currentQuantity;
        });


       addToCartBtn.addEventListener('click', () => {
            cartCount += currentQuantity;
            cartCountElement.textContent = cartCount;
/*
            // Add selected product to the array
            var e = {
              //  "name": productCard.querySelector('h5').textContent,
                "quantity": currentQuantity,
              // "price": parseFloat(productCard.querySelector('.price'))
            }
            selectedProducts.push(e);
            console.log(localStorage.getItem("selectedProducts"))
            console.log(currentQuantity) */


        }); 

    }); 
    /*
    cartIcon.addEventListener('click', () => {
        // Save the selected products to localStorage for use on the cart page
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
        window.location.href = 'panier.html'; // Redirect to the cart page
    }); */



});

function addtoArr(name){
    let el=document.querySelector(`#${name} span `);
    
    if (!(localStorage.getItem("sPro")))
    {
        localStorage.setItem("sPro","")
    }
    
  let updated=  localStorage.getItem("sPro");
  for (let i=0; i<el.innerHTML; i++){

  
    updated +="/"+ name;}

    localStorage.setItem("sPro",updated);
    console.log(updated)
   
}
const Q=document.getElementsByClassName(quantity);



