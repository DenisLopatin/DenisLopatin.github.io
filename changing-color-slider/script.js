$(document).ready(function() {

    const rgbColor = {
        red: 0,
        green: 0,
        blue: 0,
    };
    const rgbBgColor = {
        red: 255,
        green: 255,
        blue: 255,
    };

    const $content = $('.content');
    const buttons = $('.ui-button');
    
    function setColor(color, value) {
        let willVary = null;
        $('.ui-button').each(function() {
            if ($(this).attr('data-select')) {
                willVary = $(this).attr('data-for');
            }
        });
        if (willVary === 'color') {
            rgbColor[color] = value;
            $content.css('color', `rgb(${rgbColor['red']}, ${rgbColor['green']}, ${rgbColor['blue']})`);
        } else {
            rgbBgColor[color] = value;
            $content.css('background-color', `rgb(${rgbBgColor['red']}, ${rgbBgColor['green']}, ${rgbBgColor['blue']})`);
        }
    }

    buttons.on('click', function() {
        buttons.each(function() {
            $(this).removeAttr('data-select');
        });
        $(this).attr('data-select', 'true');
    });

    $('.range').slider({
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        slide: function( event, ui ) {
            const color = $(this).attr('data-color');
            const value = ui.value;
            setColor(color, value);
        }
    });

});