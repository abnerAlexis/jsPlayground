$(document).ready(function() {
    $('#btn1').on('click', function() {
        $('#box').animate({
            width: '200px',
            height: '200px',
            fontSize: '30px',
        },
        'slow',
        );
    });
});