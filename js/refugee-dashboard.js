var jim = {
	name : "Kim",
	phone : "(123) 456-7899",
	email : "fake@gmail.com"
}

//functions for contact database
function fillRefugeeCard(obj) {

	$('.contact-cell p').eq(0).text(obj.name);
	$('.contact-cell p').eq(1).text(obj.phone);
	$('.contact-cell p').eq(2).text(obj.email);

}
a1
function fillCaseManagerCard(obj) {

	$('.contact-cell p').eq(3).text(obj.name);
	$('.contact-cell p').eq(4).text(obj.phone);
	$('.contact-cell p').eq(5).text(obj.email);

}

function fillCoSponsorCard(obj) {

	$('.contact-cell p').eq(6).text(obj.name);
	$('.contact-cell p').eq(7).text(obj.phone);
	$('.contact-cell p').eq(8).text(obj.email);

}


//function for task list

$('input').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<rm>x</rm></li>');
        //$('ul').append('<li>' + input_value '<a href="">x</a></li>');

    };
    $('input').val('');
    return false;
});

$(document).on('click', 'rm', function (e) {
    e.preventDefault();
    $(this).parent().remove();
});‹

