function loadingShow(){
    $("body").css("position","relative");
    var before = document.getElementById("load");
    if (before != null)
        before.parentNode.removeChild(before);
    $('<img src="../../images/loading.gif" id="load">').appendTo('body');
    $('#load').show();
    var top=($(window).height()-$('#load').outerHeight())/2-60,
        
    top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(top>0?top:0);
    $('#load').css({
        left:'50%',
        marginLeft:'-40px',
        width:'60px',
        zIndex:'9999',
        backgroundColor:'#000',
        opacity:'0.6',
        padding:'10px',
        borderRadius:'7px',
        position:'absolute'
    }).animate({
        top : top
    },{ duration:100, queue:false });

};
function loadingHide(){
     $('#load').hide();
}