import express from "express";
const router = express.Router();
import employees, { addEmployee } from "#db/data";
router.use(express.json())

router.route("/")
.get((req, res) => {
	res.send(employees);
})
.post((req, res) => {

    if(!req.body){
        return res.status(400).send("Request Body was not Found. Please send over the name of a new employee.")
    }

    const { name } = req.body

    addEmployee(name)
    res.status(201).send(`Added the employee ${name}`)
})

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
router.route("/random").get((req, res) => {
	const randomIndex = Math.floor(Math.random() * employees.length);
	res.send(employees[randomIndex]);
});

router.route("/:id").get((req, res) => {
	const { id } = req.params;

	// req.params are always strings, so we need to convert `id` into a number
	// before we can use it to find the employee
	const employee = employees.find((e) => e.id === +id);

	if (!employee) {
		return res.status(404).send("Employee not found");
	}

	res.send(employee);
});

export default router;
