const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .delete(contacts.deleteAll)
    .post(contacts.create)
    .get(contacts.findAll);

router.route("/favorite")
    .get(contacts.findAllFavorite) ;

router.route("/:id")
    .delete(contacts.delete)
    .put(contacts.update)
    .get(contacts.findOne)
    
    ;

module.exports = router; 