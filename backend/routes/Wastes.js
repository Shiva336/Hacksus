const express = require('express');
const router = express.Router();

const { Wastes } = require("../models");


router.get("/", async (req, res) => {
    const wasteList = await Wastes.findAll();
    res.json(wasteList);
});

router.post("/", async (req, res) => {
    const wasteList = {
        m: req.body.m.checked,
        g: req.body.g.checked,
        p: req.body.p.checked,
        distance: req.body.distance,
        address: req.body.address,
        username: req.body.username
    };
    await Wastes.create(wasteList);
    res.json(wasteList);
});
module.exports = router ;