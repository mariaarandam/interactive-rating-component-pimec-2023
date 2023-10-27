let score = document.querySelector("#ratings-range")
score.addEventListener('click', function (event){
    document.querySelector("#buttonSubmit").disabled = false;

let submit = document.querySelector("#buttonSubmit");

submit.addEventListener('click', function (event){
console.log(event.target.id);
})



})