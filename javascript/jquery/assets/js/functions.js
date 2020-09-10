$("ul").on("click","li",function(){
    $(this).toggleClass("completo");
})

//Clicar no X para deletar tarefa
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var tarefa = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+tarefa+"</li>");

    }
})

