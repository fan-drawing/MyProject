 $('.close').click(function(){
    console.log()
    $(this).parents('.modal').hide();
    $('.modal-backdrop').hide();
})
$('.has-image').click(function(){
    console.log()
    $('.close').parents('.modal').show();
    $('.modal-backdrop').show();
})
$('.dropdown-toggle').click(function(){
	$('.dropdown-menu').removeClass('ng-hide');
	console.log('a');
})
$('.city-select-tab li').click(function(){
	$(this).index();
	$(this).addClass('active').siblings().removeClass('active');
})
$('.modal-backdrop').hide();
$('#citys').hide();
$('#quyueset').click(function(){
    
    console.log('a');
    $('.modal-backdrop').show();
    $('#gongneng').show();
})
$('#gongneng').click(function(){
    $('.modal-backdrop').hide();
    $('#gongneng').hide();
})

function quanxian(){
    $('.modal-backdrop').show();
    $('#shows').show();
}
function hides(id){
    $('#'+id).hide();
    $('.modal-backdrop').hide();

}
$('.modal-dialog').click(function(event){
    event.stopPropagation();
})
function close(this){
    console.log('a');
    $(this).parents('.modal-dialog').hide();
}
