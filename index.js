const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
 navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if(visiblity === "false"){
        nav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expanded",true);
    } // if the nav is open, close it
     else {
        nav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expanded",false);
    } 
})

const print2 = document.querySelector(".pilot");
print2.addEventListener("click", () => {
    
    document.querySelector("h2").innerHTML = "The Pilot";

    document.querySelector(".name").innerHTML = "Victor Glover";

    document.querySelector(".about").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "

    document.querySelector(".image").src = "assets/crew/image-victor-glover.png"

    print2.setAttribute("aria-selected", true);
    print3.setAttribute("aria-selected", false);
    print4.setAttribute("aria-selected", false);
})


const print3 = document.querySelector(".engineer");
print3.addEventListener("click", () => {
    
    document.querySelector("h2").innerHTML = " Flight Engineer";

    document.querySelector(".name").innerHTML = "Anousheh Ansari";

    document.querySelector(".about").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "

    document.querySelector(".image").src = "assets/crew/image-anousheh-ansari.png"

    document.querySelector(".engineer").setAttribute("aria-selected",true);

    print3.setAttribute("aria-selected", true);
    print2.setAttribute("aria-selected", false);
    print4.setAttribute("aria-selected", false);
})


const print4 = document.querySelector(".commander");
print4.addEventListener("click", () => {
    
    document.querySelector("h2").innerHTML = " Commander";

    document.querySelector(".name").innerHTML = "Douglas Hurley ";

    document.querySelector(".about").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."

    document.querySelector(".image").src = "assets/crew/image-douglas-hurley.png"

    print4.setAttribute("aria-selected", true);
    print2.setAttribute("aria-selected", false);
    print3.setAttribute("aria-selected", false);
})


