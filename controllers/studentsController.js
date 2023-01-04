const express = require("express");
const { response } = require("../app");
const controller = express.Router();

const studentData = require("../studentData.json");

controller.get("/", (req, res) => {
  try {
    res.json(studentData);
  } catch (err) {
    res.status(500).send("An Error Occurred");
  }
});

controller.get("/:id", (req, res) => {
  try {
    const studentId = req.params.id;

    if (!/[0-9]/.test(studentId)) {
      res.send("Student id must be a number!");
      return;
    }

    const singleStudent = studentData.students.find((student) => {
      return student.id === studentId;
    });

    if (singleStudent) {
      res.json(singleStudent);
    } else {
      res.send("No Student Available With That ID Number Please Try Again!");
    }
  } catch (err) {
    res.status(500).send("An Error Occurred");
  }
});

module.exports = controller;
