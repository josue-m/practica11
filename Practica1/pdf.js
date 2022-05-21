var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", function(req, res)
{
    return res.sendFile(path.join(__dirname, "public", "pdf.html"));
})

module.exports = router;
