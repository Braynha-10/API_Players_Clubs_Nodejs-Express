import { PlayerModel } from "../models/players-model";
import { StatisticsModel } from "../models/statistics-player-model";

const database: PlayerModel[] = [
   {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami CF",
        nationality: "Argentina",
        position: "Foward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
   },
   {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Foward",
        statistics: {
            Overall: 92,
            Pace: 87,
            Shooting: 95,
            Passing: 82,
            Dribbling: 88,
            Defending: 35,
            Physical: 78,
        },
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "França",
        position: "Foward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 89,
            Passing: 82,
            Dribbling: 94,
            Defending: 36,
            Physical: 77,
        },
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Bélgica",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 94,
            Dribbling: 88,
            Defending: 64,
            Physical: 75,
        },
    },
    {
        id: 5,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Noruega",
        position: "Foward",
        statistics: {
            Overall: 90,
            Pace: 92,
            Shooting: 95,
            Passing: 79,
            Dribbling: 84,
            Defending: 43,
            Physical: 88,
        },
    },
    {
        id: 6,
        name: "Robert Lewandowski",
        club: "Barcelona",
        nationality: "Polônia",
        position: "Foward",
        statistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 93,
            Passing: 85,
            Dribbling: 86,
            Defending: 41,
            Physical: 83,
        },
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egito",
        position: "Foward",
        statistics: {
            Overall: 90,
            Pace: 91,
            Shooting: 94,
            Passing: 84,
            Dribbling: 90,
            Defending: 38,
            Physical: 76,
        },
    },
    {
        id: 8,
        name: "Neymar Jr",
        club: "Paris Saint-Germain",
        nationality: "Brasil",
        position: "Foward",
        statistics: {
            Overall: 90,
            Pace: 90,
            Shooting: 86,
            Passing: 87,
            Dribbling: 95,
            Defending: 33,
            Physical: 58,
        },
    },
    {
        id: 9,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Holanda",
        position: "Defender",
        statistics: {
            Overall: 90,
            Pace: 76,
            Shooting: 58,
            Passing: 74,
            Dribbling: 68,
            Defending: 92,
            Physical: 91,
        },
    },
    {
        id: 10,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "Inglaterra",
        position: "Foward",
        statistics: {
            Overall: 89,
            Pace: 76,
            Shooting: 92,
            Passing: 84,
            Dribbling: 81,
            Defending: 40,
            Physical: 82,
        },
    },
    {
        id: 11,
        name: "N'Golo Kanté",
        club: "Chelsea",
        nationality: "França",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 80,
            Shooting: 68,
            Passing: 81,
            Dribbling: 81,
            Defending: 90,
            Physical: 85,
        },
    },
    {
        id: 12,
        name: "Jan Oblak",
        club: "Atlético Madrid",
        nationality: "Eslovênia",
        position: "Goalkeeper",
        statistics: {
            Overall: 90,
            Pace: 65,
            Shooting: 15,
            Passing: 70,
            Dribbling: 28,
            Defending: 88,
            Physical: 85,
        },
    },
    {
        id: 13,
        name: "Luka Modrić",
        club: "Real Madrid",
        nationality: "Croácia",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 82,
            Passing: 91,
            Dribbling: 87,
            Defending: 72,
            Physical: 76,
        },
    },
    {
        id: 14,
        name: "Ederson Moraes",
        club: "Manchester City",
        nationality: "Brasil",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 63,
            Shooting: 16,
            Passing: 86,
            Dribbling: 30,
            Defending: 85,
            Physical: 82,
        },
    },
    {
        id: 15,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brasil",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 65,
            Shooting: 13,
            Passing: 79,
            Dribbling: 28,
            Defending: 87,
            Physical: 85,
        },
    },
    {
        id: 16,
        name: "Casemiro",
        club: "Manchester United",
        nationality: "Brasil",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 73,
            Shooting: 70,
            Passing: 78,
            Dribbling: 76,
            Defending: 89,
            Physical: 88,
        },
    },
    {
        id: 17,
        name: "Thiago Alcântara",
        club: "Liverpool",
        nationality: "Espanha",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 72,
            Shooting: 78,
            Passing: 90,
            Dribbling: 84,
            Defending: 69,
            Physical: 72,
        },
    },
    {
        id: 18,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Alemanha",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 75,
            Shooting: 81,
            Passing: 90,
            Dribbling: 82,
            Defending: 80,
            Physical: 78,
        },
    },
    {
        id: 19,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "Inglaterra",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 80,
            Shooting: 75,
            Passing: 88,
            Dribbling: 82,
            Defending: 83,
            Physical: 74,
        },
    },
    {
        id: 20,
        name: "Raheem Sterling",
        club: "Chelsea",
        nationality: "Inglaterra",
        position: "Foward",
        statistics: {
            Overall: 88,
            Pace: 92,
            Shooting: 86,
            Passing: 83,
            Dribbling: 89,
            Defending: 42,
            Physical: 69,
        },
    }
];

export const findAllPlayers = async(): Promise<PlayerModel[]> =>{
    return database;
};

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id)
};

export const insertPlayer = async (player: PlayerModel) =>{
    database.push(player);
};

export const deletePlayer = async (id: number) =>{
    const index = database.findIndex(p => p.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true;
    }

    return false;

};

export const findAndModifyPlayer = async (id:number, statistics: StatisticsModel): Promise<PlayerModel> =>{
    // find player
    const playerIndex = database.findIndex( player => player.id === id);
    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics
    }
    return database[playerIndex];
}