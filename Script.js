let cercle =document.querySelector(".box")
let makey=document.querySelector("h1");
window.addEventListener("mousemove", (e) => {
    cercle.style.top = e.pageY + "px";
    cercle.style.left = e.pageX + "px";
    console.log(e.pageY);
    
})
cercle.addEventListener("click", () => {
    cercle.style.backgroundColor = "yellow";
    
})

//key press
addEventListener("keypress" , (e) => {
   if (e.key==='A'){
    makey.style.backgroundColor="yellow";
    makey.style.padding="10px";
   }else{
    makey.style.backgroundColor="red";
   }
   
});