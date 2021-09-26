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
    $('button').click(function() {
        $.ajax({
            type: "POST",
            url: "http://192.168.8.103:5001/api/v1/places_search/",
            data: '{"amenities": amenity_id}',
            // contenttype: "application/json",
        })
        .done(function(json) {
            // $('section.places').text(json);
            for (let i = 0; i < json.length; i++) {
                $(`<article>
                    <div class='title_box'>
                        <h2>${json[i].name}</h2>
                        <div class='price_by_night'>${json[i].price_by_night}</div>
                    </div>
                    <div class='information'>
                        <div class='max_guest'>${json[i].max_guest}</div>
                        <div class='number_rooms'>${json[i].number_rooms} </div>
                        <div class='number_bathrooms'>${json[i].number_bathrooms} </div>
                    </div>
                    <div class='description'>
                        ${json[i].description}
                    </div>
                </article>`).appendTo('section.place');
                // $('<div></div>').appendTo('section.place article').addClass('information');
                // $('<div></div>').appendTo('div.information').addClass('max_guest');
                // $('<div></div>').appendTo('div.max_guest').addClass('number_rooms');
                // $('<div></div>').appendTo('div.max_guest').addClass('number_bathrooms');
                // $('<div></div>').appendTo('section.place article').addClass('description');
                // // add the content
                // $('div.title_box h2').text(json[i].name);
                // $('div.title_box div.price_by_night').text(json[i].price_by_night);
                // $('div.information div.max_guest').text(json[i].max_guest);
                // $('div.information div.max_guest div.number_rooms').text(json[i].number_rooms);
                // $('div.information div.max_guest div.number_bathrooms').text(json[i].number_bathrooms);
                // $('div.description').text(json[i].description);
            }
        })
        
    });
    })
    

$.get('http://192.168.8.103:5001/api/v1/status/', function(data, textStatus)
{
    if (data.status == "OK"){
	$('#api_status').addClass('available');
    } else {
	$('#api_status').removeClass('available');
    }
});


// // for (let i = 0; i < json.length; i++) {
//         //     $('section.places').html(`
//         //         <article>
//         //             <div class='title_box'>
//         //                 <h2>${json[i].name}</h2>
//         //                 <div class='price_by_night'>${json[i].price_by_night}</div>
//         //             </div>
//         //             <div class='information'>
//         //                 <div class="max_guest">${json[i].max_guest} ${json[i].max_guest !== 1?"Guests" :"Guest"}</div>
//         //                 <div class="number_rooms">${json[i].number_rooms} ${json[i].number_rooms !== 1?"Bedrooms":"Bedroom"}</div>
//         //             </div>
//         //             <div class='description'>
//         //                 ${json[i].description}
//         //             </div>
//         //         </article>
//         //     `);