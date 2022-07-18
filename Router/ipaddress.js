const express = require("express")
const dns = require("dns");

let ipAdd = []
exports.ipAddress = (req,res) => {
    let ip = req.body.myip
    const options= {
        all: true,
    }
    res.status(200).json({
        status: "Success", 
        dns : dns.lookup(ip, options, (err, address) => ipAdd.push(address)),
        ipAddress: ipAdd[ipAdd.length-1]
    })
}