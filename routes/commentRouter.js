const router = require("express").Router();
import auth from "../middleware/auth";
import { createComment, updateComment, likeComment, unLikeComment, deleteComment } from "../controllers/commentCtrl";

router.post('/comment', auth, createComment);

router.patch('/comment/:id', auth, updateComment);

router.patch("/comment/:id/like", auth, likeComment);
router.patch("/comment/:id/unlike", auth, unLikeComment);
router.delete("/comment/:id", auth, deleteComment);



  export default router;