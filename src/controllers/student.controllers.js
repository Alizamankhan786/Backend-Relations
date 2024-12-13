import Student from "../models/students.model.js";
import Course from "../models/course.model.js";
import mongoose from "mongoose";

const addStudent = async (req , res) => {

    const {fullName , email, enrolledCourse} = req.body;

    if (!fullName)
        return res.status(400).json({
          message: "Fullname is required",
        });
      if (!email)
        return res.status(400).json({
          message: "Email is required",
        });


    const student = await Student.create({
    fullName,
    email,
    enrolledCourse,
    });

    const course = await Course.findByIdAndUpdate(enrolledCourse , {
        $push: { enrolledStudents: student._id },
    });

    res.json({ message: "Student Added Successfully" });
    
};


const getStudent = async (req , res) => {
   
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const student = await student.findById(id).populate("enrolledCourse");

  if (!student) {
    res.status(404).json({
      message: "no Student found!",
    });
    return;
  }

  res.status(200).json(student)
}


export {addStudent , getStudent};