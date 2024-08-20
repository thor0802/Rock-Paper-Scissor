let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceid = choice.getAttribute("id");
    console.log(choiceid);
    console.log("Choice was Clicked");
  });
});
