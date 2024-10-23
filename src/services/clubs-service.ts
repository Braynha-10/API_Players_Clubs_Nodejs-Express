import { badRequest, created, noContent, OK } from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository"

export const getClubService =async ()=>{
    const data = await repository.findAllClubs();
    const response = OK(data);

    return response;
};