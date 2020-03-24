$(document).ready( function(){
    $("#mavideo").fitVids();
    ajoutermenu();
    maj_menu();
    })
$(window).resize(function() {maj_menu();});

function ajoutermenu()
{
    $("#mainNav ul").before('<div id="bt_menu"><a href="#" style="text-decoration: none">☰</a></div>');
    $("#bt_menu").click(function(){$("#mainNav ul").toggle();});
}

function maj_menu(){
    var largeur=document.body.clientWidth;
    if(largeur<480)
    {
        $("bt_menu").show(1000);
        $("#mainNav ul").hide(1000);
    }
    else
    {
        $("#bt_menu").hide(1000);
        $("#mainNav ul").show(1000);
    }
}