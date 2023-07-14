function makeMealPlan() {
    var mealPlanPage = "yourMealPlan.html";
    window.open(mealPlanPage, "_blank");
}

const submit = document.getElementById("submit")
submit.addEventListener("click", makeMealPlan);
