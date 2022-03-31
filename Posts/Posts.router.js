const Router = require("express");
const Posts = require("./Posts.controller");

const router = new Router();

router.get("/posts", Posts.getAll);
router.post("/posts", Posts.create);
router.get("/posts/:id", Posts.getOne);
router.delete("/posts/:id", Posts.delete);

module.exports = router;
