var jim = {
	name : "Kim",
	phone : "(123) 456-7899",
	email : "fake@gmail.com"
}


function fillRefugeeCard(obj) {

	$('.contact-cell p').eq(0).text(obj.name);
	$('.contact-cell p').eq(1).text(obj.phone);
	$('.contact-cell p').eq(2).text(obj.email);

}

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