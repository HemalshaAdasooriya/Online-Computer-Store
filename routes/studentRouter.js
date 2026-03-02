import express from "express"
import { createStudent, deleteStudent, getStudent, updateStudent } from "../controllers/studentController.js";

const studentRouter = express.Router()

//get all students
studentRouter.get("/", getStudent);

//post request to create a student
studentRouter.post("/", createStudent);


//delete request to delete a student
studentRouter.delete("/",deleteStudent);


//put request to update a student
studentRouter.put("/",updateStudent)

export default studentRouter