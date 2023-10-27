let score = document.querySelector("#ratings-range")

score.addEventListener('click', function (event) {
    document.querySelector("#buttonSubmit").disabled = false;

    let submit = document.querySelector("#buttonSubmit");
  
    let result = Number(event.target.textContent);
    document.querySelector("#selected-rating").textContent = result

    submit.addEventListener('click', function (event) {
        document.querySelector("#backside-component").style.display= "block";
        document.querySelector("#frontside-component").style.display = "none";
        
    })
})

