const Router = require("express");
const Posts = require("./Posts.controller");

const router = new Router();

router.get("/posts", (req, res) => {
  res.status(200).json(res);
});
router.post("/posts", Posts.create);
router.get("/posts/:id");
router.delete("/posts/:id");

module.exports = router;
