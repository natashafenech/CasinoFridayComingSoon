$(window).scroll(function () {

});

$(document).ready(function () {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwIhVZo7pYe1K7ek-jg_uD-aUGKt99pli7G0q2JLAlCwlqlRTnS/exec'
    const form = document.forms['getbeta']
    var submitButton = $('input[type=submit]', form);

    form.addEventListener('submit', e => {
        e.preventDefault();
        submitButton.prop('disabled', false);
        $('.pre').hide();
        $('.post').show();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                submitButton.prop('disabled', false);
                $('.pre').hide();
                $('.post').show();
            })
            .catch(error => console.error('Error!', error.message))
    })
});