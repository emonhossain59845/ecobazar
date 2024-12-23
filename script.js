$(document).ready(function(){
    $("#smSearchBtn").click(function(){
        $(".searchSm").addClass('active');
    });
    $('.searchSm .closeBtn').click(function(){
        $(".searchSm").removeClass('active');
    })
})