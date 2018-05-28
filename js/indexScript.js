    $(document).ready(function(){
        $('#accordion-js').find('h2').click(function(){
            $(this).next().stop().slideToggle();
        }).next().stop().hide();

    });

    $('h4').next().hide();

    $('h4').click(function(){
        $(this).next().slideToggle();
        $('h4').not(this).next().stop(true,true).slideUp();
    });