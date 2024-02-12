import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  res.send("Created user");
};

export const getUser = (req: Request, res: Response) => {
  res.send("User returned successfully");
};
