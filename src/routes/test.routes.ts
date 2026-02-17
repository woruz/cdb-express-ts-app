import Router from "express";
import { testController } from "../controller/testController/test.controller";

const router = Router();

router.get("/hello", testController.helloResponse);
router.get("/hello/:username", testController.helloUserNameResponse);
router.post("/hello", testController.helloUserNamePostResponse);

export default router;
