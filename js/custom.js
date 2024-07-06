$(document).ready(function(){

    $("#curtain").velocity("transition.slideUpOut", {
        duration: 2000,
        complete: function(){
            $("#LOGO").velocity("transition.bounceLeftIn");
            $("#sale").velocity("transition.bounceDownIn");
            
            $("#hea").append("<p>Hi, I am an append element</p>");


        }
    });

    $("#closeBtn").click(function(){
        $("#lightbox").velocity("fadeOut", { duration: 1000 });
    });

    $("#saleBtn").click(function(){

        var customHTML = "<ul>"
        customHTML += "Product Under Development"
        customHTML += "</ul>"

        $("#lb_content_text").html(customHTML);
        $("#lightbox").velocity("fadeIn", { duration: 1000, display: "flex" });
        $("#saleBtn").text("Maybe Later");
    });


});
