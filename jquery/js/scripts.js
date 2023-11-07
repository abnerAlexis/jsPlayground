//This function will make sure that 
//the full content will be loaded.
$(document).ready(function () {
    console.log('Willcomme jQuerry.');

    // $('#btn2').click(function () {
    //     $('.second').hide();
    // });

    $('#btn3').on('click', function () {
        $('#third').hide();
    });

    //when pressed on 'h' seccond paragraph2 is hidden
    //when pressed on 's' second paragraph2 is shown again.
    $('body').keydown(function (event) {
        if (event.which === 72) {
            $('.second').hide();
        }

        if (event.which === 83) {
            $('.second').show();
        }
    });

    //Press and lift from key h hides Hidebutton3
    //Press and lift from key s shows Hidebutton3 again
    $('body').keyup(function (event) {
        if (event.which === 72) {
            $('#btn3').hide();
        }

        if (event.which === 83) {
            $('#btn3').show();
        }
    });

    //Hide page-title in a set time on click  - using toggle function

    $('#toggle-btn').on('click', function () {
        $('#page-title').toggle(2000, function () {
            console.log('Task Completed!');
        });
    });

    //fadeOut
    // $('#btn2').click(function () {
    //     $('.second').fadeOut();
    // });

    //fadeToggle
    $('#btn2').click(function () {
        $('.second').fadeToggle();
    });

    //fadeTo changes the opacity
    $('#btn1').on('click', function() {
        $('#first').fadeTo('slow', 0.5);
    })
});