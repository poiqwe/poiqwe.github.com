// Our validation function
// We pass in our "form" object which contains references to all the elements in our form

function validate(form)
{	
	document.getElementById("lblErrMsg").innerHTML = "";
	// Be sure to clear out old error messages before you do your validation!
	// An example of how to set the lblPostage to empty
    document.getElementById("lblPostage").innerHTML = "";
	
	// To access the value of a form input, we do form.inputname.value
	// For example, to check if the first name is empty we do:
	
	if (form.txtFirstName.value == "")
		alert("You left the first name empty!"); // Alert the user that they left the first name empty
	
	// You'll also need to check if their zip code is valid. You should use regular expresions to do this.
	// Be sure to format your regex properly so that it only allows valid, 5-digit zip codes
	// Below is an example of how to use regular expressions
	var zipRegex=/\d{5}/;
	
	if (form.txtSrcZipCode.value.search(zipRegex) == -1 || form.txtSrcZipCode.value.length != 5)
		document.getElementById("lblErrMsg").innerHTML += "Invalid zip code<br/>";
	
	// Also, make sure their weight isn't zero or negative!
	// You'll need to convert the weight from your form into a number
	// and check if user input a number properly
    // If everything looks okay, calculate postage!
	
	// If you want to write your result or any errors to the page
	// You'll need to use the getElementById method:
	document.getElementById("lblPostage").innerHTML = 500; // Set postage to 500
	
}
