import Student from "../models/student.js"

export function getStudent(req,res){
        Student.find().then((students)=>{
        res.json(students)
    })
}

export function createStudent(req,res){
     console.log(req.body)
     const student = new Student(req.body)
     student.save().then(
        ()=>{
            res.json({
                message : "Student created successfully"
            })
        }
     )
}

export function deleteStudent(req,res){
    console.log("delete request received")

    res.json({
        message : "Good Bye " + req.body.name
    })
}


export function updateStudent(req,res){
    console.log("put request received")

    res.json({
        message : "See you again " + req.body.name
    })
}