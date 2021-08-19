const btn = document.querySelector("#btn");
const message = document.querySelector(".message");

btn.addEventListener("click", () => {
    let p = document.createElement("p");
    p.innerHTML = "SOLOMON AKINLADE";
    message.appendChild(p);

    setTimeout(() =>{
        $('.message').show();
    }, 3000);
})