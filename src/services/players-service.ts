import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-player-model";
import * as PlayerRepository from "../repositories/players-repository";
import { badRequest, created, noContent, OK } from "../utils/http-helper";

export const getPlayerService = async()=>{
    const responseService = await PlayerRepository.findAllPlayers();
    let response = null;
    if(responseService){
        response = await OK(responseService); 
    }else{
        response = await noContent();
    }
    return response;
}

export const getPlayerByIDService = async (id: number) => {
    // Pedir para op repositório de dados
    const data = await PlayerRepository.findPlayerById(id);
    let response = null;
    
    if(data){
        response = OK(data);
    }else{
        response = noContent();
    }

    return response;
}

export const createPlayerService = async(player: PlayerModel) =>{
    let response = null;
    
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        response = created();
    }else{
        response =  badRequest();
    }

    return response;
};

export const deletePlayerService = async(id: number) =>{
    let response = null;
    const isDeleted = await PlayerRepository.deletePlayer(id)
    if(isDeleted){
        response = OK({message: "deleted"});
    }else{
        response = badRequest();
    }
    
    return response;
};

export const modifyPlayerService = async (id:number, statistics:StatisticsModel) =>{
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let response = null
    if(Object.keys(data).length ===0) {
        response = await badRequest();
    }else{
        response = await OK(data);
    }

    return response;
};