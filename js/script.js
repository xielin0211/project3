jQuery (document) . ready(function ($){
    $('#convertercm').on('submit', function(event){
        alert('Form Submission Intercepted!');
        event.preventDefault();
        var $inches = $('#inches');
        var inches = $inches.val();
        var inchestocentimeter = $("#inches-centimeters").val();
        $('#totalinch').html('Loading');
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            inchestocentimeter = result.data[inchestocentimeter];
            var total = (inches) * (inchestocentimeter);
            $("#totalinch").html(total + ' cm');
        });
    });
    $('#converterinch').on('submit', function(event){
        alert('Form Submission Intercepted!');
        event.preventDefault();
        var $centimeters = $('#centimeters');
        var centimeters = $centimeters.val();
        var centimeterstoinches = $("#centimeters-inches").val();
        $('#totalcm').html('Loading');
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            centimeterstoinches = result.data[centimeterstoinches];
            var total = (centimeters) * (centimeterstoinches);
           
            $("#totalcm").html(total +' inch');
        });
    });
}); 
