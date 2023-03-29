
const button1 = document.querySelector(".moon");
button1.addEventListener("click", () => {
    //here, for changing Title of planet
    document.querySelector("h2").innerHTML = "Moon";

    // for changing the paragraph
    document.querySelector(".info-para").innerHTML = " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. "

    //for changing the below content-distance
    document.querySelector(".distance").innerHTML = "384,400 km ";

    //for changing the below content-time
    document.querySelector(".time").innerHTML = " 3 days ";

    //for changing the image
    document.querySelector(".destination-planet-image").src = "assets/destination/image-moon.png";

    button1.setAttribute("aria-selected",true);
    button.setAttribute("aria-selected",false);
    button2.setAttribute("aria-selected",false);
    button3.setAttribute("aria-selected",false);
})


const button = document.querySelector(".mars");
button.addEventListener("click", () => {
    //here, for changing Title of planet
    document.querySelector("h2").innerHTML = "Mars";

    // for changing the paragraph
    document.querySelector(".info-para").innerHTML = " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! "

    //for changing the below content-distance
    document.querySelector(".distance").innerHTML = "225 mil. km";

    //for changing the below content-time
    document.querySelector(".time").innerHTML = " 9 months";

    //for changing the image
    document.querySelector(".destination-planet-image").src = "assets/destination/image-mars.png";

    // for changing active status
    button.setAttribute("aria-selected",true);
    button1.setAttribute("aria-selected",false);
    button2.setAttribute("aria-selected",false);
    button3.setAttribute("aria-selected",false);

})



const button2 = document.querySelector(".europa");
button2.addEventListener("click", () => {
    //here, for changing Title of planet
    document.querySelector("h2").innerHTML = "Europa";

    // for changing the paragraph
    document.querySelector(".info-para").innerHTML = " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin. "

    //for changing the below content-distance
    document.querySelector(".distance").innerHTML = "628 mil. km";

    //for changing the below content-time
    document.querySelector(".time").innerHTML = " 3 years ";

    //for changing the image
    document.querySelector(".destination-planet-image").src = "assets/destination/image-europa.png";

    button2.setAttribute("aria-selected",true);
    button1.setAttribute("aria-selected",false);
    button.setAttribute("aria-selected",false);
    button3.setAttribute("aria-selected",false);

})

const button3 = document.querySelector(".titan");
button3.addEventListener("click", () => {
    //here, for changing Title of planet
    document.querySelector("h2").innerHTML = "Titan";

    // for changing the paragraph
    document.querySelector(".info-para").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."

    //for changing the below content-distance
    document.querySelector(".distance").innerHTML = " 1.6 bil. km";

    //for changing the below content-time
    document.querySelector(".time").innerHTML = " 7 years  ";

    //for changing the image
    document.querySelector(".destination-planet-image").src = "assets/destination/image-titan.png";


    button3.setAttribute("aria-selected",true);
    button.setAttribute("aria-selected",false);
    button1.setAttribute("aria-selected",false);
    button2.setAttribute("aria-selected",false);

})
