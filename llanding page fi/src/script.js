let lastScroll = 0

const navBar = document.getElementById("navBar")

window.addEventListener("scroll", () =>{

    let currentScroll = window.pageYOffset;

    if (currentScroll>lastScroll){
        navBar.classList.add("nav-hidden");
    }else{
        navBar.classList.remove("nav-hidden");
    }

    lastScroll = currentScroll;
})


