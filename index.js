const express = require("express");
const app = express()
const { ipAddress } = require("./Router/ipaddress");
const { getTours, getToursByID, createTour, deleteTour } = require("./Router/toursDetails");
const port = 9090; 

app.use(express.json())
app.get("/",(req, res) => {
    res.send("Welcome to the Express server")
})

//get my ip
app.post("/getmeip", ipAddress)
app.get("/tours/getDetails", getTours)
app.get("/tours/getDetails/:id", getToursByID)
app.post("/tours/getDetails", createTour)
app.delete("/tours/getDetails/:id", deleteTour)

app.listen(port, (req,res) => {
    console.log(`Server is up and running at ${port}`)    
})