$(window).scroll(function () {

});

$(document).ready(function () {
    $('#getbeta').submit(function (event) {
        event.preventDefault();

        var formEl = $(this);
        var submitButton = $('input[type=submit]', formEl);

        $.ajax({
            type: 'POST',
            url: formEl.prop('action'),
            accept: {
                javascript: 'application/javascript'
            },
            data: formEl.serialize(),
            beforeSend: function () {
                submitButton.prop('disabled', 'disabled');
            }
        }).done(function (data) {
            submitButton.prop('disabled', false);
            $('.pre').hide();
            $('.post').show();
        });        
    });
});