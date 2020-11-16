$(document).ready(function() {
    var showMoreInfo = document.getElementById('showMoreInfo');
    var hideInfo = document.querySelector(".lead1");
    var div = document.getElementById('hideMe');
    div.setAttribute("style","display:none;")
    console.log(hideInfo)
    hideInfo = true;
    
    showMoreInfo.addEventListener("click", function() {
        
        if (hideInfo === true) {
        div.setAttribute("style", "display:block;");
        hideInfo = false
        } else if (hideInfo === false){
            div.setAttribute("style", "display:none;");
            hideInfo = true
            
        }
    })

var quote = document.getElementById("randomQuote");
var author = document.getElementById("author")
    const url = "https://type.fit/api/quotes";
    $.ajax({
        url: url,
        method: "get"
    }).then (function(response) {
        const data = JSON.parse(response)
            const random = parseInt(Math.random() * 90)
            console.log(random);
            console.log(data[random].text);
            var theQuote = data[random].text;
            console.log(theQuote.split(":"))
            
            //var theAuthor = data[random].author;
            console.log(theQuote)
            quote.innerHTML = `${theQuote}`
            //author.innerHTML = `Author: ${if(theAuthor === null) {return "Author Unknown"} else {theAuthor}}`

    }






)})