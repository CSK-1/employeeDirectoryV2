const employees = [
	{ id: 1, name: "Carolynn McGinlay" },
	{ id: 2, name: "Lodovico Filon" },
	{ id: 3, name: "Jefferey Wahlberg" },
	{ id: 4, name: "Kayley Tures" },
	{ id: 5, name: "Rickard Carver" },
	{ id: 6, name: "Michael Stryde" },
	{ id: 7, name: "Averell Santino" },
	{ id: 8, name: "Constantina Connue" },
	{ id: 9, name: "Verile Bondesen" },
	{ id: 10, name: "Gwen Grollmann" },
];

export function addEmployee(employee) {
	const nextId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
	const newEmployee = {
		id: nextId,
		name: employee,
	};
	employees.push(newEmployee);
}

export default employees;
