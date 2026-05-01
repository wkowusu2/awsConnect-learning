import { Request, Response } from "express";

function getHome(req: Request, res: Response): Response<any, Record<string, any>>{
    return res.status(200).json({
        success: true,
        message: "Welcome Home"
    })
}

function writeHome(req: Request, res: Response): Response<any, Record<string, any>>{
    const pathParam = req.params;
    console.log("writing to db...")
    return res.status(200).json({
        success: true,
        message: `You wrote ${pathParam}`
    })
}

function sum(a: number, b: number): number {
  return a + b;
}

export {getHome, writeHome, sum}

