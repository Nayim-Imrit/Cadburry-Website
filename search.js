//simple js validation
function nav_search(){
	var check;
	check = document.getElementById("search-input").value;
	if (check == null || check == ""){
		alert("Please fill in the search bar.");
	} else {
		alert("Input Ok...Searching")
	}
}

//search validation in JS
// function content_search(){
// 	var check1;
// 	var message;
// 	check1 = document.getElementById("validationServer02").value;
// 	if (isNaN(check1) || check1 < 1 || check1 > 99999) {
// 		message = " Whoops! Looks like that post code isn't valid.";
// 	} else {
// 			message = "Input OK...Searching";
// 	}
// 	document.getElementById("c-error-message").innerHTML = message;
// }

//search validation in jquery
$(document).ready(function(){
	$('#create_error').click(function()
	{
			var zip = $('#validationServer02').val();

			var zipRegex = /^\d{5}$/;
			
			var message;

			if (!zipRegex.test(zip))
			{
					// trigger error
					message = " Whoops! Looks like that post code isn't valid.";
			}
			else
			{
					// success!
					message = "Input OK...Searching";
			}
			$('#c-error-message').text(message);
	});
});

//disablind-enabling button JS
// function stoppedTyping(){
// 	var validatingInput = document.getElementById("validationServer02");
// 	if (validatingInput.value==" "){
// 		document.getElementById('create_error').disabled = true; 
// 	} else {
// 		document.getElementById('create_error').disabled = false;
// 	}
// }

//disabling-enabling button Jquery
$(document).ready(function(){
	$(':text').keyup(function(){
		if($('#validationServer02').val()!= "") {
			$('#create_error').removeAttr('disabled');
		} else {
			$('#create_error').attr('disabled', true);
		}
	});
});
