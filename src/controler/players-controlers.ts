// O Controller recebe coisas e repassa coisas
import { Request, Response } from "express";
import * as Service from "../services/players-service";
import { StatisticsModel } from "../models/statistics-player-model";

export const getPlayer = async(req: Request, res: Response) =>{
    const httpResponse = await Service.getPlayerService();
    res.status(httpResponse.statusCode).json(httpResponse.body);
};
export const getPlayerByID = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const httpResponse = await Service.getPlayerByIDService(id)
    res.status(httpResponse.statusCode).json(httpResponse.body)
};

export const postPlayer = async(req: Request, res: Response) =>{
    const bodyValue = req.body;
    const httpResponse = await Service.createPlayerService(bodyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
};

export const deletePlayer = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const httpResponse = await Service.deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body)

};

export const modifyPlayer = async(req: Request, res: Response) =>{
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;
    const httpResponse = await Service.modifyPlayerService(id, bodyValue);
    
    res.status(httpResponse.statusCode).json(httpResponse.body)
};