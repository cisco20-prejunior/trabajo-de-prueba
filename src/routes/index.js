const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index.html");
});
router.get("/conocenos", (req, res) => {
	res.render("conocenos.html");
});
router.get("/noticias", (req, res) => {
	res.render("noticias.html");
});
router.get("/maestros/inicial", (req, res) => {
	res.render("maestrosinicial.html");
});
router.get("/maestros/primaria", (req, res) => {
	res.render("maestrosprimaria.html");
});
router.get("/maestros/secundaria", (req, res) => {
	res.render("maestrosecundaria.html");
});
module.exports = router;
