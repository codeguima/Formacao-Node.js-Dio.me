import {Request, Response } from "express";
import { getPlayerService } from "../services/players.service";
import { StatusCode } from "../utils/status-code";

export const getPlayer = async (req: Request, res: Response) => {

    const data = await getPlayerService();
    res.status(StatusCode.OK).json(data);

};


