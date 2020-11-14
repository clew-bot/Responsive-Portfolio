$(document).ready(function() {
    console.log("READY FOR JQUERY");
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
            
            //var theAuthor = data[random].author;
            console.log(theQuote)
            quote.innerHTML = `Random Quote: ${theQuote}`
            //author.innerHTML = `Author: ${if(theAuthor === null) {return "Author Unknown"} else {theAuthor}}`

        
    


    }






)})