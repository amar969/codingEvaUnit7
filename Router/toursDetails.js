const express = require("express");
const fs = require("fs")
const Tours = JSON.parse(fs.readFileSync("/Users/amarjeetmaurya/Documents/Web Development /BackendPractice/CodingEvalution1/db.json"))


exports.getTours = (req , res) => {
    try {
        res.status(200).json({
            status: "success", 
            message: { 
                Tours
            }
            
        })
    } catch (error) {
        res.status(404).json({
            status: "error", 
            message: "Invalid"
        })
    }
}

exports.getToursByID = async(req, res) => {
    try {
        const tour = await Tours.findById(req.params.id)
        res.status(200).json({
          status: "success", 
          data: {
            tour
          }
        })
      } catch (error) {
        res.status(400).json({
          status: "Fail", 
          message: error
        })
      } 
}

exports.createTour = async(req, res) => {
    const newId = Tours[Tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
    console.log(req.body)
    Tours.push(newTour);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(Tours),
      (err) => {
        res.status(201).json({
          status: "success",
          data: {
            tour: newTour,
          },
        });
      }
    );
}

exports.deleteTour = async(req, res) => {

    try {
      await Tours.findByIdAndDelete(req.params.id)
      res.status(204).json({
        status: "success",
        data: null
       
      })
    } catch (error) {
      res.status(400).json({
        status: "fail", 
        message: error 
    })
    }
  };
