import express from "express";
const app = express();
import employeesRouter from "./api/employees.js";

app.use(express.json());

app.route("/").get((req, res) => {
	res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).send("AN ERROR OCCURRED" + err);
});

export default app;
