"use strict";

const ratings = document.querySelectorAll(".rating");
const selectedRating = document.getElementById("selected-rating")
const initialForm = document.getElementById("initial-form")
const ThxForm = document.getElementById("thx-form")
let ratingRes;


ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
   
      ratings.forEach((r) => r.classList.remove("active"));

      rating.classList.toggle("active");
      ratingRes = rating.textContent
    
  });
});

function goToNext() {
    if (ratingRes == undefined) {
        alert("Select the rating , please!")
        return;
    } 
    initialForm.style.left = "-450px"
    ThxForm.style.left = "30px"
    selectedRating.textContent = `${ratingRes}`
}

