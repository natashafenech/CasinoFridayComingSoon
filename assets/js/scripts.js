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

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}