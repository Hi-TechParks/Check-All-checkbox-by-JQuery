// checkbox all-check-button selector
$("input[name=all_flag]").click(function(){
    if($(this).is(":checked")){
        // check all checkbox
        $("input[name=vedio_flag]").prop('checked', true);
        $("input[name=audio_flag]").prop('checked', true);

    }
    else if($(this).is(":not(:checked)")){
        // uncheck all checkbox
        $("input[name=vedio_flag]").prop('checked', false);
        $("input[name=audio_flag]").prop('checked', false);

    }
});

// uncheck all-checkbox if anyone checkbox get uncheck
$("input[name=vedio_flag], input[name=audio_flag]").click(function(){
    if($(this).is(":not(:checked)")){

        $("input[name=all_flag]").prop('checked', false);

    }
});