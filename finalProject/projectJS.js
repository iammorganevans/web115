function makeMealPlan() {
    var mealPlanPage = "yourMealPlan.html";
    window.open(mealPlanPage, "_blank");
}

const submit = document.getElementById("submit");
submit.addEventListener("click", makeMealPlan);

function emailValidation(email) {
   let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

