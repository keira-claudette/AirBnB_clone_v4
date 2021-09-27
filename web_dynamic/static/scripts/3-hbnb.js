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
        if (amenity_id.length >= 0) {
            $("DIV.amenities H4").text(amenity_name.join(', '));
        }
    });
    $.ajax({
        type: 'POST',
        url: 'http://192.168.8.103:5001/api/v1/places_search/',
        data: '{}',
        dataType: 'json',
        contentType: 'application/json',
    })
    .done(function(places) {
        // $('section.places').text(json);
        places.forEach(place => {
            $(`<article>
                <div class='title_box'>
                    <h2>${place.name}</h2>
                    <div class='price_by_night'>$${place.price_by_night}</div>
                </div>
                <div class='information'>
                    <div class='max_guest'>${place.max_guest}</div>
                    <div class='number_rooms'>${place.number_rooms} </div>
                    <div class='number_bathrooms'>${place.number_bathrooms} </div>
                </div>
                <div class='description'>
                    ${place.description}
                </div>
            </article>`).appendTo('section.places');
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
    
});

// // for (let i = 0; i < json.length; i++) {
//         //     $('section.places').html(`
//         //         <article>
//         //             <div class='title_box'>
//         //                 <h2>$place.name}</h2>
//         //                 <div class='price_by_night'>$place.price_by_night}</div>
//         //             </div>
//         //             <div class='information'>
//         //                 <div class="max_guest">$place.max_guest} $place.max_guest !== 1?"Guests" :"Guest"}</div>
//         //                 <div class="number_rooms">$place.number_rooms} $place.number_rooms !== 1?"Bedrooms":"Bedroom"}</div>
//         //             </div>
//         //             <div class='description'>
//         //                 $place.description}
//         //             </div>
//         //         </article>
//         //     `);