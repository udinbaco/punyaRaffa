

// responn



var st = false;
const navSlide = () => {
    const burger = document.querySelector(".berger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-berger");
        st = true;
    });

    const body = document.querySelector(".logo");

    body.addEventListener("click", () => {
        console.log("jalan");
        console.log(st);
        if (st == true) {
            navLists.classList.remove("nav-active");
            st = false;
        }
    });
};

navSlide();

// quest

window.onbeforeunload = () => {
    for (const form of document.getElementByTagName("form")){
        form.reset();
    }
}

// sticky

