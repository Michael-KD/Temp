$(".new").hide();

$(".present").click(function() {
    $(".old").hide();
    $(".new").show();
});

$(".past").click(function() {
    $(".new").hide();
    $(".old").show();
});


