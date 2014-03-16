
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
        
        // Doing jQuery serialize() on form values
        var values = $(this).serialize();
        postWithValues(urlToPost, '#serialize-jquery', values);

        // Getting values separately, and adding each one to an array
        // We here want to "emulation" a full JS Array initialization
        // and put it in POST params sent to server
        var valuesArray = [];
        $(this).find(':selected').each(function() {
            valuesArray.push($(this).val());
        });
        values = {'params': valuesArray}
        postWithValues(urlToPost, '#raw-array', values);

        // Same, but respecting "serialize()/param()" logic
        var valuesArray2 = [];
        $(this).find(':selected').each(function() {
            valuesArray2.push({'name': 'params', 'value': $(this).val()});
        });
        postWithValues(urlToPost, '#serialize-jquery-manual', valuesArray2);

        // Same, but with json logic
        var valuesArray3 = [];
        $(this).find(':selected').each(function() {
            valuesArray3.push($(this).val());
        });
        json_data = JSON.stringify(valuesArray3);
        postWithValues(urlToPost, '#json-data', {'params': json_data});

        // Same, but with ajaxSettings traditional to "true"
        $.ajaxSettings.traditional = true;
        postWithValues(urlToPost, '#ajax-traditional', values);

    });
});
