$(document).ready(function(){
    $("#search").keyup(function() {
        let searchSong = $(this).val();
        if(searchSong != "") {
            $.ajax(
                {
                    url: "https://itunes.apple.com/search?term="+searchSong+"&entity=song",
                    type: "GET",
                    dataType:"json",
                    success: function(data) {
                        let rezultat= "";
                        $.each(data.results, function(index, items) {
                            rezultat += '<li>'+items.artistName+'-'+items.trackName+'</li>';
                        });
                        $("#rezultat").html(rezultat);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        let noResult = "";
                        console.log("AJAX error: "+textStatus+" "+errorThrown)
                        noResult += "This artist doesn't exist"
                        $("#rezultat").html(noResult);
                    }
                }
            );
        } else {
            $("#rezultat").html("");
        }
    }) 
}) 