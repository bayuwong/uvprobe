$(document).ready(function() {

    $('#start').click(function() {
        $('#cell-blank').show();
        document.getElementById("start").disabled = true;
        var title = $(this).attr('title');
        var reff = document.getElementById("reff-slot").value;
        var samp = document.getElementById("samp-slot").value;
        // console.log(samp);
        if(1==reff && 2==samp){
            x = "image/chart_spektrum.PNG";
            document.getElementById("title-operation").innerHTML = 'Print';
            document.getElementById("this-overlay").innerHTML = '<img src="'+x+'">';
            document.getElementById("operation").innerHTML = '<img src="image/table_spektrum.jpeg">';
        }
        if(1==reff && 1==samp){
            document.getElementById("operation").innerHTML = '<img src="image/table_methyl.PNG">';
            document.getElementById("title-operation").innerHTML = 'Print';
            document.getElementById("this-overlay").innerHTML = '<img src="image/chart_methyl.PNG">';
        }
        if(2==reff && 1==samp){
            document.getElementById("operation").innerHTML = '<img src="image/table_methyl.PNG">';
            document.getElementById("title-operation").innerHTML = 'Print';
            document.getElementById("this-overlay").innerHTML = '<img src="image/chart_methyl.PNG">';
        }
        if(2==reff && 2==samp){
            document.getElementById("operation").innerHTML = '<img src="image/table_methyl.PNG">';
            document.getElementById("title-operation").innerHTML = 'Print';
            document.getElementById("this-overlay").innerHTML = '<img src="image/chart_methyl.PNG">';
        }
    });

    $('#reff-slot').change(function() {
        $('#cell-blank').show();
        $('#start').prop('disabled', false);
    });

    $('#samp-slot').change(function() {
        $('#cell-blank').show();
        $('#start').prop('disabled', false);
    });

    $('#m').click(function() {
        $('#cell-blank').show();
        var blink_speed = 500;
        var t = setInterval(function () {
            var start = document.getElementById('start-wavelength-label');
            var stop = document.getElementById('stop-wavelength-label');
            start.style.visibility = (start.style.visibility == 'hidden' ? '' : 'hidden');
            stop.style.visibility = (stop.style.visibility == 'hidden' ? '' : 'hidden');
        }, blink_speed);
    });
    
    $('#start-wavelength').click(function() {
        $('#start-wavelength-label').remove();
        console.log('ok');
        $('#cell-blank').show();
        document.getElementById("div-start-wavelength-label").innerHTML = '<label for="start-wavelength" id="start-wavelength-label" class="col-form-label">start wavelength:</label>';
    });

});