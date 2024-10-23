import express from "express";
import router from "./routes";
import cors from "cors";

function createApp(){
    const app = express();

    app.use(express.json());
    app.use("/api", router);

    // Parametrizando o cors limitando o acesso da API para sites e métodos especificos
    // const corsOptions = {
    //     origin:"http://Braynhao.system.com", http://gov.br,
    //     methods: ["GET", UPDATE],
    // };
    // app.use(cors(corsOptions))

    app.use(cors());

    return app;
}


export default createApp;