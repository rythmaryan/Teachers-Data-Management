function validateform(a,b,c,d)
{
	validatePhoneNumber(a);
	validateemail(b);
	cmppwd(c,d);
}
function validatePhoneNumber(input_str) 

{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    var truth=!(re.test(input_str))
	
	if(truth){
		alert("invalid phone number");
		document.getElementById('phone').value="";
	}
	  
}
function validateemail(input_str) 

{
    var re = /@nitk.edu.in\s*$/;

    var truth=!(re.test(input_str))
	
	if(truth){
		alert("invalid email");
		document.getElementById('email').value="";
	}
	  
}
function cmppwd(c,d)
{    var truth=(c==d)
     
	 fal=!truth
	 if(fal){
		 alert("password not matching enter again");
		 document.getElementById('password').value="";
		 document.getElementById('rpassword').value="";
	 }
}
