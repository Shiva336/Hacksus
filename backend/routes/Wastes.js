const express = require('express');
const router = express.Router();

const { Wastes } = require("../models");


router.get("/", async (req, res) => {
    const wasteList = await Wastes.findAll();
    res.json(wasteList);
});

router.post("/", async (req, res) => {
    const wasteList = req.body;
    await Wastes.create(wasteList);
    res.json(wasteList);
});
module.exports = router ;