var email_submit = document.getElementById("email_submit");
var email_body = document.getElementById("email_body");
email_submit.onclick = function() {
	var body = email_body.value;
	console.log(body);
	window.open(encodeURI("mailto:stampsofitaly@yahoo.ca?subject=Squared Circle Postmarks Inline Form&body="+body));
};