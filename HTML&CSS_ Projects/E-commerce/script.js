var sidenavbar=document.querySelector(".side-navbar")

function showNavbar()
{
sidenavbar.style.left="0"

}

function closeNavbar()
{
sidenavbar.style.left="-60%"

}

 function addcart(name, image,price) {
    const newItem = { name, image,price };
     // Get existing items or start with an empty array
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    
     // Add the new item to the array
    existingCart.push(newItem);

    // Save updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    // Redirect to cart
    window.location.href = 'cart.html';
  }
   

