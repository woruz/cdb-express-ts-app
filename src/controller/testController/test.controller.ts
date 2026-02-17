import { Request, Response, NextFunction } from "express";

const helloResponse = (req: Request, res: Response) => {
  res.send("Hello World!");
};

const helloUserNameResponse = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username } = req.params;

  if (!username) {
    return next({ status: 400, message: "Username is required" });
  }

  res.send(`Hello ${username}`);
};

const helloUserNamePostResponse = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const postData = req.body;

  if (!postData || !postData?.username) {
    return next({ status: 400, message: "Username is required" });
  }

  res.send(`Hello ${postData.username}`);
};

export const testController = {
  helloResponse,
  helloUserNameResponse,
  helloUserNamePostResponse,
};
