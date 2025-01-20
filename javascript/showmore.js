"use strict";

$(document).ready(function() {

    
    $('a[href="#"]').click(function(event) {
        event.preventDefault(); 
        $(this).next('.hide').toggle();

        
        if ($(this).next('.hide').is(':visible')) {
            $(this).text('Show Less');
        } else {
            $(this).text('Show More');
        }
    });
});
