const submit = document.querySelector(".coming-soon__button"),
		control = document.querySelector(".control");
var text = "";

submit.addEventListener('click',(event)=>{
	event.preventDefault();

	text = document.querySelector(".coming-soon__input").value;

	if(!validateEmail(text)) {
		control.classList.add("fail");
	}
	else {
		control.classList.remove("fail");
	}
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}