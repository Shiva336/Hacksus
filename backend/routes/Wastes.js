const express = require('express');
const router = express.Router();

const { Wastes } = require("../models");


router.get("/", async (req, res) => {
    const wasteList = await Wastes.findAll();
    res.json(wasteList);
});

router.post("/", async (req, res) => {
    const waste = req.body;
    Wastes.create(waste);
    console.log("suxcc");
});
module.exports = router ;