$( document ).ready(function() {
    let amenity_id = [];
    let amenity_name = [];
    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
            amenity_id.push($(this).attr('data-id'));
            amenity_name.push($(this).attr('data-name'));
        } else {
            amenity_id.splice(amenity_id.indexOf($(this).attr('data-id')),1);
            amenity_name.splice(amenity_name.indexOf($(this).attr('data-name')),1);
        }
        if (amenity_id.length > 0) {
            $("DIV.amenities H4").text(amenity_name.join(', '));
        }
    });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function(data, textStatus)
{
    if (data.status == "OK"){
	$('#api_status').addClass('available');
    } else {
	$('#api_status').removeClass('available');
    }
});

$.ajax({
    type: "POST",
    url: "http://192.168.8.103:5001/api/v1/places_search/",
    data: "{}",
    contenttype: "application/json",
})
.done(function( json ) {
    for (let i = 0; i < json.length; i++) {
        $('<article></article>').appendTo('section.place');
        $('<div></div>').appendTo('section.place article').addClass('title_box');
        $('<h2></h2>').appendTo('article .title_box');
        $('<div></div>').appendTo('div.title_box').addClass('price_by_night');
        $('<div></div>').appendTo('section.place article').addClass('information');
        $('<div></div>').appendTo('div.information').addClass('max_guest');
        $('<div></div>').appendTo('div.max_guest').addClass('number_rooms');
        $('<div></div>').appendTo('div.max_guest').addClass('number_bathrooms');
        $('<div></div>').appendTo('section.place article').addClass('description');

        // add the content
        $('div.title_box h2').text(json.name);
        $('div.title_box div.price_by_night').text(json.price_by_night);
        $('div.information div.max_guest').text(json.max_guest);
        $('div.information div.max_guest div.number_rooms').text(json.number_rooms);
        $('div.information div.max_guest div.number_bathrooms').text(json.number_bathrooms);
        $('div.description').text(json.description);
    }
})