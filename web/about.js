console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Look how smart you are, testing out my form submit button. Success!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let test = document.getElementById("test");

test.addEventListener("mouseover", () => {
  alert("You deserve a nice snack and some time to relax. You work hard, So proud of you! Now go take a break.")
  , false;
}) 
