function kQuote() {
    fetch('https://api.kanye.rest/')
    .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            let kanTent = document.createElement("h2")
                kanTent.innerText = json.quote;
                document.body.appendChild(kanTent)
        });
}
document.getElementById('kWords').addEventListener('click', function() {
    kQuote()
});

