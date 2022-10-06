$(function() {
    //Striped table
    $('tr:nth-child(even)').css('background-color','#e6f5ff');
    $('tr:nth-child(odd)').css('background-color','inherit');
    
    //Scadenza certificato medico highlight
    $('span.highlight').each(function(i) {
        var dateString = $(this).text();
        var dateArray = dateString.split('-');
        var date = new Date(parseInt(dateArray[2]),parseInt(dateArray[1])-1,parseInt(dateArray[0]));
        //se la data non è valida coloro in rosso(tipo se non è stata inserita)
        if(!(date instanceof Date && isFinite(date)))
            $(this).css('background-color','#ff8080');      
        //se scade entro 30 giorni coloro in giallo (indicati in millisecondi)
        if( (date.getTime()-Date.now()) <= 1000*60*60*24*30)
            $(this).css('background-color','#ffffb3');
        //se scade entro 15 giorni coloro in arancio (indicati in millisecondi)
        if( (date.getTime()-Date.now()) <= 1000*60*60*24*15)
            $(this).css('background-color','#f8c471');
        //se è scaduto coloro in rosso (indicati in millisecondi)
        if( (date.getTime()-Date.now()) <= 0)
            $(this).css('background-color','#f1948a');
    });

})

//handle filter buttons
$(".btn").click(function () {  
    if ($(this).hasClass("active")){
        $(this).removeClass("active");
        $('tr').each(function(i){
            $(this).css('display','table-row');
        });
        $('tr:nth-child(even)').css('background-color','#e6f5ff');
        $('tr:nth-child(odd)').css('background-color','inherit');
    }
    else{
        $('.filter .btn').each(function(i) {
            if ($(this).hasClass("active"))
                $(this).removeClass("active");
        });
        $(this).addClass("active");    

        if($(this).text() == 'TUTTI'){
            $('tr').each(function(i){
                $(this).css('display','table-row');
            });
            $('tr:nth-child(even)').css('background-color','#e6f5ff');
            $('tr:nth-child(odd)').css('background-color','inherit');
        }
        if($(this).text() == 'U13'){
            $("tbody td:nth-child(3)").each(function(i) {
                if ($(this).text() != "u13")
                    $(this).parent().css("display","none");
                else
                    $(this).parent().css("display","table-row");

            });
        }
        if($(this).text() == 'U14'){
            $("tbody td:nth-child(3)").each(function(i) {
                if ($(this).text() != "u14")
                    $(this).parent().css("display","none");
                else
                    $(this).parent().css("display","table-row");
            });
        }
        if($(this).text() == 'U16'){
            $("tbody td:nth-child(3)").each(function(i) {
                if ($(this).text() != "u16")
                    $(this).parent().css("display","none");
                else
                    $(this).parent().css("display","table-row");
            });
        }
        if($(this).text() == 'LIBERA MISTA'){
            $("tbody td:nth-child(3)").each(function(i) {
                if ($(this).text() != "libera")
                    $(this).parent().css("display","none");
                else
                    $(this).parent().css("display","table-row");
            });
        }

        var cont=0;
        $("tr").each(function(i) {
            if($(this).css('display') == 'table-row'){
                if(cont%2 == 0)
                    $(this).css('background-color','#e6f5ff');
                else
                    $(this).css('background-color','inherit');
                cont++;
            }
        });
    }    
});

