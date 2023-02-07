let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function() {
	let tr = document.createElement('tr');

	let td;

	td = document.createElement('td');
	td.textContent = name.value;
	td.classList.add('name');
	tr.appendChild(td);

	td = document.createElement('td');
	td.textContent = price.value;
	td.classList.add('price');
	tr.appendChild(td);

	td = document.createElement('td');
	td.textContent = amount.value;
	td.classList.add('amount');
	tr.appendChild(td);

	td = document.createElement('td');
	td.textContent = price.value * amount.value;
	td.classList.add('cost');
	tr.appendChild(td);

	td = document.createElement('td');
	td.textContent = 'удалить';
	td.classList.add('remove');
	tr.appendChild(td);

	table.appendChild(tr);
});

function createCell(tr, value, name) {
	add.addEventListener('click', function() {
		let tr = document.createElement('tr');

		createCell(tr, name.value, 'name');
		createCell(tr, price.value, 'price');
		createCell(tr, amount.value, 'amount');
		createCell(tr, price.value * amount.value, 'cost');
		createCell(tr, 'удалить', 'remove');
	
		table.appendChild(tr);
	});
}

add.addEventListener('click', function() {
	let tr = document.createElement('tr');

	createCell(tr, name.value, 'name');
	createCell(tr, price.value, 'price');
	createCell(tr, amount.value, 'amount');
	createCell(tr, price.value * amount.value, 'cost');
	createCell(tr, 'удалить', 'remove');

	table.appendChild(tr);
	recountTotal(); 
});

function recountTotal() {
	let costs = table.querySelectorAll('.cost');
	if (costs) {

	}
}