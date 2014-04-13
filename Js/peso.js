var pianeti = ["mia", "mercurio", "venere", "marte", "giove", "saturno", "urano", "nettuno"];
var valoreGravita = [9.81, 8.87, 3.71, 23.12, 8.96, 8.69, 11.0];


$(document).ready(function(){
    $(".pianeta").click(function(){
        
        var peso = $("input[name='ricerca']").val();
        console.log(peso);
        
        if(peso == null){
            $("#contenuto_testo").append("<p>ERRORE NELL?INSERIMENTO</p>");
        }
        
        var id = $(this).attr('id');
        console.log(id);
        
        for(var i = 0; i<valoreGravita.length; i++){
            if(id == pianeti[i]){
                var pesoSuPianeta = peso/valoreGravita[0]*valoreGravita[i];
                console.log(pesoSuPianeta);
                $("#contenuto_testo").empty();
                $("#contenuto_testo").append("<p>"+pesoSuPianeta+"</p>");
            }
        }
        
    });    
});
    