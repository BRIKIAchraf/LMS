import { Request, response } from "express";
import { v4 as uuidv4 } from "uuid";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;
  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();
    res.json({ message: "Courses retrieved successfully", data: courses });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving courses", error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params;
  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ messsage: "Course not found" });
      return;
    }
    res.json({ message: "Course retrieved successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving course", error });
  }
};
