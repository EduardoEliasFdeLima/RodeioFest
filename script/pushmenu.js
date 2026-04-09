let menumob = document.querySelector(".fa-bars");
let mnmob = document.getElementById("menu-text");

menumob.addEventListener("click", () => {
    
    if (menumob.classList.contains("fa-bars")) {
        menumob.classList.remove("fa-bars");
        menumob.classList.add("fa-x");
        mnmob.style.right = "0%";
          mnmob.style.top = "0%";
        menumob.classList.add("fixado");
    } else {
        menumob.classList.remove("fixado");
        menumob.classList.remove("fa-x");
        menumob.classList.add("fa-bars");
        mnmob.style.top = "-100%";
      
    }

});


let topicmenu = document.querySelectorAll(".menu-topic");

topicmenu.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("oi");

        if (menumob.classList.contains("fa-x")) {
            menumob.classList.remove("fa-x");
            menumob.classList.add("fa-bars");
            mnmob.style.top = "-100%";
            menumob.classList.remove("fixado");
        }
    });
});