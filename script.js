let change1 = document.querySelector("data-dom-change1");
let change2 = document.querySelector("data-dom-change2");
let h3 = document.querySelector("h3");
let body = document.querySelector("data-dom gradient");
 body.style.background = "red";
console.log(body)
color1.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
})

//  color2.addEventListener("input", function(){
//     console.log(color2.value);
// });

// color3.addEventListener("input", function(){
//     console.log(color3.value);
// })