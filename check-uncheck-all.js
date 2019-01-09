$("input[name=all_flag]").click(function(){
    if($(this).is(":checked")){

        $("input[name=vedio_flag]").prop('checked', true);
        $("input[name=audio_flag]").prop('checked', true);

    }
    else if($(this).is(":not(:checked)")){

        $("input[name=vedio_flag]").prop('checked', false);
        $("input[name=audio_flag]").prop('checked', false);

    }
});

$("input[name=vedio_flag], input[name=audio_flag]").click(function(){
    if($(this).is(":not(:checked)")){

        $("input[name=all_flag]").prop('checked', false);

    }
});