$(document).ready(function(){
    let pretragaInput = $("#search");
    let rezultatPretrage = $("#rezultat");

    pretragaInput.on("input", function(event) {
        let pojamPretrage = event.target.value.trim();
        let pretragaUrl = `https://itunes.apple.com/search?term=${pojamPretrage}&entity=song`;
        $.ajax({
            url:pretragaUrl,
            method:"GET",
            datatype:"json",
            success: function(data) {
                rezultatPretrage.empty();
                if(data.resultCount == 0) {
                    rezultatPretrage.text("Nije pronađeno podudaranje");
                } else {
                    $.each(data.results, function(index, result) {
                        let imePjesme = result.trackName;
                        let imeIzvodaca = result.artistName;
                        let pjesmaElement = $("<li></li>").text(imeIzvodaca + " - " + imePjesme);
                        rezultatPretrage.append(pjesmaElement);
                    })
                }
            },
            error: function(error) {
                console.log(error);
                rezultatPretrage.text("Problemi s dohvatom podataka. Molimo pokušati kasnije");
            }
        })
    })
})