$(function () {
    //check if running on iOS (maybe even on other OS, to check) in standalone web app mode
    if(("standalone" in window.navigator) && window.navigator.standalone){
        $('a').on('click', function(event){
            event.preventDefault();
            const new_location = $(this).attr('href');
            if (new_location != undefined &&
                new_location.substr(0,1) != '#' &&
                $(this).attr('data-method') == undefined){
                window.location = new_location;
            }
        });
    }
})
