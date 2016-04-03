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

function submitForm() {
	
  var inputObj = $('#taskinput');
  
  if(inputObj.val() != "") {
  	var inputVal = inputObj.val();
  	$('#tasklist').append('<li>' + inputVal + ' <a class="rm">X</a></li>');
  }
  inputObj.val("");
}

function submitMessage() {
	
  var inputObj = $('.message-entry');
  
  if(inputObj.val() != "") {
  	var inputVal = inputObj.val();
  	var date = "April 3, 2016";
  	$('#message-section').append('<article><h4 class="message-date">' + date + ' - CM</h4><p class="message-content">' + inputVal + ' </p></article>');
  }
  inputObj.val("");
}

function submitNotes() {
	
  var inputObj = $('.notes-entry');
  
  if(inputObj.val() != "") {
  	var inputVal = inputObj.val();
  	var date = "April 3, 2016";
  	$('#notes-section').append('<article><h4 class="notes-date">' + date + '</h4><p class="notes-content">' + inputVal + ' </p></article>');
  }
  inputObj.val("");
}

$(document).on('click', '.rm', function (e) {
   e.preventDefault();
   $(this).parent().remove();
});

function onKeyDown(num) {
	var key = window.event.keyCode;
    // If the user has pressed enter
    if (key == 13) {
    	switch(num) {
    		case 0:
    			submitForm();
    			break;
    		case 1:
    			submitMessage();
    			break;
    		case 2:
    			submitNotes();
    			break;
    	}
    }
}
