function pubPop(msg){
    $("body").css("position","relative");
    $('<div id="pubPop"><a href="javascript:void(0);" class="fr">x</a><p class="point">'+ msg +'</p></div>').appendTo('body');
    $('#pubPop').show();
    var left=($(window).width()-$('#pubPop').outerWidth())/2,
        top=($(window).height()-$('#pubPop').outerHeight())/2,
        
    top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(top>0?top:0);

    $('#pubPop').css({
        left:left,
    }).animate({
        top : top
    },{ duration:100, queue:false });

    $('#pubPop a').click(function(){
        $('#pubPop').hide();
    });

};