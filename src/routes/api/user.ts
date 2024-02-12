import { Router } from "express";
import { createUser, getUser } from "../../controllers/usres";

const router: Router = Router();

router.post("/", createUser);
router.get("/:id", getUser);

export default router;
