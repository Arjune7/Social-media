const router = require("express").Router();
import auth from "../middleware/auth";
import { createMessage, getConversations, getMessages } from "../controllers/messageCtrl";

router.post("/message", auth, createMessage);

router.get("/conversations", auth, getConversations);

router.get("/message/:id", auth, getMessages);


export default router;
