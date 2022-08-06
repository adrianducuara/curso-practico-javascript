const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const cartDetails = document.querySelector('.cart-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleCardDetail);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isCartDetailClosed = cartDetails.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isCartDetailClosed) {
        cartDetails.classList.add('inactive');
    }
    if(!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isCartDetailClosed = cartDetails.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isCartDetailClosed) {
        cartDetails.classList.add('inactive');
    }
    if(!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCardDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isproductDetailClosed = productDetail.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if(!isproductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    cartDetails.classList.toggle('inactive');
}
function openProductDetails() {
    productDetail.classList.remove('inactive');
    const isCartDetailClosed = cartDetails.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isCartDetailClosed) {
        cartDetails.classList.add('inactive');
    }
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if(!isMenuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

}
function closeProductDetail() {
    productDetail.classList.add('inactive');
}
const productList = [];
productList.push({
    name: 'Bike',
    price: 200.000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 800000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 2500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 2500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 2500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 2500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Computador',
    price: 2500000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function rederProducts(array) {
    for(product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetails);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('p');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../assets/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

rederProducts(productList);