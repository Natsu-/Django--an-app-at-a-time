
function postWithValues(urlToPost, selector, values) {

    $.post(urlToPost, values, function(data) {
        $(selector).find('.raw-body .result').text(data['raw_body']);
        $(selector).find('.getlist .result').html(data['getlist']);
        $(selector).find('.get .result').html(data['get']);
        $(selector).find('.get-paramlist .result').html(data['get_paramlist']);
    });
}


$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();
        
        var urlToPost = $(this).attr('action');
        // Doing serialize on form values
        
        var values = $(this).serialize();
        postWithValues(urlToPost, '#serialize-jquery', values);

    });
});
