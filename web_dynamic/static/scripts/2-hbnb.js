$.get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus)
{
    if (textStatus == "Success"){
	$('#api_status').addClass('available');
    } else {
	$('#api_status').removeClass('available');
    }
});



$( document ).ready(function() {
    let amenity_list = [];
    if($('input[type="checkbox"]').prop('checked')){
	amenity_list.push($(this).attr('data-id'));
	console.log($(this).attr('data-id'))
    } else {
	amenity_list.splice(amniety_list.indexof($(this).attr('data-id')), 1);
    }
    if (amenity_list.length() > 0) {
	$("DIV H4").text(...amenity_list);
    }
});