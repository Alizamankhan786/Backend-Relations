import Student from "../models/students.model.js";
import Course from "../models/course.model.js";

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
    
}


export {addStudent};