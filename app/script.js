
$('#load').show();
jQuery.ajax({
    url: 'https://dog.ceo/api/breeds/list/all',
    type: 'GET',
    showLoader: true,
    success: function (response) {
        // $('#load').hide();

        if (response.status == "success") {
            let jsonResponse = response.message;
            for (let key in jsonResponse) {
                let breedName = key;
                if (jsonResponse[key].length > 0) {
                    for (let i = 0; i < jsonResponse[key].length; i++) {
                        let dogName = jsonResponse[key][i];
                        jQuery('#dog-select').append(`<option value="${breedName + '/' + dogName}">${dogName + ' ' + breedName}</option>`);
                        console.log("Api request success");
                    }
                } else {
                    jQuery('#dog-select').append(`<option value="${breedName}">${breedName}</option>`);
                }
            }
        } else {
            alert(response.message)
        }
    },
    error: function () {
        $('#load').hide();
        $('#container').show();


        console.log("Api request error");
    },
    complete: function () {
console.log("API request completed");
$("#load").hide();
$("#container").show();
},
});
$('#fetchImage').click(getDogImage);
function getDogImage() {
    let dogName = jQuery('#dog-select').val();
    $('#load').show();
    $('#container').hide();



    jQuery.ajax({
        url: 'https://dog.ceo/api/breed/' + dogName + '/images/random',
        type: 'GET',
        showLoader: true,
        success: function (response) {
            $('#load').hide();

            if (response.status == "success") {
                jQuery('#dog-image').attr('src', response.message);
                console.log("Api request success");

            } else {
                alert(response.message)
            }
        },
        error: function () {
            console.log("Api request error");

        },
        complete: function () {
console.log("API request completed dog");
$("#load").hide();
$("#container").show();
},
    });
}
