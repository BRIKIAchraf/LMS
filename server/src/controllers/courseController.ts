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
export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { teacherId, teacherName } = req.body;

    if (!teacherId || !teacherName) {
      res.status(400).json({ message: "Teacher ID and name are required" });
      return;
    }
    const newCourse = new Course({
      courseId: uuidv4(),
      teacherId,
      teacherName,
      title: "Unititled Course",
      description: "",
      category: "Uncategorized",
      image: "",
      price: 0,
      level: "Beginner",
      status: "Draft",
      sections: [],
      enrollments: [],
    });
    await course.save();
    res.json({ message: "Course created successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { courseId } = req.params;
  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    if (course.teacherId! == userId) {
      res
        .status(403)
        .json({ message: "You are not authorized to update this course" });
      return;
    }
    if (updateData.price) {
      const price = parseFloat(updateData.price);
      if (isNaN(price)) {
        res.status(400).json({
          message: "Price must be a number",
          error: "Price must be a valid number",
        });
        return;
      }
      updateData.price = price * 100;
    }
    if (updateData.sections) {
      const sections =
        typeof updateData.sections === "string"
          ? JSON.parse(updateData.sections)
          : updateData.sections;
      updateData.sections = sectionsData.map((section: any) => ({
        ...section,
        sectionId: section.sectionId || uuidv4(),
        chapters: section.chapters.map((chapter: any) => ({
          ...chapter,
          chapterId: chapter.chapterId || uuidv4(),
        })),
      }));
    }
    object.assign(course, updateCourse);
    await course.save();
    res.json({ message: "Course updated successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error updating course", error });
  }
};
