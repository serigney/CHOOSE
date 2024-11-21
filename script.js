// html button elements
let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');


// html content elements
let text = document.querySelector('.text');


// html images elements
let start = document.querySelector('.startZombie');
let car = document.querySelector('.car');
    
    
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
    let done2 = document.querySelector('.done2');
    done2.style.display ="none";

headButton.addEventListener('click', function() {
text.innerHTML = "You were able to find tools and clothing to help you throughtout your journey, now do you take a risk and head towards an abandoned vehicle (Hover your mouse over car), or  Go the only safe route (double click) and risk encountering more zombies. ";
console.log("works");
start.style.display = "none";
choiceAimage.style.display ="block";
exploreButton.style.display="none";
headButton.style.display="none";
car.innerHTML = "&#128663";
});

choiceAimage.addEventListener('dblclick', function(){
    choiceAimage.style.display ="none";
    car.style.display = "none";
    text.innerHTML = "You went the safe route and you were able to escape the area but you are now in an endless loop of running from zombies until you eventually die."
    choiceA1image.style.display ="block";
    vehicle.style.display ="none";
});


car.addEventListener("mouseenter", function(){
    car.style.display = "none";
    choiceAimage.style.display ="none";
    text.innerHTML = "The vehicle had gas and you were able to get inside and drive off to and area where zombies are a myth"
    choiceA2image.style.display ="block";
    vehicle.style.display ="none";
});




exploreButton.addEventListener("click", function(){
  car.style.display = "none";
    text.innerHTML = "You’re able to fight off the zombies effectively but the weather is taking a toll on your body. Do you find shelter or have a last stand with the zombies(Double click the image to have a last stand) or hover than leave the image to find shelter. ";
    start.style.display = "none";
    fighting.style.display = "block";
    exploreButton.style.display="none";
    headButton.style.display="none";
    done2.style.display ="block";
   
});


fighting.addEventListener("dblclick", function(){
    car.style.display = "none";
 text.innerHTML = "Your dead, at least it was a cool death ";
   fighting.style.display = "none";
   done.style.display = "block";
   

});

done2.addEventListener("mouseleave", function(){
    car.style.display = "none";
    text.innerHTML = "The weather kills you ";
    fighting.style.display = "none";
    done2.style.display = "block";
   

});


   
    


