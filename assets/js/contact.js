let gen_enq = document.querySelector('#gen_enq');
let bus_prop = document.querySelector('#bus_prop');

let contact_form_1 = document.querySelector('.contact_form_1');
let contact_form_2 = document.querySelector('.contact_form_2');

gen_enq.addEventListener('click', (event) => {
	if (contact_form_1.classList.contains('hide')) {
		contact_form_2.classList.remove('show');
		contact_form_2.classList.add('hide');
		contact_form_1.classList.remove('hide');
		contact_form_1.classList.add('show');
	}
});
bus_prop.addEventListener('click', (event) => {
	if (contact_form_2.classList.contains('hide')) {
		contact_form_1.classList.remove('show');
		contact_form_1.classList.add('hide');
		contact_form_2.classList.remove('hide');
		contact_form_2.classList.add('show');
	}
});
