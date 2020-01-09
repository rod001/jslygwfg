"use strict";

const router = require("express").Router(),
multer = require('multer'),
upload = multer({ dest: './public/images/uploads/' }),
  coursesController = require("../controllers/coursesController");

router.get("", coursesController.index, coursesController.indexView);
router.get("/new", coursesController.new);
router.post("/create", coursesController.create, coursesController.redirectView);
router.get("/:id/edit", coursesController.edit);
router.put("/:id/update", coursesController.update, coursesController.redirectView);
router.get("/:id", coursesController.show, coursesController.showView);
router.delete("/:id/delete", coursesController.delete, coursesController.redirectView);

router.post('/create', upload.single('image_file'), function(req, res) { // 変更
  console.log(req.file); 
});
module.exports = router;
