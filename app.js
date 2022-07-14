

const chart1 = document.querySelectorAll(".best")
// mouseover
chart1.forEach((cart)=>{
cart.addEventListener("mouseenter",(e)=>{

let turget = e.currentTarget.querySelector(".textbox");
turget.style.visibility='visible'

value(turget)

});

cart.addEventListener("mouseleave",(e)=>{

    let turget = e.currentTarget.querySelector(".textbox");
    turget.style.visibility='hidden'
    value(turget)

    });
});


// get data

const value = (e)=>{
    const url='data.json';
fetch(url)
.then(res=>res.json())
.then(data=>{
    // console.log(data);
    const allVal = document.querySelectorAll('.price')
       
   let priceTag = e.querySelector("h1")
   let priceTagId = priceTag.dataset.id;
       priceTag.textContent=`$${data[priceTagId].amount}`
       
    

})

}
