// Javascript code

//Read function to read the url 
function readURL(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            $('#blah')
                .attr('src', e.target.result)
                .width(200)
                .height(200);

        };

        reader.readAsDataURL(input.files[0]);
    }
}

//ready function to display the images on webpage
$(document).ready(function () {

    $('.custom-file-input').on("change", function () {

        var fileName = $(this).val().split("\\").pop();

        $(this).next('.custom-file-label').html(fileName);

    });

});

