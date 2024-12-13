import Course from "../models/course.models.js"; 

const addCourse = async (req , res) => {

    const {name , duration} = req.body;

    if (!name) return res.status(400).json({ 
        message: "Name is required"
    });

    const course = await Course.create({
        name , duration
    });

    res.json({
        message: "Course Created SuccessFully"
    });
};


const getCourse = async (req, res) => {
    const course = await Course.find({}).populate("enrolledStudents")
    res.json(course);
  };

export {addCourse , getCourse};