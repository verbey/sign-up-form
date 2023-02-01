const submit = document.querySelector("button[type=submit]");
const pass = document.querySelector("#pass");
const confPass = document.querySelector("#confPass");
submit.addEventListener("click", (e) => {
	if (pass.value != confPass.value) {
		e.preventDefault();
		confPass.setCustomValidity("Passwords must match!");
		confPass.reportValidity();
	}
});