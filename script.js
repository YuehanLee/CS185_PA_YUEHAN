function ModalImage(input){
	var modal = document.getElementById("myModal");
	var modalImg = document.getElementById("MI");

	modal.style.display = "block";
	modalImg.src = input.src;

	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display = "none";
		}
	}
}

/*https://www.w3schools.com/howto/howto_css_modal_images.asp*/


function ModalVideo(input){
	var modal = document.getElementById("myModal");
	var modalR = document.getElementById("MR");

	modal.style.display = "block";
	modalR.src = input.src;

	window.onclick = function(event){
		if(event.target == modal){
			modal.style.display = "none";
		}
	}
}


document.addEventListener("scroll", ToTopH);

function ToTop(){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}
function ToTopH(){
	var ToTopB = document.getElementById("ToTop");
	var height = window.innerHeight/4;
	if(document.documentElement.scrollTop>height || document.body.scrollTop >height){
		ToTopB.style.display="block";
	}else{
		ToTopB.style.display="none";
	}


}

//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
//Can't find a valid regular expression by myself
function CheckEmail(){
	const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var emailinput = document.getElementById("email");
	var message = document.getElementById("message");
	if(mailformat.test(emailinput.value.toLowerCase())){
		message.innerHTML = "Email successfully recorded";
	}else{
		message.innerHTML = "Invalid email address";
	}
}