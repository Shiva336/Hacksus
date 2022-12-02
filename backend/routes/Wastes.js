const express = require('express');
const router = express.Router();

const { Wastes } = require("../models");


router.get("/maps", async (req, res) => { 
    const wasteList = await Wastes.findAll();
    res.json(wasteList);
});

router.post("/", async (req, res) => {
    console.log("Request data:");
    console.log(req.body);
    const Posts=req.body;
    await Wastes.create(Posts);
});
module.exports = router ;