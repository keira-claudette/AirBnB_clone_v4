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
});
