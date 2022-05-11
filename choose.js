const choice = Array.from(document.getElementsByClassName("grid-item"));


choice.forEach(choice =>{
    choice.addEventListener("click", e =>{
        const selected = e.target;
        const answer = selected.dataset["number"];

        if(answer == 1){
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=30&category=21&type=multiple")
            return window.location.assign('game.html');
        }
        if(answer == 2){
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=30&category=22&type=multiple")
            return window.location.assign('game.html');
        }
        if(answer == 3){
            //pop culture
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=30&category=26&type=multiple")
            return window.location.assign('game.html');
        }
        if(answer == 4){
            //movies
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=30&category=11&type=multiple")
            return window.location.assign('game.html');
        }
        if(answer == 5){
            //science
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=30&category=17&type=multiple")
            return window.location.assign('game.html');
        }
        if(answer == 6){
            //random
            localStorage.setItem("category", "https://opentdb.com/api.php?amount=50&type=multiple")
            return window.location.assign('game.html');
        }
    })
});
