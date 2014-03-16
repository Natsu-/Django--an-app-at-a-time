
$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        
        var urlToPost = $(this).attr('action');
        // Doing serialize on form values
        
        var values = $(this).serialize();
        $.post(urlToPost, values, function(data) {
            
            $('#serialize-jquery .getlist .result').html(data['getlist']);
            $('#serialize-jquery .get .result').html(data['get']);
            console.log(data);
            console.log(data['get_paramlist']);
            $('#serialize-jquery .get-paramlist .result').html(data['get_paramlist']);
        });

    });
});
