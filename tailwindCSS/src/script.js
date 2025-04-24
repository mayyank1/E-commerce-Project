let cart = 0;

// hero section info
document.getElementById("shop").addEventListener("click", function(){
    cart++;
    document.getElementById("cartCount").textContent = cart;
    console.log("Shop clicked");
});


// product card info
const nodelist = document.querySelectorAll("section > div > div > button");
let nodelist1 = document.querySelectorAll("section >div>div>p");

for(let i=0;i<nodelist.length;i++){
        nodelist[i].addEventListener("click" , function(){
        cart++;
        document.getElementById("cartCount").textContent = cart;
        console.log(nodelist1[i*2].textContent);
    });
}

// search bar
document.getElementById("searchBar").addEventListener("input" , function(){
    value = this.value.toLowerCase();
    let product = document.querySelectorAll("section > div > div");

    product.forEach(function(card){
        productName = card.querySelector("p").textContent.toLowerCase();
        if(productName.includes(value)){
            card.style.display = "flex";
            console.log("Matched", productName);
        }
        else{
            card.style.display = "none";
            console.log("Not-Matched" , productName);
        }
    });
});

// Cart dom manupulation
// document.getElementById("cartCount").textContent = cart;