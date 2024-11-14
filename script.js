// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let text = document.querySelector('.text');


// html images elements
let start = document.querySelector('.startZombie');

    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let vehicle = document.querySelector('.vehicle');
    vehicle.style.display ="none";
    let fighting = document.querySelector('.fighting');
    fighting.style.display ="none";
    let done = document.querySelector('.done');
    done.style.display ="none";

headButton.addEventListener('click', function() {
text.innerHTML = "You were able to find tools and clothing to help you throughtout your journey, now do you take a risk and head towards an abandoned vehicle, or  Go the only safe route and risk encountering more zombies. ";
start.style.display = "none";
vehicle.style.display ="block";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "You went the safe route and you were able to escape the area but you are now in an endless loop of running from zombies until you eventually die."
    choiceA1image.style.display ="block";
    vehicle.style.display ="none";
});


vehicle.addEventListener("mouseenter", function(){
    choiceAimage.style.display ="none";
    text.innerHTML = "The vehicle had gas and you were able to get inside and drive off to and area where zombies are a myth"
    choiceA2image.style.display ="block";
    vehicle.style.display ="none";
});




exploreButton.addEventListener("click", function(){
    text.innerHTML = "You’re able to fight off the zombies effectively but the weather is taking a toll on your body. Do you find shelter or have a last stand with the zombies ";
    start.style.display = "none";
    fighting.style.display = "block";
    exploreButton.style.display="none";
    headButton.style.display="none";
   
});


fighting.addEventListener("dblclick", function(){
 text.innerHTML = "Your dead, at least it was a cool death ";
   fighting.style.display = "none";
   done.style.display = "block";

});

   
    


