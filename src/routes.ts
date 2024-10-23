import { Router } from "express";
import * as PlayerController from "./controler/players-controlers";
import * as ClubsController from "./controler/clubs-controller"


const router = Router();

router.get("/players", PlayerController.getPlayer);

// toda vez que tenho ":" na rota  significa que é um route param
router.get("/players/:id", PlayerController.getPlayerByID);

router.post("/players", PlayerController.postPlayer);

router.delete("/players/:id", PlayerController.deletePlayer);

router.patch("/players/:id", PlayerController.modifyPlayer);

router.get("/clubs", ClubsController.getClubs);

export default router