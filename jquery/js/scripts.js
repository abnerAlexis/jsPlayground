console.log('Willcomme jQuerry.');

$('#btn2').click(function(){
    $('.second').hide();
});

$('#btn3').on('click', function() {
    $('#third').hide();
});

$('body').keydown(function(event) {
    if (event.which === 72) {
        $('.second').hide();
    }

    if (event.which === 83) {
        $('.second').show();
    }
})