$(function() {
    var cal = {
        'LIBERA MISTA': ['VA16','VA17','VA18'],
        'U16': ['VA07','VA08','VA09','VA10']
    }
    
    var $calendars = $('#calendario');
    $('#categoria').change(function () {
        var country = $(this).val();
        var calendars = cal[country] || [];
        
        var html = $.map(calendars, function(cld){
            return '<option value="' + cld + '">' + cld + '</option>'
        }).join('');
        $calendars.html(html)
    });
});